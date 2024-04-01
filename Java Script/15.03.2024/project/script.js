const posts = [
    {
        id: 1,
        title: 'First post',
        description: 'first description',
        isPermitted: false
    },
    {
        id: 2,
        title: 'Second post',
        description: 'Second description',
        isPermitted: true
    },
    {
        id: 3,
        title: 'Third post',
        description: 'Third description',
        isPermitted: true
    },
    {
        id: 4,
        title: 'Fourth post',
        description: 'Fourth description',
        isPermitted: false
    },
    {
        id: 5,
        title: 'Fifth post',
        description: 'Fifth description',
        isPermitted: true
    }
]


const newPosts = document.querySelector('#Posts')
const postsBtn = document.querySelector('#PostsBtn')
postsBtn.addEventListener('click', function () {
    posts.forEach((item) => {
        const postItem = document.createElement("li");
        postItem.innerHTML = `<span>${item.id}.<span> <h3>${item.title}<h3> <p>${item.description}</p>`;
        newPosts.append(postItem);
    })

})