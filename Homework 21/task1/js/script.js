window.onload = () => {
  const client1 = new Client("Daniel", "Oremus", 3000)
  console.log("client1")
  console.log(client1)

  const client2 = new GoldenClient("Mykola", "Parlah", 5400, 1000, 0.1)
  console.log("client2")
  console.log(client2)
}
