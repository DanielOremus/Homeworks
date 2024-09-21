class TDate {
  #day
  #month
  #year
  constructor(initialDay, initialMonth, initialYear, containerSelector) {
    this.Day = initialDay
    this.Month = initialMonth
    this.Year = initialYear
    this.container = document.querySelector(containerSelector)
  }

  //Getters for date
  get Day() {
    return this.#day
  }
  get Month() {
    return this.#month
  }
  get Year() {
    return this.#year
  }

  //Setters for date
  set Day(newDay) {
    if (newDay < 1 || newDay > 30)
      throw new Error("Введіть коректне початкове значення дня")
    this.#day = newDay
  }
  set Month(newMonth) {
    if (newMonth < 1 || newMonth > 12)
      throw new Error("Введіть коректне початкове значення місяця")
    this.#month = newMonth
  }
  set Year(newYear) {
    if (newYear < 0) throw new Error("Введіть коректне початкове значення року")
    this.#year = newYear
  }

  //Methods for changing date
  changeDay(deltaD) {
    if (deltaD < -30 || deltaD > 30)
      throw new Error("Введіть коректний діапазон для зміни")

    const newValue = this.Day + deltaD
    if (newValue < 1) {
      this.Day = 30 + newValue
      this.changeMonth(-1)
    } else {
      this.Day = ((newValue - 1) % 30) + 1
      if (newValue > 30) this.changeMonth(1)
    }
  }
  changeMonth(deltaM) {
    if (deltaM < -12 || deltaM > 12)
      throw new Error("Введіть коректний діапазон для зміни")

    const newValue = this.Month + deltaM
    if (newValue < 1) {
      this.Month = 12 + newValue
      console.log(newValue)
      this.changeYear(-1)
    } else {
      this.Month = ((newValue - 1) % 12) + 1
      if (newValue > 12) this.changeYear(1)
    }
  }
  changeYear(deltaY) {
    const newValue = this.Year + deltaY

    if (newValue < 0) throw new Error("Введіть коректний діапазон для зміни")
    this.Year = newValue
  }

  //Date row
  toString() {
    return `${this.Day}.${this.Month}.${this.Year}`
  }

  //Setting text to container
  displayDate() {
    this.container.textContent = this.toString()
  }
}
