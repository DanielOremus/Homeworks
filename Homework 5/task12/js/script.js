function getImagesDb() {
  return (imagesDb = fetch("./db.json")
    .then((response) => response.json())
    .then((data) => {
      return data.images
    }))
}

function getSlots() {
  return document.querySelectorAll("img")
}
function getCurrentSlotsID(array) {
  return array.map((el) => el.id)
}
function onSpin() {
  const imagesDb = getImagesDb()

  const continueFunc = () => {
    imagesDb.then((images) => {
      const slots = getSlots()
      let currentSlotsArr = []
      for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * images.length)
        currentSlotsArr.push(images[index])
        const imgObj = images[index]
        showImg(slots[i], imgObj)
      }
      const idOfCurrentSlots = getCurrentSlotsID(currentSlotsArr)

      setTimeout(() => {
        showResult(idOfCurrentSlots)
      }, 500)
    })
  }
  continueFunc()
}

function showResult(idArray) {
  if (idArray.every((id, i, arr) => id === arr[0])) {
    switch (idArray[0]) {
      case 1:
        alert("Вітаємо, ви виграли 100 грн")
        break

      case 2:
        alert("Вітаємо, ви виграли 200 грн")
        break

      case 3:
        alert("Вітаємо, ви виграли 500 грн")
        break

      case 4:
        alert("ДЖЕКПОТ!!! Ось ваші 1000 грн")
        break
    }
  } else alert("Ех, не щастить вам сьогодні. Спробуйте ще раз!")
}

function showImg(slot, imgObj) {
  slot.setAttribute("src", imgObj.src)
}
