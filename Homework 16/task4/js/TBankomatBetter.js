class TBankomat {
  constructor() {
    this.banknotes = [
      {
        value: 5,
        quantity: 10,
      },
      {
        value: 10,
        quantity: 4,
      },
      {
        value: 20,
        quantity: 7,
      },
      {
        value: 50,
        quantity: 4,
      },
      {
        value: 100,
        quantity: 5,
      },
      {
        value: 200,
        quantity: 3,
      },
    ]
    this.banknotes.sort((a, b) => b.value - a.value)
  }
  getMaxSum() {
    return this.banknotes.reduce(
      (accumulator, el) => accumulator + el.value * el.quantity,
      0
    )
  }
  getMinSum() {
    if (this.banknotes.every((el) => el.quantity === 0)) return 0
    return this.banknotes.reduce(
      (accumulator, el) =>
        el.value < accumulator && el.quantity !== 0 ? el.value : accumulator,
      +Infinity
    )
  }
  //Перевірка на можливість зняття без змін балансу в банкоматі
  canWithdraw(sumToWithdraw) {
    let testSum = sumToWithdraw
    let startIndex = 0
    while (testSum > 0) {
      const nearestBanknoteObj = this.getNearestBanknote(testSum, startIndex)
      if (!nearestBanknoteObj) return false
      const { banknote, index } = nearestBanknoteObj
      if (!banknote) return false
      const availableQuantity = Math.min(
        Math.floor(testSum / banknote.value),
        banknote.quantity
      )

      testSum -= banknote.value * availableQuantity
      console.log(`Тест сума: ${testSum}`)

      startIndex = index + 1
    }
    return true
  }
  //Зняття готівки
  withdraw(sumToWithdraw) {
    if (sumToWithdraw <= 0 || isNaN(sumToWithdraw))
      throw new Error("Введіть коректну суму для зняття готівки")

    if (sumToWithdraw > this.getMaxSum())
      throw new Error("В банкоматі недостатньо грошей")
    if (sumToWithdraw % 5) throw new Error("Сума має бути кратною 5")

    if (!this.canWithdraw(sumToWithdraw))
      throw new Error(
        "На даний момент в банкоматі нема купюр для видачі обраної суми"
      )

    const resArray = []
    let startIndex = 0
    while (sumToWithdraw > 0) {
      //Знаходмо купюру (кількість>0), котра найближча за номіналом до суми
      const { banknote, index } = this.getNearestBanknote(
        sumToWithdraw,
        startIndex
      )
      //Знаходимо доступну кількість купюр x-номіналу для зняття
      const availableQuantity = Math.min(
        Math.floor(sumToWithdraw / banknote.value),
        banknote.quantity
      )
      //Віднімаємо від суми добуток номіналу та кількості купюри
      sumToWithdraw -= banknote.value * availableQuantity
      console.log(sumToWithdraw)
      //Зменшуємо кількіть купюр x-номіналу
      banknote.quantity -= availableQuantity
      //Додаємо результат (номінал, кількість) в масив
      resArray.push([banknote.value, availableQuantity])
      startIndex = index + 1
    }
    return resArray
  }
  getNearestBanknote(amountOfMoney, startIndex) {
    for (let i = startIndex; i < this.banknotes.length; i++) {
      const currentBanknote = this.banknotes[i]
      if (
        amountOfMoney / currentBanknote.value >= 1 &&
        currentBanknote.quantity !== 0
      )
        return { banknote: currentBanknote, index: i }
    }
    return null
  }
  toString() {
    const array = this.banknotes
      .map((el) => `Номінал: ${el.value}, Кількість: ${el.quantity}`)
      .join(" | ")
    return `Максимальна сума: ${this.getMaxSum()} | ${array}`
  }
}
