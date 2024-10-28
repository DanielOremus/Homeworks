window.onload = () => {
  const operatorsArr = [
    { code: "050", name: "Vodafone" },
    {
      code: "096",
      name: "Kyivstar",
    },
    {
      code: "063",
      name: "Lifecell",
    },
    {
      code: "091",
      name: "Ukrtelekom",
    },
    {
      code: "094",
      name: "Intertelekom",
    },
  ]

  const getOperatorBtn = document.querySelector("button")
  getOperatorBtn.onclick = onGetOperator.bind(null, operatorsArr)
}

function getUserPhoneNumber() {
  return document.querySelector("input").value
}
function onGetOperator(operatorsArr) {
  const userNumber = getUserPhoneNumber()
  const phoneNumberObj = new PhoneNumber(userNumber, operatorsArr)
  alert(phoneNumberObj)
}
