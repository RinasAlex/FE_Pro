//PROMISE

// function delayApi(delayedData) {

//     const response = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(delayedData)
//         }, 3000)
//     })
//     console.log(response)
// }

// delayApi('hehehe')

// delayApi('delayed 1 time')
// .then((response) => {
//     console.log(response)
// })
// .then(() => {
//     console.log('delayed 2nd time')
// })
// .catch((e) => {
//     console.log(e)
// })
// .then((response) => {
//     console.log(response)
// })
// .then((response) => {
//     console.log('console.log hello')
// })
// _____________________________________________________

// const fetchApi = async () => {
// } 


// const container = document.querySelector('.container')

// //step 1. async fn
// async function fetchApi() {

//   //step 2 url
//   const url = `https://randomuser.me/api`;

//   //step 3 try catch ( отработка исключений)
//   try {

//     //step 4 - request with fetch
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error();
//     }
//     const data = await response.json() 
//     console.log(data)
//     const newTitle = document.createElement('div')
//     const nameResult = data.results[0].name
//     console.log(nameResult)
//     newTitle.textContent = `${nameResult.title} ${nameResult.first} ${nameResult.last}`
//     container.append(newTitle)

//   } catch (e) {
//     console.error("The data was not received: ", e)
//   }
// }

// fetchApi()


// _________________________________________________


async function fetchApi() {
  const url = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";


  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error;
    }

    const data = await response.json();
    console.log(data["0"]);
    const dataUrl = data["0"].url;
    const dataId = data["0"].id;
    console.log(dataUrl);
    console.log(dataId);

    const randomCatSection = document.querySelector(".randomCat")
    const randomCatImgBlock = randomCatSection.querySelector(".randomCat__image")
    const randomCatInfoBlock = randomCatSection.querySelector(".randomCat__info")

    const randomCatImage = document.createElement("img");
    randomCatImage.setAttribute("src", dataUrl);
    randomCatImage.setAttribute("alt", "cat");
    randomCatImage.classList.add("randonCat__img");
    randomCatImgBlock.append(randomCatImage);

    const randomCatIdBlock = document.createElement('p');
    randomCatIdBlock.textContent = `Id котика: ${dataId}`;
    randomCatInfoBlock.append(randomCatIdBlock);

    const randomCatNameBlock = document.createElement('p');
    randomCatNameBlock.textContent = `Имя котика: Ivan`;
    randomCatInfoBlock.append(randomCatNameBlock);

    const nameArr = ["Vasya", "Jarry", "Tom", "Murka", "Kate", "Jake"];
    // const randomIndex = Math.random()

  } catch (e) {
    console.error('Request was not sent successfully', e);
  }

}


fetchApi();