//Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

// const strings = ["123A", "AAA", "Ar3", "RT", "RGHh79"]

// const resArr = []
// for (const str of strings) {
//   if (/\d/g.test(str)) resArr.push(str)
// }

// console.log(resArr)

//Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.

// const strings = ["123A", "AAA", "Ar3", "RT", "RGHh79"]

// const resArr = []
// for (const str of strings) {
//   if (!/\d/.test(str)) resArr.push(str)
// }

// console.log(resArr)

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.

// const strings = ["аобб", "ббб", "вв", "оар", "уенр"]

// const resArr = []
// for (const str of strings) {
//   if (/[аоуеиі]/.test(str)) resArr.push(str)
// }

// console.log(resArr)

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.

// const strings = ["аобб", "ббб", "вв", "оар", "уенр"]

// const resArr = []
// for (const str of strings) {
//   if (!/[аоуеиі]/.test(str)) resArr.push(str)
// }

// console.log(resArr)

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

// const strings = ["123A", "AAA", "Ar3", "RT3", "RGHh79"]

// const resArr = []
// for (const str of strings) {
//   if (/[13]/.test(str)) resArr.push(str)
// }

// console.log(resArr)

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

// const string = "123bAb4Ar3"

// console.log(string.match(/\d/g))

//Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

// const string =
//   "In linguistics and grammar, a sentence is a linguistic expression, such as the English example 'The quick brown fox jumps over the lazy dog.'"

// console.log(string.match(/[^\w\s]/g))

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

// const string =
//   "In linguistics and grammar, a sentence is a linguistic expression, such as the English example 'The quick brown fox jumps over the lazy dog.'"

// console.log(string.split(/[^\w\s]/))

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).

// const date = "20.09.2000"

// console.log(/\d{2}.\d{2}.\d{4}/.test(date))

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

// const string = "L10or09em ipsu23m dol22or sit a01met"

// console.log(string.match(/([1-9]\d)/g).length)

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.

// const text1 = "5424-4773-0490-3484"

// const pattern = /\d{4}-\d{4}-\d{4}-\d{4}/g

// console.log(pattern.test(text1))

// const tex2 =
//   "5424-4773-0490-3484 4142-333-23-3434 5351289831416378 5169-1674-5656-0195"

// console.log(tex2.match(pattern))

// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)

// const address = "https://mfa.gov.ua"

// console.log(/\.gov(\.|$)/.test(address))

// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення // ??????

//-------------------------------------

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)

// const number = "+380507824887"
// console.log(/^\+38/.test(number))

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл. Замінити пробіл на дефіс.

// const fullName = prompt("Enter your name", "Ivan Petrov")

// console.log(fullName.replace(" ", "-"))

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»

// const date = prompt("Enter date", "22.12.2024")

// console.log(date.replaceAll(".", "/"))

// Задача 17. Користувач вводить день (номер дня (0-6) або
// «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи є це день вихідним

// const availableDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

// const day = prompt("Day:")

// try {
//   if (!availableDays.includes(day) && !/^[0-6]$/.test(day))
//     throw new Error("Error! Day is not correct")
//   if (/^([06]|sat|sun)$/.test(day)) console.log("This is weekend")
//   else console.log("This is not weekend")
// } catch (error) {
//   alert(error.message)
// }
