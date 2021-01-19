const csv = require("csvtojson");

// TODO: Add input field for path
const getFile = ({path}) => {
  return csv().fromFile("./" + path); // ### Change input path and file name here: ###
};

module.exports.getFile = getFile;
