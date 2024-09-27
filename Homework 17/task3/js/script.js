window.onload = () => {
  const interval = 3000
  const reminder = new Reminder("Hello", interval)
  setTimeout(() => {
    reminder.setMessage("Bye")
    setTimeout(() => {
      reminder.stopReminder()
      console.log("End")
    }, interval * 2)
  }, interval * 4)
}
