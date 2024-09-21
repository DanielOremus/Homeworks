class Favor {
  #price
  #duration
  constructor(name, price, durationInDays) {
    this.name = name
    this.Price = price
    this.Duration = durationInDays
  }
  get Price() {
    return this.#price
  }
  set Price(value) {
    if (isNaN(value) || value <= 0) throw new Error("Некоректна ціна послуги")
    this.#price = value
  }

  get Duration() {
    return this.#duration
  }
  set Duration(durationInDays) {
    if (isNaN(durationInDays) || durationInDays <= 0)
      throw new Error("Некоректний термін виконання")
    this.#duration = durationInDays
  }
}
