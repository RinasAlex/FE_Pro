console.log('sync process 1')
console.log('sync process 2')
console.log('sync process 3')
console.log('sync process 4')

function delay() {
    //promise - это объект
    //promise - принимает коллбек функцию 
    //promise - коллбек промиса принимает resolve( успех), reject(провал)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('message from success')
        }, 2000)
    })
}

const result = delay()
.then(response => console.log(response))


async function newDelay() {
    const url = `https://jsonplaceholder.typicode.com/comments`
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error()
        }
        const dataFromResponse = await response.json()
        console.log(dataFromResponse)

    } catch(e) {
        console.error('Some errors: ', e)
    }
}

newDelay()

