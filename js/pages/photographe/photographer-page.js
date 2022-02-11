'use strict';

import Modal from './modal.js';
import Form from './form.js';

// Création Profil Photographe
export async function displayPhotographerProfil(data) {
    let photographersData = data.dataPhotographers;
    const id = window.location.search.split('id=')[1];
    const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);
    const sectionPhotographerProfil = document.getElementById('ph-profil-header');
    const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="ph-profil">
                <div class='ph-infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="ph-tagline">${photographers[0].tagline}</p>
                </div>
                <button id="btn-contact" title='Contactez-moi'>Contactez-moi</button>
                <a href='#' title='${photographers[0].alt}'><img src="${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
            </article>
            `

    sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
    
    new Modal().manageModal(photographersData);
    new Form().manageFields();
};