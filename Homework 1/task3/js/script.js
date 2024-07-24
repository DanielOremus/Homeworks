function getAge() {
  const enteredYear = parseInt(document.querySelector("input").value)
  const currentYear = new Date().getFullYear()
  if (enteredYear > currentYear) {
    throw new Error("Рік народження не може бути більшим, ніж поточний рік")
  }

  return currentYear - enteredYear
}

function showAge() {
  try {
    alert(`Вік: ${getAge()}`)
  } catch (error) {
    alert(error.message)
  }
}
