window.onload = () => {
  const addChecker = new AddChecker(1, 100)
  const multChecker = new MultChecker()
  const manager = new TestManager(
    5000,
    5,
    [addChecker, multChecker],
    ".results"
  )

  const startBtn = document.querySelector("button")

  startBtn.onclick = manager.start.bind(manager)
}
