import RequestManager from "../utils/RequestManager.js"
class FoodList {
  constructor(foodList, cssObj, categoriesArr) {
    this.foodList = foodList
    this.categoriesList = categoriesArr
    this.cssObj = cssObj
  }
  getContainerBySelector(parentSelector) {
    return document.querySelector(parentSelector)
  }
  //Render Whole Component
  render(parentSelector) {
    const foodMainContainer = document.createElement("main")
    foodMainContainer.className = "food-main grow"

    // const categorySection = new CategorySelector(
    //   this.categoriesList,
    //   this.cssObj
    // ).render()
    const categoriesContainer = new CategorySelector(
      this.categoriesList,
      this.cssObj
    ).render()
    categoriesContainer.addEventListener("card-click", (e) => {
      this.selectedRadio = e.detail.radioEl
      this.updateBtnState()
    })
    this.categoriesContainer = categoriesContainer
    const searchSection = this.generateSearchBarSection()

    const foodListContainer = this.generateFoodListSection()
    foodMainContainer.append(searchSection, foodListContainer)

    const parentContainer = this.getContainerBySelector(parentSelector)
    parentContainer.append(categoriesContainer, foodMainContainer)

    this.foodMainContainer = foodMainContainer

    this.updateBtnState()
  }
  //Load food
  loadFoodList(newList, category) {
    if (category === "ingredients") {
      this.foodList = newList.map(({ name, ...obj }) => ({
        title: name,
        ...obj,
      }))
      console.log(this.foodList)
    } else {
      this.foodList = newList
    }
  }
  updateBtnState() {
    console.log(this.selectedRadio)

    if (!this.searchInput.value.trim() || !this.selectedRadio) {
      this.searchBtn.setAttribute("disabled", true)
    } else this.searchBtn.removeAttribute("disabled")
  }
  getAndValidateData() {
    const prodName = this.searchInput.value.trim()
    const selectedCategory = this.selectedRadio?.value
    const prodNumber = this.numberSelector.value || 5
    if (!prodName) throw new Error("Meal name must be at least 1 char long")
    if (!selectedCategory) throw new Error("Category must be chosen")
    return { prodName, selectedCategory, prodNumber }
  }
  async onSearch() {
    try {
      const { prodName, selectedCategory, prodNumber } =
        this.getAndValidateData()
      const queryObj = {
        number: prodNumber,
        query: prodName,
        category: selectedCategory,
      }
      const list = await RequestManager.getRequest(queryObj)
      console.log(queryObj)

      this.loadFoodList(list, selectedCategory)
      this.renderRequestResult(list)
    } catch (error) {
      //errors render
      this.searchInput.value = error.message
    }
  }
  renderRequestResult(list) {
    this.foodListContainer.innerText = ""
    if (!list.length) {
      const span = document.createElement("span")
      span.innerText = "Nothing was found"

      this.foodListContainer.append(span)
    } else {
      this.renderList()
    }
  }
  renderList() {
    for (const food of this.foodList) {
      const card = new Card(food, this.cssObj)
      this.foodListContainer.append(card.render())
    }
  }

  generateCardNumberSelector() {
    //setting up cards number selector
    const selectEl = document.createElement("select")
    selectEl.className = this.cssObj.numberSelector

    for (let i = 5; i <= 25; i += 5) {
      const option = document.createElement("option")
      option.innerText = i
      option.value = i
      selectEl.append(option)
    }
    this.numberSelector = selectEl

    return selectEl
  }
  generateSearchBarSection() {
    const section = document.createElement("div")
    section.className = this.cssObj.searchbar

    const input = document.createElement("input")
    input.className = this.cssObj.searchInput
    input.placeholder = "Search for meal..."
    input.oninput = this.updateBtnState.bind(this)
    this.searchInput = input

    const searchBtn = document.createElement("button")
    searchBtn.innerText = "Search"
    searchBtn.className = this.cssObj.searchBtn
    searchBtn.onclick = this.onSearch.bind(this)
    this.searchBtn = searchBtn

    section.append(input, searchBtn, this.generateCardNumberSelector())
    return section
  }
  generateFoodListSection() {
    const section = document.createElement("div")
    section.className = this.cssObj.foodList

    this.foodListContainer = section
    return section
  }
}

export default FoodList
