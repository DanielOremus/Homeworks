window.onload = () => {
  const imgObj = {
    width: 100,
    height: 100,
    alive: "./images/tank_alive.png",
    destroyed: "./images/tank_destroyed.png",
  }
  const tanks = []
  for (let i = 0; i < 10; i++) {
    tanks.push(new Tank(imgObj, 5, 50, ".game"))
  }

  const game = new Game(tanks, ".game")
  game.startGame()
}
