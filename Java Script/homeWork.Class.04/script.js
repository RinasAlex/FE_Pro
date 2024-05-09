// Напишите класс Circle, который принимает радиус в качестве параметра конструктора. Добавьте метод area, который возвращает площадь круга, и метод circumference, возвращающий длину окружности.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circleData = new Circle(5)
console.log(circleData.area());
console.log(circleData.circumference());

// Создайте класс Book, который принимает название книги, автора и количество страниц в качестве параметров конструктора. Добавьте метод info, который выводит информацию о книге в формате "Книга: [название], Автор: [автор], Страниц: [количество]".

class Book {
    constructor(title, author, number_page) {
        this.title = title;
        this.author = author;
        this.number_page = number_page;
    }
    info() {
        return `Книга: ${this.title}, Автор: ${this.author}, Страниц: ${this.number_page}`
    }
}
const infoBook = new Book('My Life', 'Alex Rinas', 233);
console.log(infoBook.info());

// Напишите класс BankAccount, который принимает имя владельца и начальный баланс. Добавьте методы deposit и withdraw для управления счетом.

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(sum) {
        this.balance = this.balance + sum;
        return `Ваш баланс ${this.balance}`
    }
    withdraw(sum) {
        if (sum > this.balance) {
            return `Ошибка! Сумма превышает допустимый лимит!`
        } else {
            this.balance = this.balance - sum;
            return `Снятие средств прошло успешно! Ваш баланс ${this.balance}`
        }
    }
}
const bankUsers = new BankAccount('Alex Rinas', 350);
console.log(bankUsers.deposit(200));
console.log(bankUsers.withdraw(200));

// Создайте класс Animal, который принимает имя и тип (например, "кот" или "собака") в качестве параметров конструктора. Добавьте метод sound, который выводит звук, производимый животным.

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    sound() {
        if (this.type === 'cat') {
            return `${this.name} издает мяуканье`
        } else if (this.type === 'dog') {
            return `${this.name} издает лай`
        } else {
            return `Error! Неизвестный тип животного`
        }
    }
}

const cat = new Animal("Мурзик", "cat");
console.log(cat.sound()); 

// Напишите класс Email, который принимает адрес электронной почты в качестве параметра конструктора. Добавьте методы send, receive, reply, чтобы моделировать основные функции электронной почты. Например, send - Отправка с адреса … получателю … произведена успешно, или можете поэксперементировать от себя

class Email{
    constructor (address){
        this.address = address
    }
    send(receiver){
        return `Отправка с адреса ${this.address} получателю ${receiver} произведена успешно`
    }
    receive(sender){
        return `Получено письмо от ${sender} на ваш электронный адрес ${this.address}`
    }
    reply(sender, message){
        return `Ответ на письмо ${sender}: ${message}`
    }
}

const myEmail = new Email('alexandrarinas@gmail.com')
console.log(myEmail.send('simson123@gmail.com')); 
console.log(myEmail.receive('simson123@gmail.com')); 
console.log(myEmail.reply('simson123@gmail.com', 'Holla! Amigos!'));
