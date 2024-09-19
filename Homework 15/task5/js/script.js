async function getData() {
  return await fetch("./data.json").then((data) => data.json())
}

window.onload = async () => {
  const { boys, girls } = await getData()
  const runBtn = document.querySelector("button")
  const director = new DanceDirector(boys, girls)
  runBtn.onclick = director.run.bind(director)
}
