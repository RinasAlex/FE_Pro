function fetchData(url) {
    return new Promise(function (resolve, reject) {
    try{
        fetch(url)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        resolve(data)
                    })
            }
        })
    } catch(e){
        // throw new Error
        console.error("error:", e);
    }       
    })
}

fetchData("https://jsonplaceholder.typicode.com/posts")
.then(function(data){
console.log(data);
})
.catch(function(e){
    console.log("error:", e);
})

// fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => console.log(response.json()))
//   .then(json => console.log(json))
// ______________________________________________________

const firstPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("процесс 1 завершился")
    }, 2000)
})

const secondPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("процесс 2 завершился")
    }, 5000)
})

console.log(firstPromise, secondPromise);


firstPromise.then(function (response) {
    console.log(response);
})

secondPromise.then(function (response) {
    console.log(response);
})

Promise.all([firstPromise, secondPromise])
.then(function(response){
    console.log('все запросы отработаны', response);
})
.catch(function (reject) {
    
})