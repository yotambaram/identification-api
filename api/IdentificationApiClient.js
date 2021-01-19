const axios = require("axios");


const identificationApiClient = (csvRowsData) => {
  headersObj = {
    "X-APP-ID": process.env.X_APP_ID,
    "X-API-KEY": process.env.X_API_KEY,
  };

  let queriesArr = queryBuilder(csvRowsData);

  return queriesArr.map((url) => {
    return axios({
      method: "get",
      url: url,
      headers: headersObj,
    });
  });
};

//TODO: Do it cleaner (dont use index, headers validation, keywords - Required field, use join?)
const queryBuilder = (data) => {

  const temtQueries = [];
  const BASE_URL = "https://api.algopix.com/v3/multiItemsSearch?";

  for (let i = 0; i < data.length; i++) {
    let currentQuery = Object.keys(data[i])
    .filter(function (key) {
      return !data[i][key] || key === "index" ? false : true;
    })
    .map(function (key) {
      return encodeURIComponent(key).replace("_", "") + "=" + encodeURIComponent(data[i][key])
    })
    .join('&');
    temtQueries.push(BASE_URL + currentQuery.toLowerCase());
  }
  // TODO: fix Error 429 - QPS (number of calls per second) is 1.
  return temtQueries;
};

module.exports.identificationApiClient = identificationApiClient;