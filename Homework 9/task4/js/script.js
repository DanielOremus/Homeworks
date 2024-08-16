function generateArray(length = 10) {
  return new Array(length).fill(0).map(() => generateRandomNumber())
}
function onBtnClick() {
  const array = generateArray()
  const resArray = []
  for (const el of array) {
    if (el > 100) {
      resArray.push(el)
    }
  }

  displayResult(`Масив: ${array}\nБільші за 100: ${resArray}`)
}
function displayResult(result) {
  alert(result)
}
function generateRandomNumber(min = 50, max = 150) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
