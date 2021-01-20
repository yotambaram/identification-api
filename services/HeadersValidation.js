const { keyValidation } = require("./UserPrompt");
const { headers } = require("../models/Headers");
const _ = require("lodash");
const { csvHeadersReader } = require("../services/CsvReader");

const itirateCsvHeaders = async (dataObj) => {
  let csvHeader = csvHeadersReader(dataObj);
  let keep = true;
  let count = 0;
  const responses = {};
  while (keep) {
    const validateobj = await keyValidation(headers, csvHeader[count]);
    _.assign(responses, validateobj);
    count = count + 1;
    keep = !_.isEmpty(csvHeader[count]);
  }
  return responses;
};

module.exports.itirateCsvHeaders = itirateCsvHeaders;
