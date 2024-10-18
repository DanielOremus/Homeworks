class Task {
  constructor(dateString) {
    this.specifiedDate = new Date(dateString)
  }
  getCurrentWeekEdgeDates() {
    const now = new Date()
    const currentDayIndex = now.getDay() || 7
    const currentDate = now.getDate()

    const startEdge = new Date()
    startEdge.setDate(currentDate - currentDayIndex + 1)
    startEdge.setHours(0, 0, 0, 0)

    console.log("startEdge")
    console.log(startEdge)

    const endEdge = new Date()
    endEdge.setDate(startEdge.getDate() + 6)
    endEdge.setHours(23, 59, 59)

    console.log("endEdge")
    console.log(endEdge)

    return { startEdge, endEdge }
  }
  isSpecDateBetweenCurrentWeek() {
    const { startEdge, endEdge } = this.getCurrentWeekEdgeDates()
    return startEdge <= this.specifiedDate && endEdge >= this.specifiedDate
  }
}
