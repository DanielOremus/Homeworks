function onBtnClick() {
  const array = ["HN1111", "A1111", "A03456", "BKK777", "MO1234", "AB4509"]
  const resArr = array.filter((el) => el[0] === "A")
  displayResult(
    `Масив: ${array.join(" | ")}\nНовий масив: ${resArr.join(" | ")}`
  )
}

function displayResult(result) {
  alert(result)
}
