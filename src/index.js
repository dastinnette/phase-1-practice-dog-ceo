console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogImgContainer = document.getElementById('dog-image-container')

fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogData => {
        dogData.message.forEach(renderDog)
    })

function renderDog(dogObj) {
    const img = document.createElement('img')
    img.src = dogObj

    dogImgContainer.append(img)
}