const IdentificationApiRequest = require("../models/IdentificationApiRequest");
const _ = require("lodash");
const productsSearhArr = [];

// TODO: Check how to do it better and take out the index from the class.
module.exports = {
  csvReader: (data) => {
    let currentProduct;
    // Build Product class for each row.
    data.forEach((row) => {
      currentProduct = new IdentificationApiRequest.Product();
      Object.assign(currentProduct, row);
      productsSearhArr.push(currentProduct);
    });
    return productsSearhArr;
  },
  csvHeadersReader: (csvRowObj) => {
    return _.keys(csvRowObj);
  },
};
