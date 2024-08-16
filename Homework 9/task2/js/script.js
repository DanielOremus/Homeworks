function generateArray(length) {
  const half = Math.floor(length / 2)
  return new Array(length).fill(1, 0, half).fill(7, half)
}
function onBtnClick() {
  const arrayLength = parseInt(document.querySelector("input").value)
  displayResult(generateArray(arrayLength))
}
function displayResult(result) {
  alert(result)
}
