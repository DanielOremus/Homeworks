class CustomDate {
  #day
  #month
  #year
  constructor(day, month, year) {
    this.Month = month
    this.Day = day
    this.Year = year
  }
  get Day() {
    return this.#day
  }
  get Month() {
    return this.#month
  }
  get Year() {
    return this.#year
  }
  set Day(newDay) {
    const currentMonth = this.Month
    let maxDayNumber
    switch (currentMonth) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        maxDayNumber = 31
        break
      case 2:
        maxDayNumber = 28
      default:
        maxDayNumber = 30
        break
    }
    if (newDay <= 0 || newDay > maxDayNumber || isNaN(newDay))
      throw new Error("Некоректний номер дня")
    this.#day = newDay
  }
  set Month(newMonth) {
    if (newMonth <= 0 || newMonth > 12 || isNaN(newMonth))
      throw new Error("Некоректний місяць")
    this.#month = newMonth
  }
  set Year(newYear) {
    if (newYear <= 0 || isNaN(newYear) || newYear > new Date().getFullYear())
      throw new Error("Некоректний рік")
    this.#year = newYear
  }
}
