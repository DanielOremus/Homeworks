class TestManager {
  static firstManager
  constructor(interval, problemsNumber, checkers, containerSelector) {
    if (TestManager.firstManager) return TestManager.firstManager
    this.interval = interval
    this.problemsNumber = problemsNumber
    this.checkers = checkers
    this.container = document.querySelector(containerSelector)
    this.history = new History()
    TestManager.firstManager = this
  }
  start() {
    let myInterval
    myInterval = setInterval(() => {
      const randomChecker = this.getRandomChecker()
      const testData = randomChecker.askQuestion()
      this.history.addTestResult(testData)
      if (--this.problemsNumber <= 0) {
        this.stop(myInterval)
        this.displayResult()
      }
    }, this.interval)
  }
  stop(intervalId) {
    clearInterval(intervalId)
  }
  displayResult() {
    this.container.innerText = this.history
  }
  getRandomChecker() {
    const randIndex = Math.floor(Math.random() * this.checkers.length)
    return this.checkers[randIndex]
  }
}
