const infoAboutPersen = {
    firstName: 'Sasha',
    lastNAme: 'Rinas',
    age: 33,
    greeting: function () {
        console.log(this.firstName, this.lastNAme, this.age);
    }
}

infoAboutPersen.greeting()


const fn = (a, b) => {
    return a + b
}
console.log(fn(3, 4));


function fn2(a, b) {
    return a + b
}
console.log(fn2(4, 5));

// _________________________________________

function someFn() {
    return this
}

const newObj = {
    firstName: "Sasha"
}

const newFN = someFn.bind(newObj)
console.log(newFN()); // {firstName: 'Sasha'}

const result = someFn.call(newObj, 'new name', 'new name 2')
console.log(result);
console.log(someFn.apply(newObj, ['new name', 'new name 2']));


function User(name, age) {
    this.name = name;
    this.age = age;
}

function Registration(name, age) {
    User.call(this, name, age)
    this.status = 'registered'
}

const result1 = Registration('Sasha', 33)

Registration.prototype = Object.create(User.prototype)
console.log(Registration.prototype);

// ________________________________________

const object1 = {
    name: 'Sasha',
    lastName: 'Rinas'
}

const result2 = Object.values(object1)
console.log(result2);
// ________________________________________

function fn1(name) {
    this.name = name;
}
const result3 = new fn1('Sasha ')
console.log(result3);


const fn3 = (name) => {
    console.log(this);
}
fn3()
// _____________________________

function Product(name, price) {
    let _name = name; // приватное поле
    let _price = price; // приватное поле
  
    this.getName = function() {
      return _name;
    };
  } // incopsulation oop (объективно-ориентированное программирование)

//   ______________________

