// Создать функцию, которая получает id пользователя и выводит в консоль данные о пользователе. Если такого пользователя нет, необходимо вызвать исключение “Такого пользователя нет”. 
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>
// Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) выводились все посты пользователя.
// Ссылка: 
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

// Данные должны быть в виде объекта 

// {
// 	user: {name, email},
// 	posts: [...]
// }

async function fetchUserId(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`

    try {
        const response = await fetch(url);
        const responsePost = await fetch(postUrl);

        if (!response.ok && !responsePost.ok) {
            throw new Error()
        }

        const data = await response.json();
        const dataPost = await responsePost.json();
        console.log(data);
        console.log(dataPost);

        createElement(data, dataPost)
        
    }catch(error){
      console.error('Ошибка', error)
    }
  
  }
  fetchUserId(1)
  
//   //2 шаг - присваем результат функции в переменную ( function expression )
//   const result = fetchUserId(1)
  
//   //3 шаг - создаем новую АССИНХРОННУЮ функцию для вывода на страницу данных из нашей функции userApi
//   async function randomFN(params) {
  
//     //4 шаг - передаем результат функции в новую переменную params -> result -> userApi -> Данные из запроса
//     const fetchResult = await params
//     const newElem = document.createElement('div')
//     document.body.append(newElem)
//     newElem.textContent = fetchResult.name + ' hello from inner function'
//   }
  
//   randomFN(result)

function createElement(data, dataPost){
    const userData = document.querySelector('.container');
    userData.innerHTML = '';

    const dataContainer = document.createElement('div')
    dataContainer.classList.add('data__container')

    const userName = document.createElement('h3');
    userName.textContent = `Name: ${data.name}`;

    const userEmail = document.createElement('p');
    userEmail.textContent = `Email: ${data.email}`;

    dataContainer.append(userName, userEmail);
    userData.append(dataContainer)

}


