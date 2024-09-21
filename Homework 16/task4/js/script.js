window.onload = () => {
  const ATM = new TBankomat()
  const withdrawBtn = document.querySelector("button")
  const resultContainer = document.querySelector(".result-container")
  const balanceContainer = document.querySelector(".balance-container")
  balanceContainer.textContent = `В банкоматі: ${ATM}`
  withdrawBtn.onclick = onWithdraw.bind(
    null,
    ATM,
    resultContainer,
    balanceContainer
  )
}

function onWithdraw(ATM, resultContainer, balanceContainer) {
  const moneyToWithdraw = parseInt(document.querySelector("input").value)
  try {
    const resArray = ATM.withdraw(moneyToWithdraw)
    console.log(resArray)
    balanceContainer.textContent = `В банкоматі: ${ATM}`

    displayWithdrawResult(resArray, resultContainer)
  } catch (error) {
    handleError(error)
  }
}
function displayWithdrawResult(withdrawRes, container) {
  container.textContent =
    "Результат: " +
    withdrawRes.map((el) => `${el[0]}грн - ${el[1]}шт.`).join(" | ")
}
function handleError(error) {
  alert(error.message)
}
