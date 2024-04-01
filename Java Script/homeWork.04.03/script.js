// Создайте массив объектов, каждый из которых представляет собой информацию о человеке (имя, возраст и т. д.). Используйте метод map, чтобы создать новый массив, содержащий только имена всех людей.

const humanObject = [
    { id: 1, name: "Ivan", age: 24 },
    { id: 1, name: "Sasha", age: 29 },
    { id: 1, name: "Svetlana", age: 20 },
    { id: 1, name: "Kevin", age: 27 }
]
const newHumanObject = humanObject.map((item) => item.name)
console.log(newHumanObject);

// Создайте массив чисел и используйте метод map, чтобы преобразовать каждое число в строку.

const arrayNumber = [3, 56, 76, 45, 23, 12, 5]
const newArrayNumber = arrayNumber.map((item) => item.toString())
console.log(newArrayNumber);

// Создайте массив строк, представляющих даты, и используйте метод map, чтобы преобразовать каждую строку в объект Date.

const arrayDate = ['{"date": "12.02.2024"}', '{"date": "04.08.2022"}', '{"date": "23.03.2023"}', '{"date": "16.04.2024"}'];
const newArrayDate = arrayDate.map((string)=> JSON.parse(string))
console.log(newArrayDate)

// Создайте массив чисел и используйте метод map, чтобы создать новый массив, содержащий квадраты каждого числа.

const arrayNumber2 = [3, 6, 9, 4, 2]
const newArrayNumber2 = arrayNumber2.map((item) => item ** 2)
console.log(newArrayNumber2);

// Создайте массив слов и используйте метод map, чтобы создать новый массив, содержащий длины каждого слова.

const arrayWords = ["word", "rice", "milk", "sun"]
const arrayWordsLength = arrayWords.map((item) => item.length)
console.log(arrayWordsLength);

// Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль каждый элемент массива, умноженный на 2.

// const arrayNumber2 = [3, 6, 9, 4, 2]
arrayNumber2.forEach((item) => console.log(item * 2))

// Создайте массив строк и используйте метод forEach, чтобы вывести в консоль каждую строку в верхнем регистре.

// const arrayWords = ["word", "rice", "milk", "sun"]
arrayWords.forEach((item) => console.log(item.toUpperCase()))

// Создайте массив объектов и используйте метод forEach, чтобы вывести в консоль значения определенного свойства кaждого объекта.

// const humanObject = [
//     { id: 1, name: "Ivan", age: 24 },
//     { id: 1, name: "Sasha", age: 29 },
//     { id: 1, name: "Svetlana", age: 20 },
//     { id: 1, name: "Kevin", age: 27 }
// ]
humanObject.forEach((item) => console.log(item.age))

// Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль только нечетные числа.

// const arrayNumber = [3, 56, 76, 45, 23, 12, 5]
arrayNumber.forEach((item) => {
    if (item % 2 != 0) {
        console.log(item);
    }
})

// Создайте массив слов и используйте метод forEach, чтобы вывести в консоль каждое слово, у которого длина больше 5 символов.

const arrayWords2 = ["words", "sun", "milk", "amazing"]
arrayWords2.forEach((item) => {
    if (item.length >= 5) {
        console.log(item);
    }
})

// Создайте массив чисел и используйте метод filter, чтобы отфильтровать только положительные числа.

const arrayNumber3 = [-4, 6, -65, 45, 23, -42]
const arrayPositiveNumber = arrayNumber3.filter((item) => item > 0)
console.log(arrayPositiveNumber);

// Создайте массив строк и используйте метод filter, чтобы отфильтровать только строки, содержащие более одного слова.

const arrayString = ["i love you", "sun", "give me money", "love"]
const newArrayString = arrayString.filter((item) => item.split(" ").length > 1)
console.log(newArrayString);

// Создайте массив объектов, представляющих людей, и используйте метод filter, чтобы отфильтровать только совершеннолетних.

const humanObject2 = [
    { id: 1, name: "Ivan", age: 17 },
    { id: 1, name: "Sasha", age: 29 },
    { id: 1, name: "Svetlana", age: 15 },
    { id: 1, name: "Kevin", age: 27 }
]
const newHumanObject2 = humanObject2.filter((item) => item.age >= 18)
console.log(newHumanObject2);

// Создайте массив чисел и используйте метод filter, чтобы отфильтровать только числа, которые делятся на 3 без остатка.

const arrayNumber4 = [21, 6, 4, 67, 33]
const newArrNumber4 = arrayNumber4.filter((item) => item % 3 === 0)
console.log(newArrNumber4);

// Создайте массив слов и используйте метод filter, чтобы отфильтровать только слова, начинающиеся с определенной буквы.

// const arrayWords2 = ["words", "sun", "milk", "amazing"]
const newArrayWordsM = arrayWords2.filter((item) => item.startsWith("w"))
console.log(newArrayWordsM);
