class WorkingTime {
  constructor(endOfWorkingTimeHour = 17, endOfWorkingMinute = 0) {
    this.now = new Date()
    this.endHour = endOfWorkingTimeHour
    this.endMinute = endOfWorkingMinute
    this.workingDateEnd = this.getWorkingDateEnd()
  }
  getWorkingDateEnd() {
    return new Date(
      this.now.getFullYear(),
      this.now.getMonth(),
      this.now.getDate(),
      this.endHour,
      this.endMinute
    )
  }
  getDifference() {
    console.log(this.workingDateEnd)

    return this.workingDateEnd - this.now
  }
  toString() {
    const difference = this.getDifference()
    console.log(this.now)
    console.log(this.workingDateEnd)

    console.log("difference")
    console.log(difference)

    return difference < 0
      ? `Робочий день вже закінчився`
      : `До кінця робочого дня залишилось ${this.convertToHours(
          difference
        )} год ${this.convertToMinutes(difference)} хв`
  }
  convertToMinutes(milliseconds) {
    return Math.floor((milliseconds / (1000 * 60)) % 60)
  }
  convertToHours(milliseconds) {
    return Math.floor(milliseconds / (3600 * 1000))
  }
}
