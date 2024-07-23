function getAge() {
  const enteredYear = parseInt(document.querySelector("input").value)
  const currentYear = new Date().getFullYear()
  if (enteredYear > currentYear) {
    alert("Помилка")
    return
  }

  alert(`Вік: ${currentYear - enteredYear}`)
}
