function validateMonth() {
  const monthNumber = parseInt(document.querySelector("input").value)

  if (isNaN(monthNumber) || monthNumber <= 0 || monthNumber > 12) {
    displayText("Помилка, введіть коректний номер місяця")
  } else displayText(getSeason(monthNumber))
}
function getSeason(monthNumber) {
  let msg
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      msg = "Це зима"
      break

    case 3:
    case 4:
    case 5:
      msg = "Це весна"
      break
    case 6:
    case 7:
    case 8:
      msg = "Це літо"
      break

    case 9:
    case 10:
    case 11:
      msg = "Це осінь"
      break
  }
  return msg
}
function displayText(text) {
  alert(text)
}
