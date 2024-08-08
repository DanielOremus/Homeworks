const min = 1
const max = 1000
const numbersCount = 100

function generateNumbers(min, max, count) {
  let arr = []
  for (let i = 0; i < count; i++) {
    const number = min + Math.floor(Math.random() * (max - min + 1))
    arr.push(number)
  }
  return arr
}

function getEvenNumbersCount(arr) {
  return arr.reduce(
    (accumulator, el) => (el % 2 === 0 ? accumulator + 1 : accumulator),
    0
  )
}

window.onload = display

function display() {
  const container = document.getElementsByClassName("col")[1]
  container.innerText = ""
  const generatedNumbersArr = generateNumbers(min, max, numbersCount)
  console.log(generatedNumbersArr)
  const evenNumbers = getEvenNumbersCount(generatedNumbersArr)
  const oddNumbers = generatedNumbersArr.length - evenNumbers
  console.log(`Even: ${evenNumbers}, Odd: ${oddNumbers}`)

  evenNumbers > oddNumbers
    ? (container.innerText = "Парних чисел більше. ")
    : evenNumbers < oddNumbers
    ? (container.innerText = "Непарних чисел більше. ")
    : (container.innerText = "Кількість парних та непарних чисел порівна. ")
  container.innerHTML += `Парних: ${evenNumbers}. Непарних ${oddNumbers}`
}
