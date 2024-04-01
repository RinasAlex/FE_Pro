// forEach:

// Напишите программу, которая использует метод forEach, чтобы вывести каждый элемент массива на новой строке.

const arr = ['java', 'hello', 2, 4, -6]
arr.forEach((item) => console.log(item))

// Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод forEach, чтобы увеличить каждый элемент массива на 1.

const arr2 = [2, 5, 7, 14]
arr2.forEach((item) => console.log(item + 1))

// Напишите программу, которая использует метод forEach, чтобы найти сумму всех элементов в массиве.

// const arr2 = [2, 5, 7, 14]
let sum = 0
arr2.forEach((item) => sum += item)
console.log(sum);

// Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод forEach, чтобы преобразовать каждую строку в верхний регистр.

const arrString = ['hallo', 'dog', 'sun', 'ball']
arrString.forEach((item) => console.log(item.toUpperCase()))

// Напишите программу, которая использует метод forEach, чтобы проверить, содержит ли массив заданное значение.

// const arr3 = ['dog', 45, 'house', 3, 10]
// const value = 'ghgjhg'
// arr3.forEach((item, value) => {
//     if (item === value) {
//         console.log(true);
//     } 
// }) 
//  не получается, не понимаю в чем ошибка!

// map:

// Напишите программу, которая использует метод map, чтобы умножить каждый элемент массива на 2.

// const arr2 = [2, 5, 7, 14]
const newArr = arr2.map((item) => item * 2)
console.log(newArr);

// Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод map, чтобы добавить к каждой строке восклицательный знак.

// const arrString = ['hallo', 'dog', 'sun', 'ball']
const newArrString = arrString.map((item) => `${item} !`)
console.log(newArrString);

// Напишите программу, которая использует метод map, чтобы извлечь имена из массива объектов и создать новый массив только из имен.

let object = [
    { name: 'Sasha', age: 20, id: 1 },
    { name: 'Natasha', age: 30, id: 2 },
    { name: 'Masha', age: 18, id: 3 }
]
let newObj = object.map((item) => item.name)
console.log(newObj);

// Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод map, чтобы вернуть новый массив, содержащий квадраты этих чисел.

// const arr2 = [2, 5, 7, 14]
const newArr3 = arr2.map((item) => item ** 2)
console.log(newArr3);


// Напишите программу, которая использует метод map, чтобы преобразовать массив строк в массив чисел (например, массив строк '1', '2', '3' должен быть преобразован в массив чисел 1, 2, 3).

// const arr3 = ['2', '3', '5', '6']
// const newArr4 = arr3.split(' ')
// .map((item) => item)
// console.log(newArr4);

// не получилось!

// filter:

// Напишите программу, которая использует метод filter, чтобы отфильтровать все четные числа из массива.

// const arr2 = [2, 5, 7, 14]
const newArr5 = arr2.filter((item) => item % 2 === 0)
console.log(newArr5);

// Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод filter, чтобы вернуть массив строк, содержащих только букву 'a'.

// const arrString = ['hallo', 'dog', 'sun', 'ball']
const newArrString1 = arrString.filter((item) => item.includes('a'))
console.log(newArrString1);

// Напишите программу, которая использует метод filter, чтобы отфильтровать только положительные числа из массива.

const arrNumber = [-5, 43, -54, 23, -6]
const newArrNumber = arrNumber.filter((item) => item > 0)
console.log(newArrNumber);

// Напишите программу, которая использует метод filter, чтобы отфильтровать строки, содержащие не менее 5 символов.

const arrString2 = ['cat', 'world', 'Arianna', 'dog']
const newArrString2 = arrString2.filter((i) => i.length >= 5)
console.log(newArrString2);

// reduce:

// Напишите программу, которая использует метод reduce, чтобы найти сумму всех элементов массива.

// const arrNumber = [-5, 43, -54, 23, -6]
const newArrNumber1 = arrNumber.reduce((first, last) => first + last)
console.log(newArrNumber1);

// Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод reduce, чтобы найти наименьшее число в массиве.

const arrNumber1 = [1, 3, 6, 9, 32]
const newArrNumber2 = arrNumber1.reduce((first, last) => Math.min(first, last))
console.log(newArrNumber2);

// Напишите программу, которая использует метод reduce, чтобы объединить все элементы массива строк в одну строку.

// const arrString2 = ['cat', 'world', 'Arianna', 'dog']
const newArrString3 = arrString2.reduce((first, last) => first + last)
console.log(newArrString3);

// Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод reduce, чтобы вычислить средний возраст всех объектов в массиве.

// let object = [
//     { name: 'Sasha', age: 20, id: 1 },
//     { name: 'Natasha', age: 30, id: 2 },
//     { name: 'Masha', age: 18, id: 3 }
// ]
const middleAge = object.reduce((first, last) => first.age + last.age) / object.length
console.log(middleAge);
// выдает NaN, не могу понять в чем ошибка!