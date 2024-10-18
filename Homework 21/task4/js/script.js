window.onload = () => {
  const buttons = document.querySelectorAll("button")
  buttons[0].onclick = onSetProcess.bind(null, buttons[1])
}
function onSetProcess(timeBtn) {
  const process = new Process(getDuration())
  timeBtn.onclick = onTime.bind(null, process)
  setTimeout(() => {
    alert("Процес встановлено")
  }, 100)
}
function getDuration() {
  return parseInt(document.querySelector("input").value)
}
function onTime(process) {
  console.log(process)
  alert(
    process.isProcessStillGoing() ? "Процес ще триває" : "Процес вже закінчився"
  )
}
