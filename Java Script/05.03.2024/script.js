// стрелочная функция

const newArr = () => {

}

if (5 < 10) {
    console.log("5 < 10");
} else {
    console.log("hi");
}

// 5 < 10 ? console.log("5 < 10") : console.log("hi"); -  другой способ написания

// FILTER ________________________________________

const arr = [2, 3, 4, 5, "hello", "sdfdsfs", "fgfgf"];

const filteredElemMap = arr.map(item => typeof item === 'number')
const filteredElem = arr.filter(item => typeof item === 'number')
console.log(filteredElem)

// REDUCE__________________________________________

const arrOfNumbers = [3 + 3 + 3 + 3 + 5 + 10]

const reduceResult = arrOfNumbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue
}, 0)

console.log(reduceResult)

for (let i = 0; i < arrOfNumbers.length; i++) {
    let initialValue = 0
    initialValue += arrOfNumbers[i]
    console.log(initialValue)
}

// __________________________________________________
// 1. Создать массив из строк и используя метод forEach вывести строки поочередно

const arrString = ["hello", "sun", "girl", "boy", "ball"]
arrString.forEach(function (item) {
    console.log(item);
})

// 2. Создать массив из строк и используя метод forEach вывести строки поочередно с их номером (начиная с единицы). Пример выводимой строки “(1) Велосипед”.

// const arrString = ["hello", "sun", "girl", "boy", "ball"]
arrString.forEach((item, index) => { console.log(`${index} ${item}`) })

// 3. Создать массив из строк и используя метод forEach вывести только те строки, у которых индекс четный.

arrString.forEach((item, index) => {
    if (index % 2) {
        console.log(index);
    }
})

// Разбор метода map. Как он работает.
// 4. Используя метод map пройтись по массиву чисел и вернуть массив из квадратов этих чисел.

const arrNumber = [2, 3, 4, 5, 6, 7]
const newArrNumber = arrNumber.map((item) => item ** 2)
console.log(newArrNumber);

// 5. Используя метод map пройтись по массиву из чисел и преобразовать все отрицательные числа в положительные.

const arrNumber2 = [2, 3, -4, 5, -6, -7]
const numPositiveArr = arrNumber2.map(item => (item < 0) ? -item : item);
console.log(numPositiveArr);

// 6. Используя метод filter сформировать массив из только положительных чисел
const newArrNumber2 = arrNumber2.filter((item) => item > 0)
console.log(newArrNumber2);

// 7. Используя метод filter сформировать массив из только четных чисел

const newArrNumber3 = arrNumber2.filter((item) => item % 2 === 0)
console.log(newArrNumber3);

// Преобразование массива объектов:
// Используйте map для преобразования массива объектов, например, если в каждом объекте есть свойство age, вы можете преобразовать его в массив из возрастов, а затем использовать filter, чтобы отфильтровать только те возрасты, которые больше определенного значения.

const newAge = 23;
const arrObject = [
    { id: "123", name: "Vasiliy", age: 18 },
    { id: "345", name: "Anna", age: 22 },
    { id: "567", name: "Igor", age: 20 },
    { id: "789", name: "Irina", age: 24 }
];
const newArrObject = arrObject
    .filter((item) => item.age > newAge)
    .map((item) => item.name)
console.log(newArrObject);

// const agesAboveThirty = people.map(person => person.age).filter(age => age > 30);

// Преобразование массива чисел в другие числа:
// Предположим, у вас есть массив чисел. Вы хотите преобразовать каждое число в новое число, умножив его на определенное значение, но только для чисел, которые больше нуля.

const arrNum = [1, -2, 3, -4, 5];
const num = 10;
const newArrNum = arrNum
.filter((num) => num > 0)
.map((num) => num * 10)
console.log(newArrNum);

// Преобразование и фильтрация массива строк по длине:
// Предположим, у вас есть массив строк, и вы хотите создать новый массив, содержащий только те строки, длина которых превышает определенное значение. При этом вы хотите преобразовать каждую строку в верхний регистр.