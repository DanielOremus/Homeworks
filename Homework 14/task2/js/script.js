function onBtnClick() {
  let [dateArray, monthsNumber] = [...document.querySelectorAll("input")].map(
    (el) => el.value
  )
  monthsNumber = parseInt(monthsNumber)
  dateArray = dateArray.split(".").map((el) => parseInt(el))

  if (isDateValid(dateArray) && isMonthsNumberValid(monthsNumber)) {
    const date = {
      day: dateArray[0],
      month: dateArray[1],
      year: dateArray[2],
    }
    displayText(getYearsAfterNMonth(date, monthsNumber))
  } else displayText("Введіть коректні значення")
}
function getYearsAfterNMonth({ month, year }, monthsNumber) {
  return year + Math.floor((month + monthsNumber - 1) / 12)
}
function isDateValid(dateArray) {
  if (
    (dateArray[0] > 30 && dateArray[0] < 1) ||
    (dateArray[1] > 12 && dateArray[1] < 1) ||
    dateArray[2] < 0
  )
    return false
  return true
}
function isMonthsNumberValid(monthsNumber) {
  return monthsNumber >= 0
}
function displayText(text) {
  alert(text)
}
