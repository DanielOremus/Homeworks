window.onload = () => {
  const localeDate = new Date()

  const container = document.querySelector(".times-container")

  const timesList = [
    localeDate.toLocaleTimeString("ua-UK", { timeZone: "Europe/London" }),
    localeDate.toLocaleTimeString("ua-UK", { timeZone: "Europe/Paris" }),
    localeDate.toLocaleTimeString("ua-UK", { timeZone: "Australia/Sydney" }),
  ]

  displayTimes(timesList, container)
}

function displayTimes(timesList, container) {
  for (let i = 0; i < timesList.length; i++) {
    container.children[i].innerText = timesList[i]
  }
}
