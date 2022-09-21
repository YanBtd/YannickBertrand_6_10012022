'use strict';

// Création de la box contenant le nb total de likes sur les médias
// + le tarif journalier du photographe

export function setLikesAndPrice(totalLike, photographersArray) {
    // Récupération de la valeur de l'id dans l'url
    const ID = window.location.search.split('id=')[1];

    photographersArray.forEach(photographer => {
        if (ID == photographer.id) {
            let box = document.getElementById('box-likes');
            let boxTemplate = `
            <span id="total-likes">${totalLike}</span>
            <i class="fas fa-heart" aria-label='likes'></i>
            <span>${photographer.price} €/ jour</span>
            `
            box.innerHTML = boxTemplate;
        }
    })
}