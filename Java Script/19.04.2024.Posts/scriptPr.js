const leftTrigger = document.querySelector('.triggers .left')
const rightTrigger = document.querySelector('.triggers .right')
const root = document.querySelector('#root')

let initialState = 1

function post(title, body) {
    this.title = title;
    this.body = body;
}

function formatPost(title, body) {
    post.call(this, title, body)
    this.additionalInfo = 'addInfo'
}


function creatPost(title, body) {
    root.innerHTML = ''
    const newTitle = document.createElement('h3')
    const newDescription = document.createElement('p')
    const container = document.createElement('div')
    container.classList.add('container')
    
    const newPost = new formatPost(title, body)
    console.log(newPost);

    newTitle.textContent = title
    newDescription.textContent = body

    container.append(newTitle, newDescription)
    root.append(container)
}

async function fetchPostApi(postId) {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`

    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error()
        }
        const data = await res.json()
        console.log(data);

        creatPost(data.title, data.body)

    } catch (e) {
        console.error('Ooops! Error', e)
    }
}

rightTrigger.addEventListener('click', () => {
    initialState++;
    fetchPostApi(initialState)
})

leftTrigger.addEventListener('click', () => {
    if (initialState >= 1) {
        initialState--
        fetchPostApi(initialState)
    }
})

