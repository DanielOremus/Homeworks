class Client {
  static id = 0
  #balance
  constructor(firstName, secondName, initialBalance) {
    this.id = ++Client.id
    this.firstName = firstName
    this.secondName = secondName
    this.Balance = initialBalance
  }
  get Balance() {
    return this.#balance
  }
  validateDeltaVal(deltaVal) {
    if (deltaVal < 0 || isNaN(deltaVal))
      throw new Error("Entered money sum is invalid")
  }
  set Balance(newValue) {
    if (newValue < 0) throw new Error("Money sum cannot be negative")
    this.#balance = newValue
  }
  depositMoney(delta) {
    this.validateDeltaVal(delta)
    this.Balance += delta
  }
  withdrawMoney(delta) {
    this.validateDeltaVal(delta)
    if (delta > this.Balance)
      throw new Error("There are not enough funds on your balance")
    this.Balance -= delta
  }

  getFullName() {
    return `${this.firstName} ${this.secondName}`
  }
  toString() {
    return `Client: ${this.getFullName()} - Balance: ${this.balance} `
  }
}
