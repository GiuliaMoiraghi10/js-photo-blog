console.log('JS-PHOTO-BLOG')


// card
/* <div class="col-4">
    <div class="card">
        <img class="pin" src="./img/pin.svg" alt="">
        <img class="jpeg" src="./img/Vulpix.full.1515167.webp" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
    </div>
</div> */

// PROCEDIMENTO (Generico)
// 1) Fare chiamata ajax a json per recuperare 6 foto e 6 titoli
// 2) Quando arriva risposta, genero html delle card con foto e titoli e li metto nel DOM

// PROCEDIMENTO (Specifico)
// 1) Prendere row dove andranno colonne e card html (.url e .title)
// 2) Creo variabile con nome url completo
// 3) Faccio chiamata axios per prendere url json
// 4) Faccio funzione con ciclo for per generare 6 card
// 5) Appendo le card all'html

const cardPhotoEl = document.querySelector('.cardPhoto')
console.log(cardPhotoEl)

const baseUrl = 'https://jsonplaceholder.typicode.com/'
let url_body = 'photos'

const endPoint = baseUrl + url_body
console.log(endPoint)


axios
    .get(endPoint, {
        params: {
            _limit: 6,
        },
    })
    .then((res) => {
        // console.log(res)

        const photos = res.data
        console.log(photos)

        // const titlePhoto = res.data
        // console.log(titlePhoto)

        appendPhoto(photos, cardPhotoEl) //richiamo funzione creata fuori
    })
    .catch((err) => {
        console.log(err)
    })


function appendPhoto(photos, root) {
    // console.log(photos, root)
    photos.forEach(photo => {
        const { url, title } = photo

        const photoCardHtml = `
        <div class="col-4">
            <div class="card">
                <img class="pin" src="./img/pin.svg" alt="">
                <img class="jpeg" src="${url}" alt="">
                <p> ${title}</p>
            </div>
        </div>
        `
        root.innerHTML += photoCardHtml
    })
}

// OVERLAY
// Quando clicco card -> compare overlay
//  - prendo card
//  - funzione che al click, fa comparire overlay
//  - al click del bottone si chiude overlay

const photoOverlay = document.getElementById('click-overlay')
console.log(photoOverlay)

const overlayEl = document.getElementById('overlayId')
console.log(overlayEl)

const buttonClose = document.getElementById('overlayBtn')
console.log(buttonClose)

photoOverlay.addEventListener('click', function () {
    overlayEl.classList.remove('.display-none')
    // console.log(photoOverlay)
})

buttonClose.addEventListener('click', function () {
    overlayEl.classList.add('.display-none')
})



