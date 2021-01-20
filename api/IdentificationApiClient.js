const axios = require("axios");
const { itirateCsvHeaders } = require("../services/HeadersValidation");

async function identificationApiClient(csvRowsDataArr) {
  const headersObj = {
    "X-APP-ID": process.env.X_APP_ID,
    "X-API-KEY": process.env.X_API_KEY,
  };

  try {
    // Get headers from user input file
    const validateHeadersObj = await itirateCsvHeaders(csvRowsDataArr[0]);
    // Build array of queries
    const queriesArr = queryBuilder(csvRowsDataArr, validateHeadersObj);
    // Make Algopix API requests
    const apiCallsArr = queriesArr.map((queries) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let apiCall = axios({
            method: "get",
            url: queries,
            headers: headersObj,
          }).catch( error => {
            if (error.response) {
              // Request made and server responded
              console.log("Error response Algopix API requests");
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log("Error request Algopix API requests");
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
          })
          resolve(apiCall);
        }, 2000);
      });
    });
 
    let apiDataResult = Promise.all(apiCallsArr);
    return apiDataResult;
  } catch (err) {
    console.log("Erorr identificationApiClient");
    console.log(err);
  }
}

//TODO: Do it cleaner (headers validation, keywords - Required field, use join?)
// Move function to ./servies/QueryBuilder.js
queryBuilder = (dataArr, validateObj) => { ///////// <- use validateObj to validate
  const tempQueries = [];
  const BASE_URL = "https://api.algopix.com/v3/multiItemsSearch?";
  for (let i = 0; i < dataArr.length; i++) {
    let currentQuery = Object.keys(dataArr[i])
      .filter((key) => {
        return !dataArr[i][key] || key === "index" ? false : true;
      })
      .map((key) => {
        return (
          encodeURIComponent(key).replace("_", "") +
          "=" +
          encodeURIComponent(dataArr[i][key])
        );
      })
      .join("&");
    tempQueries.push(BASE_URL + currentQuery.toLowerCase());
  }
  // TODO: fix Error 429 - QPS (number of calls per second) is 1.
  return tempQueries;
};

module.exports.identificationApiClient = identificationApiClient;
