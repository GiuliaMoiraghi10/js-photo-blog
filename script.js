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