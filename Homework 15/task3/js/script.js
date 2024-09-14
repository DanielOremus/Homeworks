function onStart() {
  const firstNumber = parseInt(document.querySelector("input").value)
  if (firstNumber > 0) {
    const multChecker = new MultChecker(firstNumber, ".result-container")
    multChecker.start()
    alert("Почали!")
  } else alert("Введіть коректне число (не менше 1)")
}
