window.onload = () => {
  const [yearOfBirthInput, ageInput] = [...document.querySelectorAll("input")]
  const getAgeBtn = document.querySelector("button")
  getAgeBtn.onclick = onGetAge.bind(null, yearOfBirthInput, ageInput)
}

function checkUserYear(year) {
  if (year < 1850 || isNaN(year) || year >= new Date().getFullYear())
    throw new Error("Year is invalid")
}
function onGetAge(yearInput, ageInput) {
  const userYear = parseInt(yearInput.value)
  try {
    checkUserYear(userYear)
    const userAge = new Date().getFullYear() - userYear
    displayResult(ageInput, userAge)
  } catch (error) {
    handleError(error)
  }
}

function displayResult(ageInput, userAge) {
  ageInput.value = userAge
}
function handleError(e) {
  alert(e.message)
}
