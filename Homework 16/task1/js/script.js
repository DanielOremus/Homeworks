function onDayChange(dateObj, inputs) {
  const deltaD = parseInt(inputs[0].value)
  try {
    dateObj.changeDay(deltaD)
    dateObj.displayDate()
  } catch (error) {
    handleError(error)
  }
}
function onMonthChange(dateObj, inputs) {
  const deltaM = parseInt(inputs[1].value)
  try {
    dateObj.changeMonth(deltaM)
    dateObj.displayDate()
  } catch (error) {
    handleError(error)
  }
}
function onYearChange(dateObj, inputs) {
  const deltaY = parseInt(inputs[2].value)
  try {
    dateObj.changeYear(deltaY)
    dateObj.displayDate()
  } catch (error) {
    handleError(error)
  }
}
function onSetDate() {
  try {
    const values = [...document.querySelectorAll(".initial-date")].map((el) =>
      parseInt(el.value)
    )

    const changeDateInputs = document.querySelectorAll(".change-date")
    const changeButtons = [...document.querySelectorAll(".change-btn")]

    const dateObj = new TDate(values[0], values[1], values[2], ".date")
    dateObj.displayDate()

    changeButtons[0].onclick = onDayChange.bind(null, dateObj, changeDateInputs)
    changeButtons[1].onclick = onMonthChange.bind(
      null,
      dateObj,
      changeDateInputs
    )
    changeButtons[2].onclick = onYearChange.bind(
      null,
      dateObj,
      changeDateInputs
    )
  } catch (error) {
    handleError(error)
  }
}
function handleError(error) {
  alert(error.message)
}
