class Product {
  constructor(title, price, amount) {
    this.title = title
    this.price = price
    this.amount = amount
  }
  get TotalPrice() {
    return this.price * this.amount
  }
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "string":
        return `Назва - ${this.title}, Ціна за шт. - ${this.price}, Кількість - ${this.amount}`
      case "number":
        return this.price
      default:
        return this.title
    }
  }
}
