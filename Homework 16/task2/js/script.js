function onSetBalance(changeAmountBtn, getOwnRateBtn) {
  const values = [...document.querySelectorAll(".initial-value")].map((el) =>
    parseFloat(el.value)
  )
  try {
    const sumObj = new TMoney(values[0], values[1], ".balance")
    console.log(sumObj)
    changeAmountBtn.onclick = onChangeAmount.bind(null, sumObj)
    getOwnRateBtn.onclick = getOwnRate.bind(null, sumObj)
    sumObj.displayBalance()
  } catch (error) {
    handleError(error)
  }
}
function onChangeAmount(sumObj) {
  const operationType = document.querySelector("select").value
  const sumInUAH = parseFloat(
    document.getElementById("change-amount-field").value
  )
  try {
    switch (operationType) {
      case "add":
        sumObj.addMoneyAmount(sumInUAH)
        break
      case "withdraw":
        sumObj.withdrawMoneyAmount(sumInUAH)
        break
    }
    sumObj.displayBalance()
  } catch (error) {
    handleError(error)
  }
}
function getOwnRate(sumObj) {
  const sumInUAH = parseFloat(document.getElementById("own-rate-field").value)
  try {
    alert(`Курс: ${sumObj.getOwnRate(sumInUAH)}`)
  } catch (error) {
    handleError(error)
  }
}
function handleError(error) {
  alert(error.message)
}

window.onload = () => {
  const buttons = document.querySelectorAll("button")
  const setBalanceBtn = buttons[0]
  const changeAmountBtn = buttons[2]
  const getOwnRateBtn = buttons[3]
  setBalanceBtn.onclick = onSetBalance.bind(
    null,
    changeAmountBtn,
    getOwnRateBtn
  )
}
