// Создание класса Employee: Создайте класс Employee с конструктором, который принимает три параметра: name, age, position. Конструктор должен инициализировать соответствующие свойства объекта.
// Добавление метода getInfo(): Добавьте в класс Employee метод getInfo(), который возвращает строку с информацией о сотруднике в формате "Имя: Возраст, Должность".
// Фильтрация сотрудников по должности:
// Напишите функцию filterEmployeesByPosition, которая принимает два параметра: список сотрудников (employees) и должность (position).
// Отфильтруйте список сотрудников по заданной должности.
// Используйте метод map, чтобы преобразовать отфильтрованный список в список имен сотрудников.
// Функция должна возвращать массив имен сотрудников с заданной должностью.
// Создайте несколько объектов сотрудников, используя класс Employee.
// Используйте функцию filterEmployeesByPosition для фильтрации сотрудников по их должности.


class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    getInfo() {
        return `Имя ${this.name}: Возраст ${this.age}, Должность ${this.position}`
    }
}

function filterEmployeesByPosition(employeesArray, position) {
    return employeesArray.filter((employee) => employee.position === position)
        .map((employee) => employee.name);
}

const employeesArray = [
    new Employee("John", 30, "Manager"),
    new Employee("Alice", 25, "Developer"),
    new Employee("Bob", 35, "Developer"),
    new Employee("Emily", 28, "Designer")
];

console.log(filterEmployeesByPosition(employeesArray, "Developer"));

const openModal = document.querySelector('.modal__open');
const closeModal = document.querySelector('.modal__close');
const containerModal = document.querySelector('.modal__container');
const modal = document.querySelector('.modal');

openModal.addEventListener('click', () => {
    modal.classList.add('active');
    containerModal.textContent = filterEmployeesByPosition(employeesArray, "Developer")
});

if (modal) {
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active')
    })
}