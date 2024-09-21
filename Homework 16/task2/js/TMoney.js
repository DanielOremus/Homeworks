class TMoney {
  #money
  #exchangeRate
  constructor(sumInUSD, usdRate, containerSelector) {
    this.Money = sumInUSD
    this.ExchangeRate = usdRate
    this.container = document.querySelector(containerSelector)
  }
  get ExchangeRate() {
    return this.#exchangeRate
  }
  get Money() {
    return this.#money
  }
  set ExchangeRate(rate) {
    if (rate <= 0 || isNaN(rate)) throw new Error("Некоректне значення курсу")
    this.#exchangeRate = rate
  }
  set Money(newUSDAmount) {
    if (newUSDAmount < 0 || isNaN(newUSDAmount))
      throw new Error("Некоректне значення суми/На балансі недостатньо коштів")
    this.#money = newUSDAmount
  }
  addMoneyAmount(sumInUAH) {
    console.log(sumInUAH)

    if (sumInUAH <= 0 || isNaN(sumInUAH))
      throw new Error("Введіть коректну кількість для депозиту")
    this.Money = this.Money + this.convertToUSD(sumInUAH)
  }
  withdrawMoneyAmount(sumInUAH) {
    if (sumInUAH <= 0 || isNaN(sumInUAH))
      throw new Error("Введіть коректну кількість для зняття")
    this.Money = this.Money - this.convertToUSD(sumInUAH)
  }
  convertToUSD(sumInUAH) {
    return sumInUAH / this.ExchangeRate
  }
  convertToUAH() {
    return this.Money * this.ExchangeRate
  }
  getOwnRate(sumInUAH) {
    if (sumInUAH <= 0 || isNaN(sumInUAH))
      throw new Error("Введіть коректну суму для знаходження курсу")

    return (this.ExchangeRate * (sumInUAH + 100)) / sumInUAH
  }
  toString() {
    return `Сума: ${this.Money} USD. Курс: 1 USD = ${this.ExchangeRate} UAH`
  }
  displayBalance() {
    this.container.textContent = this
  }
}
