'use strict';

import Modal from './Modal.js';
import Form from './Form.js';

// Création Profil Photographe
export async function displayPhotographerProfil(data) {
    const PHOTOGRAPHERS_DATA = data.dataPhotographers;
    const ID = window.location.search.split('id=')[1];
    const PHOTOGRAPHERS = !ID ? PHOTOGRAPHERS_DATA : PHOTOGRAPHERS_DATA.filter(photographer => photographer.id == ID);
    const PHOTOGRAPHER_PROFIL_ARTICLE = document.getElementById('ph-profil-header');
    const TEMPLATE_PHOTOGRAPHER_PROFIL = `
            <article aria-label="Photographer Profil" class="ph-profil">
                <div class='ph-infos'>
                    <h2>${PHOTOGRAPHERS[0].name}</h2>
                    <p class="ph-city">${PHOTOGRAPHERS[0].city}, ${PHOTOGRAPHERS[0].country}</p>
                    <p class="ph-tagline">${PHOTOGRAPHERS[0].tagline}</p>
                </div>
                <button id="btn-contact" title='Contactez-moi'>Contactez-moi</button>
                <a href='#' title='${PHOTOGRAPHERS[0].alt}'><img src="${PHOTOGRAPHERS[0].portrait}" alt="${PHOTOGRAPHERS[0].alt}"></a>
            </article>
            `

    PHOTOGRAPHER_PROFIL_ARTICLE.innerHTML = TEMPLATE_PHOTOGRAPHER_PROFIL;

    // Création de la modale via la méthode manageModal()
    new Modal().manageModal(PHOTOGRAPHERS_DATA);
    // Gestion des champs du form via manageFields()
    new Form().manageFields();
};