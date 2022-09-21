'use strict';

// Import de la factory de création du photographe
import {createPhotographer} from '../factories/photographerFactory.js';

// Création & Affichage de la section photographes
export function displayPhotographers(photographersArray) {
    
    // const photographersArray = DATA_FISHEYE_OBJ.photographersArray;
    const photographersSection = document.querySelector(".photographers_section");

    photographersArray.forEach((photographer) => {
        // On peuple la section avec tous les photographes via createPhotographer()
        photographersSection.appendChild(createPhotographer(photographer));
    });
};