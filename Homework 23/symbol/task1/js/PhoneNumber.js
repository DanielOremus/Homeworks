class PhoneNumber {
  constructor(phoneNumber, operatorsArr) {
    this.phoneNumber = phoneNumber
    this.operatorsArr = operatorsArr
  }
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "string":
        const first3Num = /^\d{3}/.exec(this.phoneNumber)?.[0]
        const operatorObj = this.operatorsArr.find(
          (obj) => obj.code === first3Num
        )
        return `${this.phoneNumber} - ${operatorObj?.name || "Not Found"}`
      case "number":
        return this.phoneNumber
      default:
        return this.phoneNumber
    }
  }
}
