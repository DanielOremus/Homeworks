window.onload = () => {
  const startBtn = document.querySelector("button")

  const addChecker = new Addition(1, 100)
  const multChecker = new Multiplication(2, 10)
  const manager = new TestManager(
    5000,
    5,
    [addChecker, multChecker],
    ".results"
  )
  startBtn.onclick = manager.start.bind(manager)
}
