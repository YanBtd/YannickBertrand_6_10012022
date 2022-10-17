'use strict';

import Modal from "./HandleModal.js";
import Form from "./HandleForm.js";

// Création et Affichage Profil Photographe
export function displayProfil(photographersArray) {

    // Tableau des 6 photographes
    const PHOTOGRAPHERS_ARRAY = photographersArray;

    // Récupération de l'id du photographer dans l'url
    const ID = window.location.search.split('id=')[1];

    // On cherche dans le tableau LE photographe dont l'id est celui dans l'url (ID)
    const PHOTOGRAPHERS = PHOTOGRAPHERS_ARRAY.filter(photographer => photographer.id == ID);

    // On récupère LE photographer dans le tableau PHOTOGRAPHERS
    const lePhotographer = PHOTOGRAPHERS[0];

    const PHOTOGRAPHER_PROFIL_ARTICLE = document.getElementById('ph-profil-header');

    const TEMPLATE_PHOTOGRAPHER_PROFIL = `
            <article aria-label="Photographer Profil" class="ph-profil-header">
                <div class='ph-infos'>
                    <h2>${lePhotographer.name}</h2>
                    <p class="ph-city">${lePhotographer.city}, ${lePhotographer.country}</p>
                    <p class="ph-tagline">${lePhotographer.tagline}</p>
                </div>
                <button id="btn-contact" title='Contactez-moi'>Contactez-moi</button>
                <a href='#' title='${lePhotographer.alt}'><img src="${lePhotographer.portrait}" alt="${lePhotographer.alt}"></a>
            </article>
            `

    PHOTOGRAPHER_PROFIL_ARTICLE.innerHTML = TEMPLATE_PHOTOGRAPHER_PROFIL;

    // Création de la modale via la méthode manageModal()
    new Modal().manageModal(lePhotographer);
    // Gestion des champs du form via manageFields()
    new Form().manageFields();
}