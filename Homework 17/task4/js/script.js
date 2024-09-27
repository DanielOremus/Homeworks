const companies = [
  new Company("Nestle", "3ABC5"),
  new Company("General Mills", "C5L7"),
  new Company("Danone", "D91A2"),
]
const productList = [
  new Product("Молоко Радимо", "1 liter", 5, companies),

  new Product("Молоко Простоквашино", "1.5 liter", 3, companies),
  new Product("Йогурт з малиною", "1 unit", 10, companies),
  new Product("Йогурт з персиком", "1 unit", 7, companies),
]

const warehouse = new Warehouse(productList)
console.log(warehouse.products)
console.log(warehouse.filterByProductTitle("Молоко"))
console.log(warehouse.filterByCompanyName("Danone"))
