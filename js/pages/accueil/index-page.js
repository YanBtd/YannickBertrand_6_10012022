'use strict';

import {getDataFisheye} from '../../dataFisheye.js';
import {createPhotographer} from '../../factories/photographer-factory.js';

export async function displayPhotographers() {
    // Récupération du tableau des photographes
    const { dataPhotographers } = await getDataFisheye();
    const photographersSection = document.querySelector(".photographers_section");

    dataPhotographers.forEach((photographer) => {
        // On peuple la section avec tous les photographes
        photographersSection.appendChild(createPhotographer(photographer));
    });
};