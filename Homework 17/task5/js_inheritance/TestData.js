class TestData {
  constructor(dataObj) {
    Object.assign(this, dataObj)
  }
  toString() {
    return `Перше число: ${this.firstNum}. Друге число: ${this.secondNum}. Операція: ${this.operation}. Відповідь користувача: ${this.userAnswer}. Правильна відповідь: ${this.correctAnswer}.`
  }
}
