const arr = [2, 3, 4, 5, 'hello', 'world']

function arrFilter(randomArr) {
    return randomArr.filter(function (elem) {
        return typeof elem === 'number'
    })
}
console.log(arrFilter(arr));
// _______________________________

const arr1 = [-3, -5, 4, 7, 'hello', 'bot', 'sun']
function arr1Filter(elem) {
    return elem
        .filter((item) => typeof item === 'number')
        .filter((item) => item > 0)
        .map((item) => item ** 2)
}
console.log(arr1Filter(arr1));
// __________________________________

function multiply(a, b) {
    return a * b
}
console.log(multiply(2, 4));
// __________________________________

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

const arr2 = [1, -4, 7, 12]
function arr2Filter(item) {
    return item
        .filter((item) => item > 0)
        .reduce((a, b) => a + b)
}

console.log(arr2Filter(arr2));
// ___________________________________

// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
    const arr3 = numbers.split(' ');
    const max = Math.max(...arr3);
    const min = Math.min(...arr3);

    return `${max} ${min}`
  }

  console.log(highAndLow("1 2 3 4 5"));
// ____________________________________________


// LocalStorage

const myName = 'Sasha'
localStorage.setItem('user name', myName)

// ____________________________________________

const header = document.querySelector('.header')
const box = document.querySelector('.box')
const boxItem = document.createElement('div')
boxItem.classList.add('box__item')
boxItem.innerText = 'this is box'
box.append(boxItem)

console.log(document.body);

const newArr = [
    { title: ""}
]