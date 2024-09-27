class Reminder {
  static firstReminder
  static remindsCounter = 0
  static getRemindsCount() {
    return Reminder.remindsCounter
  }
  constructor(message, interval) {
    if (Reminder.firstReminder) return Reminder.firstReminder
    this.message = message
    this.reminderId = this.startReminder(interval)
    Reminder.firstReminder = this
  }
  startReminder(interval) {
    const myInterval = setInterval(() => {
      console.log(`${Reminder.remindsCounter}. ${this.message}`)
      Reminder.remindsCounter++
    }, interval)
    return myInterval
  }
  stopReminder() {
    clearInterval(this.reminderId)
  }
  setMessage(newMessage) {
    this.message = newMessage
  }
}
