window.onload = () => {
  const checkBtn = document.querySelector("button")
  checkBtn.onclick = onCheckDate
}
function getSpecDate() {
  const date = document.querySelector("#date").value
  return date
}

function getSpecTime() {
  const time = document.querySelector("#time").value
  return time
}
function initTaskObj() {
  const date = getSpecDate()
  const time = getSpecTime()
  const taskObj = new Task(`${date}T${time}`)
  return taskObj
}
function onCheckDate() {
  taskObj = initTaskObj()
  alert("Дата в діапазоні: " + taskObj.isSpecDateBetweenCurrentWeek())
}
