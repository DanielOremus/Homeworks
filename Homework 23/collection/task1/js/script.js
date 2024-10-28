window.onload = () => {
  const ages = [17, 18, 15, 17, 16, 15, 18, 15, 16, 14, 13, 14]
  renderArray(ages, ".array-container")

  const resContainer = document.querySelector(".results-container")
  const resMap = getIndividualYearsCount(ages)
  const highestAge = getMaxYear(resMap)
  renderResults({ resMap, highestAge }, resContainer)
}

function getIndividualYearsCount(ages) {
  const map = new Map()
  for (const age of ages) {
    map.set(age, (map.get(age) ?? 0) + 1)
  }
  return map
}

function renderResults(resObj, container) {
  const { resMap, highestAge } = resObj

  let individualYearsStr = ""
  for (const [key, value] of resMap) {
    individualYearsStr += `${key} => ${value}\n`
  }
  individualYearsStr += `Highest age: ${highestAge}`

  container.innerText = individualYearsStr
}

function getMaxYear(mapObj) {
  return Math.max(...mapObj.keys())
}

function renderArray(array, containerSelector) {
  document.querySelector(containerSelector).innerText = `Масив: ${array}`
}
