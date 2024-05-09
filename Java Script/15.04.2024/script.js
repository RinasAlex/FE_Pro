// const arr = [1, 2, 4, 6]

// forEach - перебирает массив


// map - создает новый массив, куда попадают модифицированные элементы

// reduce - возвращает одно знаечение - промежуточный результат выполнения колбека функции

// filter - создает новый элемент, куда попадают элементы по результату отбора в колбека функции

// push

// arr.push(7, 8)

// slice

// const sliceArray = arr.slice(1, 4)

// ________________________________________

// Возвести в квадрат элементы массива
const arr = [1, 2, 3, 4, 5, 6]

const newArr = arr.map((item) => {
    return item ** 2
})

console.log(newArr);

// Отфильтровать строки от чисел и к каждой строке добавить по цифре 4
const arr1 = [1, 2, 3, 4, 5, 6, 'hello', 'my', 'name', 'is', 'js']

const newArr1 = arr1
    .filter((item) => {
        return typeof item === 'string';
    })
    .map((item) => {
        return item + 4;
    })

console.log(newArr1);

// ________________________________________

// localStorage



localStorage.setItem('username', 'Sasha');

const listOfUsers = ['001', '002', '005', '007'];
const usersRoles = ['active', 'moderator', 'admin', 'banned'];
const user = localStorage.getItem('username');
console.log(user);

usersRoles.forEach(item => {
    if (item !== 'banned') {
        console.log(`${user} is actived`);
    }
})


// ___________________________

function fn(a, b) {
    return a * b
}

console.log(fn(2, 5));

// _________________________________

// Создание класса "Человек":
// Создайте класс "Человек", который имеет свойства "имя" и "возраст". Класс должен иметь метод для вывода информации о человеке.

class Human {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    infoAboutPerson() {
        console.log(`my Name is ${this.name} and I am ${this.age} years old`);
    }
}

const alexandra = new Human(33, 'Sasha');
console.log(alexandra);

alexandra.infoAboutPerson()

// ______________________________________

// Создание класса "Книга":
// Создайте класс "Книга", который имеет свойства "название" и "автор". Класс должен иметь метод для вывода информации о книге.

class Book {
    constructor(title, autor) {
        this.title = title;
        this.autor = autor;
    }
    infoAboutBook() {
        console.log(`name of book is ${this.title} and it was written by ${this.autor}`);
    }
}

const bookName = new Book('Harry Potter', 'J.R.');
console.log(bookName);
bookName.infoAboutBook()

// _____________________________________________

// Создание класса "Прямоугольник":
// Создайте класс "Прямоугольник", который имеет свойства "ширина" и "высота". Класс должен иметь метод для вычисления площади прямоугольника.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    square() {
        // return `Square of Rectangle is ${this.width * this.height}`
        console.log(`Square of Rectangle is ${this.width * this.height}`);
    }
}

const rectangleSide = new Rectangle(4, 6);
console.log(rectangleSide);
// console.log(square);
rectangleSide.square()