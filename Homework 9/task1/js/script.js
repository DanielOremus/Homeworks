function generate0Array(length) {
  return new Array(length).fill(0)
}
function onBtnClick() {
  const arrayLength = parseInt(document.querySelector("input").value)
  displayResult(generate0Array(arrayLength))
}
function displayResult(result) {
  alert(result)
}
