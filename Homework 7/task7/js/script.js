function displayImg(imgSrcArray, index) {
  const img = document.querySelector("img")
  img.setAttribute("src", imgSrcArray[index])
}
function generateRandomNumber(max) {
  return 1 + Math.floor(Math.random() * max)
}
window.onload = () => {
  const imgSrcArray = [
    "./img/cherry.png",
    "./img/jackpot.png",
    "./img/lemon.png",
    "./img/orange.png",
  ]
  const randomIndex = generateRandomNumber(3)
  displayImg(imgSrcArray, randomIndex)
}
