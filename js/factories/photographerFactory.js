'use strict';

export function createPhotographer(photographer) {
    const ARTICLE = document.createElement('article');
    let templatePhotographer = `
        <a href="photographer.html?id=${photographer.id}" title="${photographer.alt}">
            <img src="${photographer.portrait}" alt="${photographer.alt}">   
        </a>
        <h2 class="name">${photographer.name}</h2>
        <p class="location">${photographer.city}, ${photographer.country}</p>
        <p class="tagline">${photographer.tagline}</p>
        <p class="price">${photographer.price}€/jour</p>
        `;
        ARTICLE.innerHTML = templatePhotographer;
        return ARTICLE;
}