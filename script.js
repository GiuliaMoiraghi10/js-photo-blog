console.log('JS-PHOTO-BLOG')

// CARD
/* <div id="col" class="col-4">
    <div id="cardPhoto" class="card">
        <img src="./img/pin.svg" alt="" class="pin">
        <img id="imgPhoto" src="./img/Vulpix.full.1515167.webp" alt="" class="img-card">
        <p id="titlePhoto" class="photo-title">
            Lorem ipsum, dolor sit amet consectetur
        </p>
    </div>
</div> */

// Fare una chiamata ajax a json placeholder per recuperare 6 foto e 6 titoli.
// Una volta arrivata la risposta, generiamo l'html delle card e lo mettiamo dentro al DOM

// Creo 2 variabili, una con base URL di axios e una con http body e le combino
const baseUrl = 'https://jsonplaceholder.typicode.com/'
let urlBody = 'photos'

const endpoint = baseUrl + urlBody
console.log(endpoint)

// Prendo classe della raw su cui dovrò appendere le card
const cardListEl = document.querySelector('.cards-list')
console.log(cardListEl)

// Faccio chiamata axios
axios.get(endpoint, {
    params: {
        _limit: 6
    },
})
    .then((res) => {
        console.log(res)
        const photos = res.data
        // console.log(photos)

        appendCards(photos, cardListEl)
        console.log(appendCards)
    })
    .catch((err) => {
        console.log(err)
    })

// Creo funzione che prenda le foto ricavate da array axios e la classe html in cui andranno appese le card
function appendCards(photos, root) {

    // Ciclo array per poter prendere elementi che mi servono (photo e title)
    photos.forEach(photo => {
        console.log(photo)

        // Creo variabile in cui prendo solo elementi dell'oggetto che mi servono
        const { url, title } = photo

        // Creo variabile in cui metto html
        const photoCardHTML = `
        <div id="col" class="col-4">
            <div id="cardPhoto" class="card">
                <img src="./img/pin.svg" alt="" class="pin">
                <img id="imgPhoto" src=${url} alt="" class="img-card">
                <p id="titlePhoto" class="photo-title">
                    ${title}
                </p>
            </div>
        </div>
        `
        // Appendo html a root con innerHTML
        cardListEl.innerHTML += photoCardHTML

        // Prendo classe card presente in tutti i div per poter creare evento al click della card e aprire overlay
        const cardCollection = document.querySelectorAll('.card')
        console.log(cardCollection)

        // Ciclo le card e scateno evento al click per ogni card
        cardCollection.forEach((card, i) => {
            card.addEventListener('click', () => {
                console.log('click sulla card')
                console.log(photos[i])

                // Faccio apparire overlay al click della card
                overlayEl.style.display = 'flex'

                const { url } = photos[i]
                overlayImgEl.src = url
            })
        })
    });
}

// Overlay

// Prendo bottone di chiusura da html
const closeBtn = document.querySelector('.gallery-overlay .overlay-btn')
console.log(closeBtn)

// Prendo elemento dell'overlay dal dom
const overlayEl = document.querySelector('.gallery-overlay')
console.log(overlayEl)

// Prendo riferimento dell'immagine da mettere sull'overlay
const overlayImgEl = document.querySelector('.gallery-overlay img')
console.log(overlayImgEl)


// Evento al click del bottone
closeBtn.addEventListener('click', () => {
    console.log('Chiudi foto')

    overlayEl.style.display = 'none'
})