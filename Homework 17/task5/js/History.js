class History {
  constructor() {
    this.testsList = []
  }
  addTestResult(testData) {
    this.testsList.push(testData)
  }
  toString() {
    return this.testsList.join("\n")
  }
}
