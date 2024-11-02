//Search Page Loader

import ComponentLoader from "../utils/ComponentLoader.js"
import FoodList from "../searchPage/FoodList.js"

window.onload = async () => {
  await ComponentLoader.load([
    "../components/sections/header.html",
    "../components/pages/searchComponent.html",
    "../components/sections/footer.html",
  ])

  const foodList = new FoodList(
    [],
    {
      categoryContainer:
        "category-container border-r-2 border-gray-400 my-3 px-10 flex flex-col max-h-screen sticky top-0 justify-evenly",
      categoryLabel:
        "text-lg text-gray-700 uppercase text-center cursor-pointer",
      categoryEl:
        "category border-2 border-gray-400 rounded-lg shadow-lg py-2 cursor-pointer text-center hover:bg-gray-300",
      categoryImg: "w-36 cursor-pointer",
      searchInput:
        "bg-transparent outline-none border-b-2 border-gray-500 w-1/4",
      searchbar:
        "searchbar mt-6 w-full text-center flex justify-center items-center relative",
      searchBtn:
        "bg-green-500 rounded-xl px-10 py-1 ml-6 text-white font-medium transition-colors ease hover:bg-green-600 disabled:bg-green-800",
      numberSelector:
        "number-selector px-4 py-0.5 rounded-full outline-none absolute right-1/4",
      foodList: "food-list mt-6 grid gap-y-8 justify-items-center grid-cols-5",
      foodCard:
        "food-card flex flex-col items-center gap-y-5 bg-slate-300 p-5 rounded-xl shadow-lg",
      foodCardLabel: "card-title max-w-44 text-center",
      foodCardImg: "card-image w-44 h-52",
    },
    [
      {
        title: "Grocery",
        name: "category",
        value: "products",
        imageSrc: "../public/images/categories/grocery.png",
      },
      {
        title: "Menu Item",
        name: "category",
        value: "menuItems",
        imageSrc: "../public/images/categories/menu_item.png",
      },
      {
        title: "Ingredients",
        name: "category",
        value: "ingredients",
        imageSrc: "../public/images/categories/ingredients.png",
      },
    ]
  )
  foodList.render(".container1")
  foodList.renderList()
}
