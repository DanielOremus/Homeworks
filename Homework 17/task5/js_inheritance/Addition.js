class Addition extends Checker {
  constructor(min, max) {
    super(min, max, "+")
  }
  getCorrectAns(firstNumber, secondNumber) {
    return firstNumber + secondNumber
  }
}
