class AddChecker {
  constructor(min, max) {
    this.min = min
    this.max = max
  }
  generateRandomNumber() {
    return this.min + Math.floor(Math.random() * (this.max - this.min + 1))
  }
  generateProblemRow(firstNumber, secondNumber) {
    return `${firstNumber} + ${secondNumber} =`
  }
  askQuestion() {
    const firstNum = this.generateRandomNumber()
    const secondNum = this.generateRandomNumber()
    const correctAnswer = firstNum + secondNum
    const userAnswer = parseInt(
      prompt(this.generateProblemRow(firstNum, secondNum))
    )
    return new TestData({
      firstNum,
      secondNum,
      operation: "+",
      userAnswer,
      correctAnswer,
    })
  }
}
