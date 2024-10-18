class Process {
  constructor(processDuration = 30) {
    this.startTime = new Date()
    this.duration = processDuration
    this.endTime = this.getProcessEndTime()
  }
  getProcessEndTime() {
    const endTime = new Date(this.startTime.getTime())
    endTime.setMinutes(this.startTime.getMinutes() + this.duration)
    return endTime
  }
  isProcessStillGoing() {
    return this.endTime > new Date()
  }
}
