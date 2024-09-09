window.onload = onMounted

function onMounted() {
  setInterval(() => {
    const firstDigit = generateNumber()
    const secondDigit = generateNumber()
    const userAns = parseInt(prompt(`${firstDigit}+${secondDigit}=`))
    if (userAns === firstDigit + secondDigit) {
      alert("Правильно")
    } else alert("Йди вчитися")
  }, 10000)
}

function generateNumber(min = 0, max = 9) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
