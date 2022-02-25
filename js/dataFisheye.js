'use strict';

export async function getDataFisheye() {
    const url = 'dataFisheye/photographers.json';
    const response = await fetch(url, { mode: 'same-origin' });
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Ce fichier n'est pas au format JSON!");
    }
    // return await response.json();
    const data = await response.json();
    const dataPhotographers = [...data.photographers];
    const dataMedias = [...data.media];

    return {
        'dataPhotographers': dataPhotographers,
        'dataMedia': dataMedias
    };
}