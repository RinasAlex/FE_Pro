async function randomUser() {
    const url = 'https://randomuser.me/api/'

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error();
        }

        const data = await response.json();
        console.log(data);
        const dataNameFirst = data.results[0].name.first;
        const dataNameLast = data.results[0].name.last;
        const dataEmail = data.results[0].email;
        const dataPicture = data.results[0].picture.medium;

        const randomUser = document.querySelector('.random__user')

        const userName = document.createElement('p')
        userName.textContent = `Name: ${dataNameFirst} ${dataNameLast}`

        const userEmail = document.createElement('p')
        userEmail.textContent = `Email: ${dataEmail}`

        const userFoto = document.createElement('img')
        userFoto.setAttribute("src", dataPicture)
        userFoto.classList.add('userFoto__img')

        randomUser.append(userName, userEmail, userFoto)

    } catch (e) {
        console.error("Ooops! You have error!", e)
    }
}

randomUser()

async function randomCat() {
    const url = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error;
        }

        const data = await response.json();
        console.log(data);
        const urlCat = data[0].url;
        console.log(urlCat);

        const randomCat = document.querySelector('.random__cat')

        const fotoCat = document.createElement('img');
        fotoCat.setAttribute("src", urlCat);
        fotoCat.classList.add('randomCat__img')

        randomCat.append(fotoCat)


    } catch (e) {
        console.error("Ooops! You have error!", e)
    }
}

randomCat()

async function randomJoke() {
    const url = 'https://api.chucknorris.io/jokes/random'

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error();
        }

        const data = await response.json();
        console.log(data);
        const jokeVlue = data.value;
        console.log(jokeVlue);

        const randomJoke = document.querySelector('.random__joke');

        const textJoke = document.createElement('p');
        textJoke.textContent = `Joke: ${jokeVlue}`

        randomJoke.append(textJoke)

    } catch (e) {
        console.error("Ooops! You have error!", e)
    }
}
randomJoke()

async function randomText() {
    const url = 'https://api.kanye.rest/';

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error()
        }

        const data = await response.json()
        console.log(data);
        const textQuote = data.quote;
        console.log(textQuote);

        const randomTextBlock = document.querySelector('random__text');

        const randomText = document.createElement('p');
        randomText.textContent = `Text: ${textQuote}`;

        randomTextBlock.append(randomText);

    } catch (e) {
        console.error("Ooops! You have error!", e)
    }
}

randomText()