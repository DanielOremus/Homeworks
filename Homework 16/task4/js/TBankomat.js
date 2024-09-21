//Недороблений клас в плані перевірки перед зняттям готівки. Багато перевірок через цикл do while

class TBankomat {
  constructor() {
    this.banknotes = [
      {
        value: 5,
        quantity: 1,
      },
      {
        value: 10,
        quantity: 2,
      },
      {
        value: 20,
        quantity: 0,
      },
      {
        value: 50,
        quantity: 3,
      },
      {
        value: 100,
        quantity: 7,
      },
      {
        value: 200,
        quantity: 8,
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
    return this.banknotes.reduce((accumulator, el) => {
      if (el.value < accumulator && el.quantity !== 0) return el.value
      return accumulator
    }, +Infinity)
  }

  withdraw(sumToWithdraw) {
    if (sumToWithdraw <= 0 || isNaN(sumToWithdraw))
      throw new Error("Введіть коректну суму для зняття готівки")

    if (sumToWithdraw > this.getMaxSum())
      throw new Error("В банкоматі недостатньо грошей")
    if (sumToWithdraw % 5) throw new Error("Сума має бути кратною 5")

    const res = []
    let startIndex = 0
    while (sumToWithdraw > 0) {
      const { banknote, index } = this.getNearestBanknote(
        sumToWithdraw,
        startIndex
      )
      let usedQuantity = 0
      do {
        sumToWithdraw -= banknote.value
        console.log(sumToWithdraw)

        banknote.quantity--
        usedQuantity++
      } while (sumToWithdraw >= banknote.value && banknote.quantity !== 0)
      res.push([banknote.value, usedQuantity])
      startIndex = index + 1
    }
    return res
  }
  getNearestBanknote(amountOfMoney, startIndex) {
    for (let i = startIndex; i < this.banknotes.length; i++) {
      if (
        amountOfMoney / this.banknotes[i].value >= 1 &&
        this.banknotes[i].quantity !== 0
      )
        return { banknote: this.banknotes[i], index: i }
    }
    throw new Error(
      "На данний момент в банкоматі нема купюр для видачі обраної суми"
    )
  }
}

const obj = new TBankomat()

try {
  console.log(obj.withdraw(1125))
} catch (error) {
  console.log(error.message)
}
