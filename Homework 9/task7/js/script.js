function generateArray(length = 10) {
  return new Array(length).fill(0).map(() => generateRandomNumber())
}
function onBtnClick() {
  const array = generateArray()
  const resArr = array.map((el) => (el > 1000 ? (el * 0.7).toFixed(1) : el))
  displayResult(`Масив: ${array}\nНовий масив: ${resArr.join(" | ")}`)
  // ============================Зміна масиву без створення нового
  // array.forEach((el, i, arr) => {
  //   if (el > 1000) {
  //     arr[i] = (el * 0.7).toFixed(1)
  //   }
  // })
  // displayResult(`Новий масив: ${array.join(" | ")}`)
}

function displayResult(result) {
  alert(result)
}
function generateRandomNumber(min = 500, max = 1500) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
