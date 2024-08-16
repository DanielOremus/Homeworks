function generateArray(length) {
  length = length < 5 ? length + 5 : length
  return new Array(length).fill(1, 0, 5).fill(7, 5)
}
function onBtnClick() {
  const arrayLength = parseInt(document.querySelector("input").value)
  displayResult(generateArray(arrayLength))
}
function displayResult(result) {
  alert(result)
}
