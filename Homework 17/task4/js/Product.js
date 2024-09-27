class Product {
  static id = 0
  #quantity
  get Quantity() {
    return this.#quantity
  }
  set Quantity(value) {
    if (value < 0 || isNaN(value))
      throw new Error("Кількість продукту некоректна")

    this.#quantity = value
  }
  constructor(title, unit, quantity, companiesArray) {
    this.id = Product.id++
    this.title = title
    this.unitOfMeasurement = unit
    this.Quantity = quantity
    this.manufacturer = this.getRandomCompany(companiesArray)
  }
  getRandomCompany(array) {
    const randIndex = Math.floor(Math.random() * array.length)
    return array[randIndex]
  }
  checkDeltaQ(deltaQ) {
    if (deltaQ < 0 || isNaN(deltaQ))
      throw new Error("Кількість для зміни некоректна")
  }
  increaseQuantity(deltaQ) {
    this.checkDeltaQ(deltaQ)
    this.Quantity += deltaQ
  }
  decreaseQuantity(deltaQ) {
    this.checkDeltaQ(deltaQ)
    const newValue = this.Quantity - deltaQ
    if (newValue < 0) throw new Error("Цього товару нема в такій кількості")
    this.Quantity = newValue
  }
}
