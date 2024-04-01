const arr = [1, 2, 3, 4, 5, 'hello']

// console.log(arr[3]);

// for(let index = 0; index < arr.length; index = index + 1){
//     console.log(arr[index]);
// }

// OBJECTS

// const myName = 'Yury';
// const myAge = 26
// console.log(myName, myAge);

// const infoAboutMe = {
//     myName: 'Yury',
//     myAge: 26

// }
//  console.log(infoAboutMe.myAge);

// _________________________________________

//  FUNCTIONS

// function fn(myName, myAge, myLastName, myAddress) {
//     console.log(`Hello, my Name is ${myName}, i am ${myAge} years old`);
// }

// console.log(fn('Sasha', 33));
// fn()

// function fn(exampleArr) {
//     for (let i = 0; i < exampleArr.length; i++) {
//       console.log(exampleArr[i]);
//     }
//   }

//     fn(arr)

// _______________________________________________

// Написать функцию, которая принимает параметром описание кошки ( имя, возраст, цвет и вес)
// В консоли описать вашу кошку. 
// Пример: «У меня есть кошка по кличке Вася, ему 10 лет, он рыжий и толстый (11кг)»
// сложняем функцию: делаем проверку. Если коту больше 5 лет и его цвет не рыжий, то в консоль выводим его описание, в противном случае, в консоль выводим: ему 5 и он рыжий

function cat(Name, Age, Color, Weight) {
    if (Age > 5 && Color != 'orange') {
        console.log(`У меня есть кошка по кличке ${Name}, ему ${Age} лет, он ${Color} и толстый (${Weight}кг)`);
    } else {
        console.log(`ему ${Age} и он ${Color}`);
    }

}

cat('Vasya', 10, 'red', 11)

// ________________________________________________

// Функция принимает параметром массив, с помощью цикла обработать и вывести в консоль все элементы массива

function printNumbers(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }

}

printNumbers([3, 5, 7, 8])

// _____________________________________________

// Теперь необходимо вывести все строчные элементы массива . Только строчные 
// const arr = [1, 2, 3, 5, 7, 'hekki', 'sdv', 'hello', 'amao', 'olllllp']

function findStringValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            console.log(arr[i]);
        }
    }
}

findStringValues([1, 2, 3, 5, 7, 'hekki', 'sdv', 'hello', 'amao', 'olllllp'])

// ____________________________________________

const result = [1, 2, 3, 4, 'hello', 'rereere', 'wewewew']
for (let i = 0; i < result.length; i++) {
    if (typeof result[i] === 'number') {
        console.log(result[i]);
    }
}

// __________________________________________

//forEach

const newArrFn = (item) => {
    console.log(item);
};

// result.forEach(function(item) {
// console.log(item)
// })

function newFn(item) {
    console.log(item);
}

//map

const newMapResult = result.map(function (item) {
    if (typeof item === 'string') {
        return item + ' HELLO WORLD'
    } else {
        return item * 100
    }
})

console.log(newMapResult)

//Callback function - функция обратного вызова, которая используется в качестве аргумента другой функции.
// console.log(result)

function randomFn(a, b) {
    return {
        a: a,
        b: b,
    };
}

// const newResult = randomFn(5, 'hello')

// console.log(newResult)

//   ______________________________________________

// 1. Напишите код, который принимает массив чисел и использует метод forEach, чтобы вывести каждый элемент массива в консоль.

const newArr = [1, 2, 3, 4, 5, 6, 'hello', 'rererere']
newArr.forEach(function (item) {
    console.log(item)
})

// 2. Напишите код, который принимает массив целых чисел и выводит сообщение о том, является ли каждое число четным или нечетным.

newArr.forEach(function (item) {
    if (item % 2 == 0) {
        console.log('четное');
    } else {
        console.log('нечетное');
    }
})

// Напишите программу, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент удвоен.

newArr.map(function (item) {
    console.log(item * 2);
})

// Напишите программу, которая принимает массив строк и возвращает новый массив, в котором каждая строка преобразована в верхний регистр.

let upperStringArr = ["hjhj", "jkjk", "mlmk"].map(item => item.toUpperCase());
console.log(upperStringArr);

// Напишите программу, которая принимает массив объектов дат в формате строк (например, ["2023-01-15", "2024-03-04", "2025-12-31"]) и возвращает новый массив, в котором каждая дата преобразована в формат "День.Месяц.Год". Вывод: ["15.01.2023", "04.03.2024", "31.12.2025"]

let arr1 = ["2023-01-15", "2024-03-04", "2025-12-31"].map(item =>
    item.split('-').join('.'))
console.log(arr1);


