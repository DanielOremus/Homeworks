function getSum() {
  const monthMin = 1
  const monthMax = 12
  const randomMonthNumber =
    Math.floor(Math.random() * (monthMax - monthMin + 1)) + monthMin
  const dayMin = 0
  const dayMax = 6
  const randomDayNumber =
    Math.floor(Math.random() * (dayMax - dayMin + 1)) + dayMin
  return [
    randomMonthNumber,
    randomDayNumber,
    randomMonthNumber + randomDayNumber,
  ]
}

function showSum() {
  const array = getSum()
  alert(`Місяць: ${array[0]}, день: ${array[1]}, сума: ${array[2]}`)
}
