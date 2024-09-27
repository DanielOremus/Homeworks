class TestManager {
  constructor(interval, problemsNumber, checkers, containerSelector) {
    this.interval = interval
    this.problemsNumber = problemsNumber
    this.checkers = checkers
    this.container = document.querySelector(containerSelector)
    this.history = new History()
  }
  start() {
    let myInterval
    myInterval = setInterval(() => {
      const randomChecker = this.getRandomChecker()
      const testData = randomChecker.generateAndAskProblem()
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
