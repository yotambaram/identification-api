const axios = require("axios");
const rateLimit = require('axios-rate-limit');


const { itirateCsvHeaders } = require("../services/HeadersValidation");

async function identificationApiClient(csvRowsDataArr) {
  try {
    //const validateHeadersObj = await itirateCsvHeaders(csvRowsDataArr[0]); // <- Get headers validation obj
    const queriesArr = queryBuilder(csvRowsDataArr, /*validateHeadersObj*/);
    return (apiResponseData = await Promise.all(
      apiRequest(queriesArr)
    ));
  } catch (err) {
    console.log("Erorr identificationApiClient");
    console.log(err);
  }
}

const apiRequest = (queriesArr) => {
  headersObj = {
    "X-APP-ID": process.env.X_APP_ID,
    "X-API-KEY": process.env.X_API_KEY,
  };

  const http = rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 1000, maxRPS: 1 })
  
  return queriesArr.map((url) => {
    return http.get(url, {headers: headersObj}) // will perform immediately
  });
};

//TODO: Do it cleaner (export queryBuilder from dif service, headers validation, keywords - Required field...)
const queryBuilder = (csvInputDataArr, /*validateObj*/) => {   ///////// <- use validateObj to validate
  const tempQueries = [];
  const BASE_URL = "https://api.algopix.com/v3/multiItemsSearch?";
  for (let i = 0; i < csvInputDataArr.length; i++) {
    let currentQuery = Object.keys(csvInputDataArr[i])
      .filter((key) => {
        return !csvInputDataArr[i][key] || key === "index" ? false : true;
      })
      .map((key) => {
        return (
          encodeURIComponent(key).replace("_", "") +
          "=" +
          encodeURIComponent(csvInputDataArr[i][key])
        );
      })
      .join("&");
    tempQueries.push(BASE_URL + currentQuery.toLowerCase());
  }
  // TODO: fix Error 429 - QPS (number of calls per second) is 1.
  return tempQueries;
}

module.exports.identificationApiClient = identificationApiClient;
