// callbackFn - callback function

// const arr = [1, 2, 3, 4, "hello", "world", "jejej", 9999];

// arr.forEach(function(item, index) {
//     console.log(`item: ${index} equal to ${item}`)
// })

// if (5 < 10) {
//   console.log("5 < 10");
// } else {
//   console.log("it is bigger");
// }
// 5 > 10 ? console.log("5 < 10") : console.log("it is bigger");

// const result = arr.map((item, index) => {
//   if (typeof item === "string") {
//     return item + " hello";
//   }
//   return item + 5;

//   // return typeof item === 'string' ? item + ' hello' : item + 5
// });

// console.log(result);

// const newResult = arr.map(item => typeof item === 'string' ? item + ' hello' : Math.pow(item, 3))

// const filteredElemMap = arr.map(item => typeof item === 'number')

// const filteredElem = arr.filter(item => typeof item === 'number')
// console.log(filteredElem)

// for(let i = 0; i < arr.length; i = i + 1) {
//     console.log(`2222 item ${i} equal to ${arr[i]}`)
// }

// function newFn(a, b) {
//     this.a = a
//     this.b = b
//     return a, b
// }

// const newObj = new newFn('yury', 'arakelove')
// const newPerson = new newFn('vasya', 'hello')
// console.log(newPerson)

// newFn()

// const newArrowFn = a => console.log(a)

// newArrowFn(5)

// 1. arguments
// 2. this - нельзя использовать в стрелочных функциях
// 3. синтаксис

// REDUCE

const arrOfNumbers = [3 + 3 + 3 + 3 + 5 + 10]

const reduceResult = arrOfNumbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue
}, 0)

console.log(reduceResult)

for(let i = 0; i < arrOfNumbers.length; i++) {
    let initialValue = 0
    initialValue += arrOfNumbers[i]
    console.log(initialValue)
}