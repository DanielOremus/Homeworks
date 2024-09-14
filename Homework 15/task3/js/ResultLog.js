class ResultLog {
  constructor(firstNumber, secondNumber, userAns, correctAns) {
    this.firstNumber = firstNumber
    this.secondNumber = secondNumber
    this.userAns = userAns
    this.correctAns = correctAns
    this.isCorrect = correctAns === userAns
  }
  toString() {
    return `Question: ${this.firstNumber} * ${
      this.secondNumber
    }. User answer: ${this.userAns}. Correct answer: ${
      this.correctAns
    }. Correct: ${this.isCorrect ? "yes" : "no"}`
  }
}
