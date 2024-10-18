window.onload = () => {
  const timer = new SessionDuration()
  const showTimeBtn = document.querySelector("button")
  showTimeBtn.onclick = () => {
    const minutesDiff = timer.getMinutesDiff()
    showTime(minutesDiff)
  }
}
function showTime(diff) {
  alert(`${diff} хв`)
}
