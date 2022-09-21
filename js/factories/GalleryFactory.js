'use strict';

import { MediaFactory } from './MediaFactory.js';
import { Lightbox } from '../components/HandleLightbox.js';

export class GalleryFactory {
    constructor() {
        this.totalLike = 0;
    }

    // Méthode de Construction gallerie de médias et de la lightbox
    // Appelée par DisplayGalleryAndBox.js lui même appelé par photographer.js
    createGallery(mediasArray) {

        this.mediasArray = mediasArray;

        // Récupération de l'id du photographe
        const ID = window.location.search.split('id=')[1];

        // On instancie MediaFactory
        const MEDIAFACTORY = new MediaFactory();

        // On déclare le tableau de stockage des objets
        const ARRAY_HTML_MEDIAS = [];

        // Pour chaque Object dans le tableau des medias
        this.mediasArray.forEach(mediaObject => {

            // On récupère tous les médias appartenant au photographe
            if (ID == mediaObject.photographerId) {
                const SECTION = document.getElementById('medias');
                const ARTICLE = document.createElement("article");

                // Construction élément html de Type <img> / <video>
                // via renderHtmlElement(mediaObject) de MediaFactory{}
                const HTML_MEDIA = MEDIAFACTORY.renderHtmlElement(mediaObject);

                const CARD = `
                <a href='${HTML_MEDIA.src}' data-id=${mediaObject.id} class="mediaLink">${HTML_MEDIA.outerHTML}</a>
                <div class="article-infos">
                    <h2 class="article-title">${mediaObject.mediaName}</h2>
                    <span class="article-price">${mediaObject.price} €</span>
                    <div class='article-likes'>
                        <span class="article-likes-number">
                            <a>${mediaObject.likes}</a>
                        </span>
                        <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${mediaObject.likes}"></i>
                    </div>
                </div>
                `
                // On crée l'article à partir de son template
                ARTICLE.innerHTML = CARD;

                // On ajoute la classe à l'article
                ARTICLE.classList.add("article");

                // On ajoute l'article à sa section
                SECTION.appendChild(ARTICLE);

                this.totalLike += parseInt(mediaObject.likes);

                ARRAY_HTML_MEDIAS.push(HTML_MEDIA);
            }
        })

        document.querySelectorAll('a.mediaLink[href$=".jpg"], a.mediaLink[href$=".mp4"]')
        .forEach((link) => link.addEventListener("click", (e) => {
                e.preventDefault();
                // Appel de Lightbox
                new Lightbox(e.currentTarget.dataset.id, ARRAY_HTML_MEDIAS);
        }));

        // !!! IMPORTANT pour displayLikesAndPrice(GALLERY.totalLike, photographersArray) 
        // de DisplayGallery{} dans DisplayGallery.js qui importe GalleryFactory.js !!!
        // Affiche: GalleryFactory {totalLike: 680}
        // console.log(this)
        return this;
    }
};