const root = document.querySelector('.root')
let sliderIndex = 0

const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
    'https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg'
]

const frame = document.createElement('div')
const cards = document.createElement('div')
const triggers = document.createElement('div')

const leftBtn = document.createElement('button')
const rightBtn = document.createElement('button')

leftBtn.innerText = '<'
rightBtn.innerText = '>'

triggers.classList.add('triggers')
frame.classList.add('frame')
cards.classList.add('cards')

async function fetchCatApi() {
    const sendUrl = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
    try {
        const res = await fetch(sendUrl)
        if (!res.ok) {
            throw new Error
        }
        const data = await res.json()
        const { url } = data[0]
        console.log(url)
        images.push(url)

        triggers.append(leftBtn, rightBtn)
        frame.append(triggers)

        images.forEach((item) => {
            const cardItem = document.createElement('div')
            cardItem.classList.add('card')
            cardItem.style.backgroundImage = `url("${item}")`
            cards.append(cardItem)
        })

        frame.append(cards)
        root.append(frame)
    } catch (e) {
        console.error(e)
    }
}
fetchCatApi()

leftBtn.addEventListener('click', () => {
    if (sliderIndex !== 0) {
        sliderIndex--
        cards.style.left = `${-1 * sliderIndex * 500}px`
    }
})

rightBtn.addEventListener('click', () => {
    if (sliderIndex <= images.length) {
        sliderIndex++
        cards.style.left = `${-1 * sliderIndex * 500}px`
    }
})


