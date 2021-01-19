// const fs = require("fs");
// const util = require("util");
const InquierBuilder = require("./services/InquierBuilder");
const {getFile} = require("./services/getFile");
const {csvReader} = require("./services/CsvReader");
const {csvWriter} = require("./services/CsvWriter")
const {identificationApiClient} = require("./api/IdentificationApiClient")

require("dotenv").config();
// Using for .env file to add API ID and KEY.
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

async function runProcess() {
  try {
    //get file path
    const path = await InquierBuilder.path();
    //get the file
    const file = await getFile(path);
    //get data from file.
    const csvData = csvReader(file);
    //make algopix api request. The promise holding an array of request.
    const apiResponseData = await identificationApiClient(csvData);
    //write to csv
    csvWriter(apiResponseData);
  } catch (err) {
    console.log("Error runProcess" + err);
   
  }
}

runProcess();
