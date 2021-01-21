// const fs = require("fs");
// const util = require("util");
const InquierBuilder = require("./services/InquierBuilder");
const {getFile} = require("./services/getFile");
const {csvReader} = require("./services/CsvReader");
const {csvWriter} = require("./services/CsvWriter")
const {identificationApiClient} = require("./api/IdentificationApiClient")

// Using for .env file to add API ID and KEY.
require("dotenv").config();
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

async function runProcess() {
  try {
    //get file path
    //const path = await InquierBuilder.path();
    const path = {"path" : "test-csv.csv"}
    //get the file
    const file = await getFile(path);
    //get data from file.
    const csvData = csvReader(file);
    //make algopix api request. The promise holding an array of request.
    const apiResponseData = await identificationApiClient(csvData);
    console.log(apiResponseData)
    //write to csv
    //csvWriter(apiResponseData);
  } catch (err) {
    console.log("Error runProcess" + err);
   
  }
}

runProcess();
