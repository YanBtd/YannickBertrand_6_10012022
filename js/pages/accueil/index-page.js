'use strict';

import {getDataFisheye} from '../../dataFisheye.js';
import {photographerFactory} from '../../factories/photographer-factory.js';

export async function displayPhotographers() {
    const { dataPhotographers } = await getDataFisheye();
    const photographersSection = document.querySelector(".photographers_section");

    dataPhotographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const newPhotographer = photographerModel.createPhotographer();
        photographersSection.appendChild(newPhotographer);
    });
};