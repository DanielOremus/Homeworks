function generateRandomCustomersNumber(min = 10, max = 50) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function generateArray(length) {
  const array = []
  for (let i = 0; i < length; i++) {
    array.push(generateRandomCustomersNumber())
  }
  return array
}

function getIndexesOfDaysWhenLower20(array) {
  return array.reduce((accumulator, el, i) => {
    if (el < 20) {
      accumulator.push(i + 1)
    }
    return accumulator
  }, [])
}
function getIndexesOfMax(array) {
  const maxCustomers = Math.max(...array)
  console.log(array)

  return array.reduce((accumulator, el, index) => {
    if (el === maxCustomers) {
      accumulator.push(index + 1)
    }
    return accumulator
  }, [])
}
function getIndexesOfMin(array) {
  const minCustomers = Math.min(...array)
  return array.reduce((accumulator, el, index) => {
    if (el === minCustomers) {
      accumulator.push(index + 1)
    }
    return accumulator
  }, [])
}
function getSeparateCustomersNumber(array) {
  const workingDaysArr = array.slice(0, 5)
  const weekendArr = array.slice(5, 7)
  const workingDay = workingDaysArr.reduce(
    (accumulator, el) => accumulator + el
  )
  const weekend = weekendArr.reduce((accumulator, el) => accumulator + el)
  return {
    workingDay,
    weekend,
  }
}

function getResultMessage() {
  const customersPerWeekArr = generateArray(7)

  const separateCustomersObj = getSeparateCustomersNumber(customersPerWeekArr)

  const message = `Кількість відвічувачів протягом тижня: ${customersPerWeekArr.join(
    ", "
  )}.
  Номери днів, коли кількіть була максимальною: ${getIndexesOfMax(
    customersPerWeekArr
  ).join(", ")}.
  Номери днів, коли кількіть була мінімальною: ${getIndexesOfMin(
    customersPerWeekArr
  ).join(", ")}.
  Номери днів, коли відвідувачів було менше, ніж 20: ${getIndexesOfDaysWhenLower20(
    customersPerWeekArr
  ).join(", ")}.
  Сума відвідувачів в робочі дні: ${separateCustomersObj.workingDay}.
  Сума відвідувачів в вихідні дні: ${separateCustomersObj.weekend}.`
  return message
}
function displayText(text) {
  alert(text)
}

function onBtnClick() {
  displayText(getResultMessage())
}
