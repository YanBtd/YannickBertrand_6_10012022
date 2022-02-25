'use strict';

import MediaFactory from './MediaFactory.js';
import Lightbox from '../pages/photographe/LightBox.js';

export default class GalleryFactory {
    constructor() {
        this.totalLike = 0;
    }
    
    // Construction gallerie de médias et de la lightbox
    builderGallery(dataMedias) {
        const id = window.location.search.split('id=')[1];
        // Création du média via MediaFactory
        let mediaFactory = new MediaFactory();
        let currentMedia = [];
        let currentMediaName = [];

        dataMedias.forEach(element => {
            if (id == element.photographerId) {
                let sectionPhWorks = document.getElementById('ph-works');
                let articlePhWork = document.createElement("article");
                // On passe le média à la factory
                let mediaHTML = mediaFactory.renderMedia(element);
                let workTemplate = `
                <a href='#' title=${element.photoName}>
                ${mediaHTML.outerHTML}
                </a>
                <div class="ph-work-elt-text">
                    <h2 class="ph-work-title">${element.photoName}</h2>
                    <span class="ph-work-price">${element.price} €</span>
                    <div class='ph-elt-like'>
                    <span class="ph-work-like">
                        <a class="like-counter">${element.likes}</a>
                    </span>
                    <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                    </div>
                </div>
                `
                articlePhWork.innerHTML = workTemplate;
                sectionPhWorks.appendChild(articlePhWork);
                articlePhWork.classList.add("ph-work-elt");

                this.totalLike += parseInt(element.likes);
                
                currentMedia.push(mediaHTML.outerHTML);
                currentMediaName.push(element.photoName);

                // Création de la lightbox via méthode initLightbox()
                new Lightbox().initLightbox(currentMedia, currentMediaName);
            }
        })
        return this;
    }
}