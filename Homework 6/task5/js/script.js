function getContainer() {
  const container = document.querySelector(".container")
  return container
}
function getArmstrongNumbers() {
  const minNumber = 100
  const maxNumber = 9999
  let array = []
  for (let number = minNumber; number <= maxNumber; number++) {
    let sum = 0
    number = number.toString()
    for (let numericIndex = 0; numericIndex < number.length; numericIndex++) {
      sum += Math.pow(number[numericIndex], number.length)
    }
    number = parseInt(number)
    if (sum === number) {
      array.push(number)
    }
  }
  return array
}
//------------------------- варіант з математичним підходом
// function getArmstrongNumbers() {
//   const minNumber = 100
//   const maxNumber = 9999
//   let array = []
//   for (let number = minNumber; number <= maxNumber; number++) {
//     const numberLength = 1 + Math.floor(Math.log10(number))
//     let sum = 0
//     let numberToChange = number
//     for (let numericIndex = 0; numericIndex < numberLength; numericIndex++) {
//       const digit = numberToChange % 10
//       sum += Math.pow(digit, numberLength)
//       numberToChange = Math.floor(numberToChange / 10)
//     }
//     if (sum === number) {
//       array.push(number)
//     }
//   }
//   return array
// }
function displayNumbers(array) {
  getContainer().innerText = array.join(" ")
}
