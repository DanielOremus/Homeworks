class GoldenClient extends Client {
  constructor(
    firstName,
    secondName,
    initialBalance,
    creditLimit,
    creditUsageFee
  ) {
    super(firstName, secondName, initialBalance)
    this.creditLimit = creditLimit
    this.creditUsageFee = creditUsageFee
  }
  getPenalty() {
    return this.creditLimit * this.creditUsageFee
  }
  toString() {
    return `Golden Client: ${super.getFullName()} - Balance: ${
      super.Balance
    } - Credit Limit: ${this.creditLimit} - Usage Fee: ${this.creditUsageFee}`
  }
}
