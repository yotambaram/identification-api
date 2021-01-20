const axios = require("axios");
const { itirateCsvHeaders } = require("../services/HeadersValidation");

async function identificationApiClient(csvRowsDataArr) {
  try {
    const validateHeadersObj = await itirateCsvHeaders(csvRowsDataArr[0]);
    const queriesArr = queryBuilder(csvRowsDataArr, validateHeadersObj);

    return (apiResponseData = await Promise.all(
      identificationApiCall(queriesArr)
    ));
  } catch (err) {
    console.log("Erorr identificationApiClient");
    console.log(err);
  }
}

const identificationApiCall = (queriesArr) => {
  headersObj = {
    "X-APP-ID": process.env.X_APP_ID,
    "X-API-KEY": process.env.X_API_KEY,
  };

  return queriesArr.map((url) => {
    return axios({
      method: "get",
      url: url,
      headers: headersObj,
    });
  });
};

//TODO: Do it cleaner (headers validation, keywords - Required field, use join?)
queryBuilder = (dataArr, validateObj) => {
  ///////// <- use validateObj to validate
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
