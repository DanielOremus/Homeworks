function generateRandomPayment(min = 500, max = 1000) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function generateArray(length) {
  const array = []
  for (let i = 0; i < length; i++) {
    array.push(generateRandomPayment())
  }
  return array
}

function getTotalPaymentNumber(array, startPos = 0, endPos = array.length - 1) {
  let sum = 0
  for (let i = startPos; i <= endPos; i++) {
    sum += array[i]
  }
  return sum
  // return array.reduce((accumulator, el) => accumulator + el)
}

function getResultMessage() {
  const paymentArr = generateArray(12)

  const evenMonthPaymentArr = paymentArr.filter((el, i) => (i + 1) % 2 === 0)
  const startSeasonMonthPaymentArr = paymentArr.filter(
    (el, i) => (i + 1) % 3 === 0
  )

  const message = `Масив: ${paymentArr.join(", ")}
  За весь рік: ${getTotalPaymentNumber(paymentArr)}
  За першу половину: ${getTotalPaymentNumber(paymentArr, 0, 5)}
  За другу половину: ${getTotalPaymentNumber(paymentArr, 6, 11)}
  За літо: ${getTotalPaymentNumber(paymentArr, 5, 7)}
  За другий квартал: ${getTotalPaymentNumber(paymentArr, 3, 5)}
  За парні місяці: ${getTotalPaymentNumber(evenMonthPaymentArr)}
  За місяці, які є початками сезонів: ${getTotalPaymentNumber(
    startSeasonMonthPaymentArr
  )}`

  return message
}
function displayText(text) {
  alert(text)
}

function onBtnClick() {
  displayText(getResultMessage())
}
