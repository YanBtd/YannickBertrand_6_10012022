'use strict';

import {createPhotographer} from '../../factories/photographer-factory.js';

export function displayPhotographers(data) {
    // Récupération du tableau des photographes
    const { dataPhotographers } = data;
    const photographersSection = document.querySelector(".photographers_section");

    dataPhotographers.forEach((photographer) => {
        // On peuple la section avec tous les photographes
        photographersSection.appendChild(createPhotographer(photographer));
    });
};