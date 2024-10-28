window.onload = () => {
  const genBtn = document.querySelector("button")
  const inputEl = document.querySelector("input")
  genBtn.onclick = onBtnClick.bind(null, inputEl)
}

function* randomEvenNumber(numbersCount) {
  for (let i = 0; i < numbersCount; i++) {
    yield generateRandomNumber() * 2
  }
}

function generateRandomNumber(min = 0, max = 50) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function renderNumbers(containerSelector, numbersCount) {
  const container = document.querySelector(containerSelector)
  let str = ""
  for (const evenNum of randomEvenNumber(numbersCount)) {
    str += `${evenNum}, `
  }
  container.innerText = str
}

function onBtnClick(inputEl) {
  const numbersCount = parseInt(inputEl.value)
  renderNumbers(".numbers-container", numbersCount)
}
