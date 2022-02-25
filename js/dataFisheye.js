'use strict';

export async function getDataFisheye() {
    const url = 'dataFisheye/photographers.json';
    const response = await fetch(url, { mode: 'same-origin' });
    const contentType = response.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Ce fichier n'est pas au format JSON!");
    }

    const dataFisheye = await response.json();
    const dataPhotographers = [...dataFisheye.photographers];
    const dataMedias = [...dataFisheye.medias];

    return {
        'dataPhotographers': dataPhotographers,
        'dataMedias': dataMedias
    };
}