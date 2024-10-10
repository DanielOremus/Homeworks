window.onload = () => {
  for (let i = 0; i < 10; i++) {
    addStar(i * 1000)
  }
}
function addStar(timeout) {
  setTimeout(() => {
    const star = new Star("./images/star.svg", 100, 1.5, 5, 100, ".stars")

    star.start()
  }, timeout)
}
