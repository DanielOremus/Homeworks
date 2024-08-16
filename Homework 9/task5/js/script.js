function generateArray(length = 10) {
  return new Array(length).fill(0).map(() => generateRandomNumber())
}
function onBtnClick() {
  const array = generateArray()

  displayResult(`Масив: ${array}\nДобуток: ${getPositiveProduct(array)}`)
}
function getPositiveProduct(array) {
  let product = 1
  for (const el of array) {
    if (el > 0) {
      product *= el
    }
  }
  return product
}
function displayResult(result) {
  alert(result)
}
function generateRandomNumber(min = -10, max = 10) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
