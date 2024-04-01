// const container = document.querySelector('.container')
// async function fetchApi() {
//     const url = `https://jsonplaceholder.typicode.com/commentascadsc`

//     try {
//         const response = await fetch(url)


//         if(!response.ok) {
//             throw new Error()
//         }

//         const data = await response.json()

//         console.log(data)

//     } catch(e) {
//         console.error('Some error: ', e)
//     }
// }

// fetchApi()


// const obj = {

// }

// //литеральная нотация


// //с помощью функции
// function User(username, userPassword) {
//     this.username = username
//     this.userPassword = userPassword

// }

// const newUser = new User('new user', 'user password')
// const newUser2 = new User('new user2', 'user password2')
// console.log(newUser, newUser2)

// function newPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('message from success')
//         }, 3000)
//     })
// }

// const result = newPromise()
// .then(response => console.log(response))
// _____________________________________

async function fetchApi() { // async - first step (asynchron function)
    const url = `https://jsonplaceholder.typicode.com/posts`

    // 2 step - отработка исключений
    try {

        // 3 step - oтправляем запрос на API
        const response = await fetch(url)

        // 4 step - отлов ошибки
        if (!response.ok) {
            throw new Error()
        }

        const data = await response.json() //step 5 -получение ответа  
        console.log(data);

    } catch (error) {
        console.error('error: ', error); //вывод коцепцию ошибки
    }
}

fetchApi()


async function fetchToDo(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error()
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error('Exsample error:', error)
    }
}
fetchToDo(15)