function onBtnClick(translatorFunc, correctLettersCounterFunc) {
  const userLetter = document.querySelector("input").value.toLowerCase()
  if (!userLetter.length && userLetter.length > 1) {
    setResultContainerText("Введіть 1 букву")
    return
  }
  const letterOrWord = translatorFunc()
  console.log(letterOrWord)
  if (letterOrWord.length === 1) {
    if (letterOrWord === userLetter) correctLettersCounterFunc()
    setResultContainerText("Буква зарахована, можете вводити наступну")
  } else
    setResultContainerText(
      `Гра закінчилась, загадане слово було ${letterOrWord}. Вгадана кількість букв: ${
        correctLettersCounterFunc() - 1
      }`
    )
}

window.onload = () => {
  const button = document.querySelector("button")
  button.onclick = onBtnClick.bind(null, translator("javascript"), counter())
}

function counter() {
  let correctLetters = 0
  function increment() {
    return ++correctLetters
  }
  return increment
}
function translator(word) {
  let currentIndex = -1
  function letter() {
    if (++currentIndex >= word.length) return word
    return word[currentIndex]
  }
  return letter
}

function setResultContainerText(text) {
  const resultContainer = document.querySelector(".result-container")
  resultContainer.innerText = text
}
