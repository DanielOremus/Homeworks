window.onload = () => {
  const temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
  const resContainer = document.querySelector(".results-container")

  const temperatureEntriesMap = getTemperatureEntriesMap(temperatures)

  const ceiledTemperatures = getCeilValuesOfArray(temperatures)

  const differentTemperaturesNumber = new Set(ceiledTemperatures).size

  renderResults(
    { temperatureEntriesMap, differentTemperaturesNumber },
    resContainer
  )
}

function getTemperatureEntriesMap(temperaturesList) {
  const map = new Map()
  for (const temperature of temperaturesList) {
    map.set(temperature, (map.get(temperature) ?? 0) + 1)
  }
  return map
}

function getCeilValuesOfArray(array) {
  return array.map((el) => Math.ceil(el))
}

function renderResults(resObj, container) {
  const { temperatureEntriesMap, differentTemperaturesNumber } = resObj

  let resStr = ""
  for (const [key, value] of temperatureEntriesMap) {
    resStr += `${key} => ${value}\n`
  }
  resStr += `Різні заокруглені покази: ${differentTemperaturesNumber}`

  container.innerText = resStr
}
