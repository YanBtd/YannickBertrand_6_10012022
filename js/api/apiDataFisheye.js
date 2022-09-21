'use strict';

export async function getDataFisheye() {
    const url = '/json/photographers.json';
    const response = await fetch(url, { mode: 'same-origin' });
    const contentType = response.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Ce fichier n'est pas au format JSON!");
    }

    const objDataFisheye = await response.json();

    const photographersArray = [...objDataFisheye.photographers];
    // console.log('getDataFisheye():', photographersArray);

    const mediasArray = [...objDataFisheye.medias];
    // console.log('getDataFisheye(), mediasArray vaut:', mediasArray);
    // console.log('getDataFisheye(), typeof mediasArray:', typeof mediasArray);

    return {
        'photographersArray': photographersArray,
        'mediasArray': mediasArray
    };
}