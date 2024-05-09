class User {

    constructor(name, sername, age) {
        this.name = name;
        this.sername = sername;
        this.age = age;
    }

    countAge() {
        if (this.age > 20) {
            console.log('more then 20')
        }
    }
}

const Sasha = new User('Sasha', 'Rinas', 33)
Sasha.countAge()

// Класс "Студент":Создайте класс "Студент", который имеет свойства имя, возраст и массив с оценками. Класс должен иметь метод для вычисления среднего балла. 

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getAverageGrade() {
        const averGrade = this.grade.reduce((first, last) => {
            return first + last;
        });
        return averGrade / this.grade.length
    }
}

const firstStudent = new Student('Vasya', 22, [4, 23, 78])
console.log(firstStudent.getAverageGrade());

// Создайте класс "Товар", который имеет свойства название, цена и количество на складе.
// Теперь мы хотим иметь возможность фильтровать и изменять массив товаров с использованием методов массивов, таких как map и filter.
// Фильтрация товаров по цене:
// Мы хотим иметь возможность отфильтровать массив товаров по их цене. Например, мы можем хотеть получить только товары, цена которых меньше или равна определенной сумме.
// Изменение цены товаров: Мы также хотим иметь возможность изменить цену каждого товара в массиве на определенный процент. Например, мы можем хотеть увеличить цену каждого товара на 10%.
// Наша задача состоит в том, чтобы добавить метод calculateTotalValue в класс Product. Этот метод должен принимать массив объектов Product и возвращать общую стоимость всех товаров в этом массиве. Мы хотим, чтобы этот метод был статическим, что означает, что он будет доступен через сам класс Product, а не через его экземпляры.

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    filterByPrice(maxPrice, productsArray) {
        return productsArray.filter(product => product.price <= maxPrice)
    }

    increasePrice(percent, productsArray) {
        return productsArray.map(product => {
            const newPrice = product.price * percent / 100;
            return { ...product, price: newPrice }
        })
    }
    calculateTotalValue(productsArray) {
        return productsArray.reduce((sum, curr) => {
            return sum + curr.price
        }, 0)
    }
}

const products = [
    new Product("Книга", 15, 30),
    new Product("Компьютер", 1000, 5),
    new Product("Флешка", 10, 50)
];

const product1 = new Product('Laptop', 3456, 35);

const productsArr = product1.filterByPrice(40, products);
console.log(productsArr);

const totalPrice = product1.calculateTotalValue(products);
console.log(totalPrice);

// class Product {
//     constructor(name, price, quantity) {
//       this.name = name;
//       this.price = price;
//       this.quantity = quantity;
//     }

//     getTotalValue() {
//       return this.price * this.quantity;
//     }

//     static calculateTotalValue(products) {
//       return products.reduce((total, product) => total + product.getTotalValue(), 0);
//     }

//     static filterByPrice(products, maxPrice) {
//       return products.filter(product => product.price <= maxPrice);
//     }

//     static increasePriceByPercentage(products, percentage) {
//       return products.map(product => {
//         const increasedPrice = product.price * (1 + percentage / 100);
//         return { ...product, price: increasedPrice };
//       });
//     }
//   }

//   const cheapProducts = Product.filterByPrice(products, 20);
//   console.log(cheapProducts);

//   // Увеличение цены на 10%
//   const expensiveProducts = Product.increasePriceByPercentage(products, 10);
//   console.log(expensiveProducts);

//   // Подсчет общей стоимости всех товаров
//   const totalValue = Product.calculateTotalValue(products);
//   console.log(totalValue);

// _________________________________________

const arr1 = [1, 2, 3, 4, 'df,', 'ertrt', true]
console.log(...arr1); // распечатывание массива и обьекта - 'spread'

// ___________________________________________

const btn = document.querySelector('.open__modal')
const btnClose = document.querySelector('.modal__close')
const modal = document.querySelector('.modal')
const emptyDiv = document.querySelector('.modal__data')

async function fetchApi() {
    const url = 'https://api.kanye.rest/'

    try {
        const response = await fetch(url)
        const data = await response.json()
        modal.classList.add('active')
        emptyDiv.textContent = data.quote
    } catch (e) {
        console.error('Error!', e)
    }
}

btn.addEventListener('click', fetchApi)

if (modal) {
    btnClose.addEventListener('click', () => {
        modal.classList.remove('active')
    })
}