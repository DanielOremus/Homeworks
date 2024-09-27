class History {
  static firstHistory
  constructor() {
    if (History.firstHistory) return History.firstHistory
    this.testsList = []
    History.firstHistory = this
  }
  addTestResult(testData) {
    this.testsList.push(testData)
  }
  toString() {
    return this.testsList.join("\n")
  }
}
