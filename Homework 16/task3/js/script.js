window.onload = () => {
  const company = {
    name: "Tech Innovators",
    dateOfCreation: new CustomDate(20, 2, 2010),
    favours: [
      new Favor("Розробка програмного забезпечення", 20000, 30),
      new Favor("Розробка веб-додатку", 15000, 20),
      new Favor("Технічна підтримка", 10000, 15),
      new Favor("Перевірка безпеки", 7500, 5),
      new Favor("Kонсультації з кібербезпеки", 7000, 10),
    ],
    branchAddresses: [
      new Address("Україна", "Київ", "Хрещатик", "13А"),
      new Address("Польща", "Варшавa", "Маршаловська", "21"),
      new Address("Німеччина", "Берлін", "Курфюрстендамм", "57В"),
    ],
    getCompanyAge() {
      return new Date().getFullYear() - this.dateOfCreation.Year
    },
    getBranchesByCity(city) {
      return this.branchAddresses.filter(
        (el) => el.city.toLowerCase() === city.toLowerCase()
      )
    },
    getFavoursByCustomFilter(filterObj) {
      //фільтр спрацьовує коли значення поля в filterObj >= значення поля ітерованого Favor
      const keys = Object.keys(filterObj)
      return this.favours.filter((el) =>
        keys.every((key) => {
          const elKey = el.hasOwnProperty(key)
            ? key
            : key[0].toUpperCase() + key.slice(1)

          return el[elKey] <= filterObj[key]
        })
      )
    },
    toString() {
      return `Вік компанії: ${this.getCompanyAge()}. Філіали за містом: ${this.getBranchesByCity(
        "Київ"
      ).map((obj) =>
        Object.values(obj)
      )}. Послуги: ${this.getFavoursByCustomFilter({
        price: 15000,
        duration: 15,
      }).map((el) => Object.values(el))}`
    },
  }
  const container = document.querySelector(".result")
  container.textContent = company
}
