class SessionDuration {
  constructor() {
    this.startTime = new Date()
  }
  getMinutesDiff() {
    this.setTimeDiff()
    return Math.floor(this.timeDifference / 60000)
  }
  setTimeDiff() {
    this.timeDifference = new Date() - this.startTime
  }
}
