// Создайте форму с полем для ввода имени пользователя.
// При отправке формы сохраните введенное имя в localStorage.
// При загрузке страницы проверьте наличие сохраненного имени в localStorage и, если оно есть, отобразите его на странице.

let nameUser = document.querySelector("#NameUser");

document.addEventListener('input', function () {
    localStorage.setItem("Name User", JSON.stringify(nameUser.value))

})

const getNameUser = localStorage.getItem("Name User");
const nameUserElement = document.getElementById('nameUserDiv');
nameUserElement.textContent = `Hello, ${getNameUser}!`;


// Создайте переменную в localStorage для хранения количества посещений.
// При загрузке страницы увеличивайте значение этой переменной на 1 и сохраняйте обновленное значение в localStorage.
// Отобразите количество посещений на странице.

let visitsHtml = document.querySelector("#visits");

function countVisits() { 
    let visits = localStorage.getItem("page visits");
    
    if (visits === null) {
        visits = 0
    } 

    visits++;

    localStorage.setItem("page visits", visits);

    visitsHtml.textContent = `Вы посетили эту страницу ${visits} раз(а).`
}

countVisits()



