class Product {
  constructor() {}

  set keywords(keywords) {
    this._keywords = keywords;
  }
  set color(color) {
    this._color = color;
  }
  set brand(brand) {
    this._brand = brand;
  }
  set googleGbCategoryId(googleGbCategoryId) {
    this._googleGbCategoryId = googleGbCategoryId;
  }
  set amazonSearchIndex(amazonSearchIndex) {
    this._amazonSearchIndex = amazonSearchIndex;
  }
  set amazonCategoryId(amazonCategoryId) {
    this._amazonCategoryId = amazonCategoryId;
  }
  set minPrice(minPrice) {
    this._minPrice = minPrice;
  }
  set maxPrice(maxPrice) {
    this._maxPrice = maxPrice;
  }
  set currencyCode(currencyCode) {
    this._currencyCode = currencyCode;
  }

  get keywords() {
    return this.keywords;
  }
  get color() {
    return this.color;
  }
  get brand() {
    return this.brand;
  }
  get googleGbCategoryId() {
    return this.googleGbCategoryId;
  }
  get amazonSearchIndex() {
    return this.amazonSearchIndex;
  }
  get amazonCategoryId() {
    return this.amazonCategoryId;
  }
  get minPrice() {
    return this.minPrice;
  }
  get maxPrice() {
    return this.maxPrice;
  }
  get currencyCode() {
    this.currencyCode;
  }
}

module.exports.Product = Product;
