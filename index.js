const fs = require("fs");
const util = require("util");
const getFile = require("./services/getFile").getFile;
const csvReader = require("./services/CsvReader").csvReader;
const csvWriter = require("./services/CsvWriter").csvWriter;
const identificationApiClient = require("./api/IdentificationApiClient")
  .identificationApiClient;
require("dotenv").config();

// Using for .env file to add API ID and KEY.
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

async function runProcess() {
  try {
    //get the file.
    const file = await getFile();
    //get data from file.
    const csvData = csvReader(file);
    //make algopix api request. The promise holding an array of request.
    const apiResponseData = await Promise.all(identificationApiClient(csvData));

    //////////////
    //const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    // let apiResponseData = await Promise.all(identificationApiClient(csvData));
    // apiResponseData.reduce(function(promise, apiResponseData) {
    //   return promise.then(function(result) {
    //     return Promise.all([delay(2000), csvWriter(apiResponseData)]);
    //   });
    // }, Promise.resolve());
    //////////////
 
    //write to csv
    csvWriter(apiResponseData);
  } catch (err) {
    console.log(err);
  }
}

runProcess();
