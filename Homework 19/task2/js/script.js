window.onload = () => {
  const inputContainer = document.querySelector(".input-container")
  inputContainer.addEventListener("input", onInput)
}
function onInput(e) {
  const targetEl = e.target
  console.log(e)

  if (targetEl.tagName !== "INPUT" || isNaN(parseInt(targetEl.value)))
    return false
  let input = targetEl
  //*Цикл для заповння попередніх input
  while (input.previousElementSibling) {
    const value = parseInt(input.value)
    input = input.previousElementSibling
    input.value = value - 1
  }

  //*Цикл для заповнення наступних input
  input = targetEl
  while (input.nextElementSibling) {
    const value = parseInt(input.value)
    input = input.nextElementSibling
    input.value = value + 1
  }
}
