window.onload = () => {
  const divContainer = document.querySelector(".div-container")
  divContainer.addEventListener("click", onDivClick)
}
function onDivClick(e) {
  let targetEl = e.target
  if (targetEl.tagName !== "DIV") return false

  while (targetEl.nextElementSibling) {
    targetEl = targetEl.nextElementSibling
    targetEl.style.backgroundColor = "red"
  }
}
