const csv = require("csvtojson");

// TODO: Add input field for path
const getFile = () => {
  return csv().fromFile("./test-csv.csv"); // ### Change input path and file name here: ###
};

module.exports.getFile = getFile;
