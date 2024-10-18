window.onload = () => {
  const clientList = [
    new Client("Ivan", "Ivanov", 10000),
    new GoldenClient("Petro", "Fedorev", 3000, 1000, 0.05),
    new GoldenClient("Vasya", "Pupkin", 5000, 10000, 0.1),
  ]
  const bank = new Bank(clientList)
  const showResultBtn = document.querySelector("button")
  showResultBtn.onclick = showResult.bind(null, bank)
}

function showResult(bankObj) {
  document.querySelector(".container").append(bankObj.render())
}
