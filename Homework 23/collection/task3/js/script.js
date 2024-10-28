window.onload = () => {
  const logins = [
    "john_doe",
    "jane_smith",
    "alex_jones",
    "john_doe",
    "john_doe",
    "michael_brown",
    "chris_green",
    "john_doe",
    "sarah_black",
    "laura_blue",
    "michael_brown",
    "emma_white",
  ]
  renderArray(logins, ".array-container")

  const resContainer = document.querySelector(".results-container")
  const resMap = getLoginsNumberPerClient(logins)
  renderResults({ resMap }, resContainer)
}

function getLoginsNumberPerClient(loginList) {
  const map = new Map()
  for (const login of loginList) {
    map.set(login, (map.get(login) ?? 0) + 1)
  }
  return map
}

function renderResults(resObj, container) {
  const { resMap } = resObj

  let resStr = ""
  for (const [key, value] of resMap) {
    resStr += `${key} => ${value}\n`
  }

  container.innerText = resStr
}

function renderArray(array, containerSelector) {
  document.querySelector(containerSelector).innerText = `Масив: ${array.join(
    " | "
  )}`
}
