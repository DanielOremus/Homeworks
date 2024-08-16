function generateArray(length = 10) {
  return new Array(length).fill(0).map(() => generateRandomNumber())
}
function onBtnClick() {
  const array = generateArray()
  const resArr = array.map((el, i, arr) => (el > arr[0] ? el * 2 : el))
  displayResult(`Масив: ${array}\nНовий масив: ${resArr}`)
}

function displayResult(result) {
  alert(result)
}
function generateRandomNumber(min = 1, max = 20) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
