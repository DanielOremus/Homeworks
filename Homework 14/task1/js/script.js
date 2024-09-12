async function getData() {
  const res = await fetch("./data.json")
  const data = await res.json()
  return data
}

//Завдання

//1) загальну вартість усіх сайтів
function getTotalPrice(array) {
  return array.reduce((accumulator, el) => accumulator + el.price, 0)
}
//2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
function getSitesInYearsRangeCount(array, startYear = 2000, endYear = 2009) {
  return array.reduce(
    (accumulator, { yearOfCreation }) =>
      yearOfCreation > startYear && yearOfCreation < endYear
        ? accumulator + 1
        : accumulator,
    0
  )
}
//3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
function getSitesWhereDepositOver100000Count(array) {
  return array.reduce((accumulator, { sponsors }) => {
    const currentTotalDeposit = sponsors.reduce(
      (prevSum, obj) => prevSum + obj.depositAmount,
      0
    )
    return currentTotalDeposit > 100000 ? accumulator + 1 : accumulator
  }, 0)
}
//4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
function getAllSponsors(array) {
  return array.map((el) => el.sponsors)
}
//5) знайти рік, коли прибуток був найбільшим
function getYearWithMaxDepositSum(mainArray) {
  //I варіант
  // let max = -Infinity
  // const year = array.reduce((accumulator, el) => {
  //   const sum = el.sponsors.reduce(
  //     (prevSum, sponsor) => prevSum + sponsor.depositAmount,
  //     0
  //   )
  //   if (sum > max) {
  //     max = sum
  //     accumulator = el.yearOfCreation
  //   }
  //   return accumulator
  // })
  // return year
  //II варіант
  let max = -Infinity
  const depositsSumArray = getTotalDepositsArray(mainArray)

  const year = mainArray.reduce((accumulator, el, i) => {
    const sum = depositsSumArray[i]
    if (sum > max) {
      max = sum
      accumulator = el.yearOfCreation
    }
    return accumulator
  })
  return year
}

function getTotalDepositsArray(array) {
  return array.map(({ sponsors }) =>
    sponsors.reduce(
      (accumulator, sponsor) => accumulator + sponsor.depositAmount,
      0
    )
  )
}
//6) упорядкувати список за спаданням прибутку
function sortByDepositSumInDescendingOrder(array) {
  const depositsSumArray = getTotalDepositsArray(array)
  const combinedArray = array.map((el, i) => ({
    obj: el,
    depositSum: depositsSumArray[i],
  }))

  combinedArray.sort((a, b) => b.depositSum - a.depositSum)
  combinedArray.forEach((el, i, arr) => (arr[i] = el.obj))
  return combinedArray
}
//7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
function filterSitesByPriceUnder10000(array) {
  return JSON.parse(JSON.stringify(array.filter((el) => el.price < 10000)))
}
function filterSitesByPriceOver10000(array) {
  return JSON.parse(JSON.stringify(array.filter((el) => el.price > 10000)))
}

//Розмітка та системна частина
function generateDiv(classes) {
  const div = document.createElement("div")
  div.setAttribute("class", classes)
  return div
}
function generateLi(classes = "") {
  const li = document.createElement("li")
  li.setAttribute("class", classes)
  return li
}
function generateUl(classes = "") {
  const ul = document.createElement("ul")
  ul.setAttribute("class", classes)
  return ul
}
function addResultToContainer(
  result,
  resultContainer,
  isArray = false,
  isArray1D = true
) {
  if (!isArray) {
    const li = generateLi("list-group-item")
    li.textContent = result
    resultContainer.append(li)
    return
  }
  const li = generateLi("list-group-item d-flex flex-column")

  if (isArray && isArray1D) {
    for (const array of result) {
      const ul = generateUl("list-group rounded p-3")

      for (const obj of array) {
        const subLi = generateLi("list-group-item")

        for (const key in obj) {
          subLi.innerHTML += `${key}: ${obj[key]}<br>`
          ul.append(subLi)
        }
      }
      li.append(ul)
    }
    resultContainer.append(li)
    return
  }
  if (isArray && !isArray1D) {
    for (const companyObj of result) {
      const ul = generateUl("list-group rounded p-3")

      //Обєкт компанії
      const subLi = generateLi("list-group-item")
      for (const key in companyObj) {
        //Властивість обекту (імя, ціна ...)
        if (!Array.isArray(companyObj[key])) {
          subLi.innerHTML += `${key}: ${companyObj[key]}<br>`
        } else {
          subLi.innerHTML += `${key}:`
          const arrayUl = generateUl("list-group rounded p-3")
          for (const el of companyObj[key]) {
            //обєкт масиву спонсори
            const arrayLi = generateLi("list-group-item")
            for (const key1 in el) {
              //властивість обєкту (перше імя, друге...)
              arrayLi.innerHTML += `${key1}: ${el[key1]}<br>`
            }
            arrayUl.append(arrayLi)
          }
          subLi.append(arrayUl)
        }
        ul.append(subLi)
      }
      li.append(ul)
    }
    resultContainer.append(li)
  }
}

window.onload = async () => {
  const data = await getData()
  console.log(data)

  const resultContainer = document.querySelector(".result-container")

  const totalPrice = getTotalPrice(data)
  addResultToContainer(totalPrice, resultContainer)
  const sitesInYearRangeNumber = getSitesInYearsRangeCount(data)
  addResultToContainer(sitesInYearRangeNumber, resultContainer)
  const sitesWhereDepositOver100000Number =
    getSitesWhereDepositOver100000Count(data)
  addResultToContainer(sitesWhereDepositOver100000Number, resultContainer)
  const allSponsors = getAllSponsors(data)
  addResultToContainer(allSponsors, resultContainer, true)
  const maxYear = getYearWithMaxDepositSum(data)
  addResultToContainer(maxYear, resultContainer)
  const sortedArray = sortByDepositSumInDescendingOrder(data)
  addResultToContainer(sortedArray, resultContainer, true, false)
  const sitesWithPriceUnder10000 = filterSitesByPriceUnder10000(data)
  addResultToContainer(sitesWithPriceUnder10000, resultContainer, true, false)
  const sitesWithPriceOver10000 = filterSitesByPriceOver10000(data)
  addResultToContainer(sitesWithPriceOver10000, resultContainer, true, false)
}
