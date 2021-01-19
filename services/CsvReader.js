const IdentificationApiRequest = require("../IdentificationApiRequest");

const productsSearhArr = [];

// TODO: Check how to do it better and take out the index from the class.
const csvReader = (data) => {
  let currentProduct;
  // Build Product class for each row.
  data.forEach((row) => {
    currentProduct = new IdentificationApiRequest.Product();
    Object.assign(currentProduct, row);
    productsSearhArr.push(currentProduct);
  });
  return productsSearhArr;
};

module.exports.csvReader = csvReader;
