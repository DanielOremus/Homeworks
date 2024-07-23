function getMinutes(seconds) {
  return Math.floor((seconds % 3600) / 60)
}
function getHours(seconds) {
  return Math.floor(seconds / 3600) % 24
}

function showTime() {
  const enteredNumber = parseInt(document.querySelector("input").value)
  alert(
    `Зараз ${getHours(enteredNumber)}:${getMinutes(enteredNumber)}:${
      enteredNumber % 60
    }`
  )
}
