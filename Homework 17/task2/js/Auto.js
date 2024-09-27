class Auto {
  static firstAuto
  constructor(brand, driver, number) {
    if (Auto.firstAuto) {
      return Auto.firstAuto
    }
    this.brand = brand
    this.driver = driver
    this.number = number
    Auto.firstAuto = this
  }
  toString() {
    return `Марка: ${this.brand}\nВодій: ${this.driver}\nНомер: ${this.number}`
  }
}
