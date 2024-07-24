function getTotalSumAndTax() {
  const TAX = 0.05
  const inputList = document.querySelectorAll("input")
  const productPrice = parseFloat(inputList[0].value)
  const productCount = parseInt(inputList[1].value)
  const totalSum = productCount * productPrice
  return [totalSum, totalSum * TAX].map((el) => el.toFixed(2))
}

function showResult() {
  const array = getTotalSumAndTax()
  alert(`Загальна вартість: ${array[0]}
    ПДВ: ${array[1]}`)
}
