function onBtnClick() {
  const array = ["Ivan", "Petro", "Olya", "Andriy", "Daniel", "Mykola", "Roman"]
  const resArr = array.map((el) => el[0])
  displayResult(
    `Масив: ${array.join(" | ")}\nНовий масив: ${resArr.join(" | ")}`
  )
}

function displayResult(result) {
  alert(result)
}
