class Checker {
  constructor(min, max, operation) {
    this.min = min
    this.max = max
    this.operation = operation
  }
  generateRandomNumber() {
    return this.min + Math.floor(Math.random() * (this.max - this.min + 1))
  }
  generateProblemRow(firstNumber, secondNumber) {
    return `${firstNumber} ${this.operation} ${secondNumber} =`
  }
  generateAndAskProblem() {
    const firstNum = this.generateRandomNumber()
    const secondNum = this.generateRandomNumber()
    const correctAnswer = this.getCorrectAns(firstNum, secondNum)

    const userAnswer = parseInt(
      prompt(this.generateProblemRow(firstNum, secondNum))
    )
    return new TestData({
      firstNum,
      secondNum,
      operation: this.operation,
      userAnswer,
      correctAnswer,
    })
  }
}
