class Product {
  static id = 0
  constructor(title, price, quantity, imgSrc) {
    this.id = ++Product.id
    this.title = title
    this.price = price
    this.quantity = quantity
    this.imgSrc = imgSrc
  }
  getTotalSum(quantity = this.quantity) {
    return this.price * quantity
  }
}
