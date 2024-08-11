function showDayType() {
  const dayNumber = parseInt(document.querySelector("input").value)

  if (isValid(dayNumber)) {
    displayText(getDayType(dayNumber))
  } else displayText("Помилка, введіть коректний номер дня")
}

function isValid(dayNumber) {
  return isNaN(dayNumber) || dayNumber <= 0 || dayNumber > 7 ? false : true
}
function getDayType(dayNumber) {
  let msg
  switch (dayNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      msg = "Це робочий день"
      break

    case 6:
    case 7:
      msg = "Це вихідний день"
      break
  }
  return msg
}
function displayText(text) {
  alert(text)
}
