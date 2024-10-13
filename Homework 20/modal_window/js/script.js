window.onload = () => {
  const showModalBtn = document.querySelector(".wrapper>.btn")
  const modal = new ModalWindow(18, 45, ".wrapper", "span")
  modal.render()
  showModalBtn.onclick = modal.showModal.bind(modal)
}
