const sasha = "sasha"
localStorage.setItem("myName", sasha)

const products = [
    { productName: "Frog", price: 120 },
    { productName: "Dog", price: 140 }
]

localStorage.setItem("products", JSON.stringify(products))
const getProducts = localStorage.getItem("products")
console.log(JSON.parse(getProducts));

// parse - преобразует из строки
// stringify - преобразует в строку
// ___________________________________________

// Задание. Имеется строка со структурой массива. Используя объект JSON преобразуйте данную строку в массив, добавьте в нее еще пару чисел и преобразуйте обратно в строку.

const words = '["hello", "world", "cat"]'
const formateWords = JSON.parse(words)
formateWords.push(1, 3, 5)
console.log(formateWords);
const againFormateWords = JSON.stringify(formateWords)
console.log(againFormateWords);
localStorage.setItem("formateProducts", againFormateWords)

// Создать форму, которая позволяет добавить пункт товара в массив. Данные из массива должны отображаться в интерфейсе при добавлении нового товара. Реализовывать через массив с продуктами и функцией rerender.

// Задача. Доработать процесс таким образом, чтобы массив с продуктами добавлялся в localStorage

const productForm = document.querySelector('#productForm');
const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
let productList = []

function rerender() {
    const listElement = document.querySelector('#productList');
    listElement.innerHTML = '';
    productList.forEach((item) => {
        const productItem = document.createElement('li');
        productItem.textContent = `${item.name} : ${item.price} $`
        listElement.append(productItem)
    })

    localStorage.setItem("products1", JSON.stringify(productList))
}

function addProduct(event) {
    event.preventDefault() // предотвращает дефолтное поведение формы
    const name = productName.value
    const price = productPrice.value
    if (name && !isNaN(price)) {
        productList.push({ name, price })
        rerender()
        productPrice.value = '';
        productName.value = '';
    }
}

productForm.addEventListener('submit', addProduct)
