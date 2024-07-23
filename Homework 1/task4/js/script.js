function showResult() {
  const TAX = 0.05
  const productPrice = parseFloat(document.querySelectorAll("input")[0].value)
  const productCount = parseInt(document.querySelectorAll("input")[1].value)

  const totalSum = productCount * productPrice

  alert(`Загальна вартість: ${totalSum}
  ПДВ: ${(totalSum * TAX).toFixed(2)}`)
}
