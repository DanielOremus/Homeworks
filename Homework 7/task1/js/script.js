function getUserValue() {
  return parseInt(document.querySelector("input").value)
}
function getMonthName() {
  const monthNumber = getUserValue()
  const monthList = [
    {
      name: "Грудень",
      number: 12,
    },
    {
      name: "Січень",
      number: 1,
    },
    {
      name: "Лютий",
      number: 2,
    },
    {
      name: "Березень",
      number: 3,
    },
    {
      name: "Квітень",
      number: 4,
    },
    {
      name: "Травень",
      number: 5,
    },
    {
      name: "Червень",
      number: 6,
    },
    {
      name: "Липень",
      number: 7,
    },

    {
      name: "Серпень",
      number: 8,
    },
    {
      name: "Вересень",
      number: 9,
    },
    {
      name: "Жовтень",
      number: 10,
    },
    {
      name: "Листопад",
      number: 11,
    },
  ]

  const monthObj = monthList.find((el) => el.number === monthNumber)
  return monthObj ? monthObj.name : null
}

function getResultMessage() {
  let msg
  const monthName = getMonthName()
  if (monthName) {
    msg = `Це ${monthName}`
  } else msg = "Помилка, введіть коректний номер місяця"

  return msg
}
function displayMonth() {
  const text = getResultMessage()
  alert(text)
}
