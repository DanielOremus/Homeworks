window.onload = () => {
  const btn = document.querySelector("button")
  btn.onclick = onBtnClick
}
function onBtnClick() {
  const workingTime = new WorkingTime()
  alert(workingTime)
}
