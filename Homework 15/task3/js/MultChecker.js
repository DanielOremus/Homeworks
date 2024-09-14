class MultChecker {
  constructor(firstNumber, resultSelector) {
    this.container = document.querySelector(resultSelector)
    this.resultLogs = []
    this.firstNumber = firstNumber
    this.correctAnswersNumber = 0
    this.incorrectAnswersNumber = 0
  }
  generateRandomNumber(min = 1, max = 9) {
    return min + Math.floor(Math.random() * max - min + 1)
  }
  generateQuestion() {
    return `${this.firstNumber} * ${this.secondNumber} = `
  }
  getCorrectAns() {
    return this.firstNumber * this.secondNumber
  }
  answerProcessing(myInterval) {
    this.secondNumber = this.generateRandomNumber()
    const userAns = parseInt(prompt(this.generateQuestion()))
    if (!isNaN(userAns)) {
      const correctAns = this.getCorrectAns()
      correctAns === userAns
        ? this.correctAnswersNumber++
        : this.incorrectAnswersNumber++

      this.resultLogs.push(
        new ResultLog(this.firstNumber, this.secondNumber, userAns, correctAns)
      )
    } else {
      clearInterval(myInterval)
      this.render()
    }
  }
  start() {
    const myInterval = setInterval(
      () => this.answerProcessing(myInterval),
      5000
    )
  }
  render() {
    this.container.innerText = `Correct: ${this.correctAnswersNumber} - incorrect: ${this.incorrectAnswersNumber}`
    this.container.innerHTML += "<br>"

    for (const obj of this.resultLogs) {
      this.container.innerText += obj
      this.container.innerHTML += "<br>"
    }
  }
}
