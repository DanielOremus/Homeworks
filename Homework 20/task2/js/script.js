window.onload = () => {
  for (let i = 0; i < 20; i++) {
    addStar(i * 1000)
  }
}
function addStar(timeout) {
  setTimeout(() => {
    const star = new Star("./images/star.svg", 50, 250, 5, 100, ".stars")

    star.start()
  }, timeout)
}
