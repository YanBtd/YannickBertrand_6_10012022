'use strict';

import GalleryFactory from '../../factories/GalleryFactory.js';
import LikeSubscriber from './Likes.js';

export default class MediaBuilder {
    photographersMedias(data) {
        const MEDIAS = data.dataMedias;
        // Appel de la méthode de GalleryFactory pour créer la gallerie
        const GALLERY = new GalleryFactory().builderGallery(MEDIAS);
        // Appel de boxLikesAndPrice() pour créer la box
        this.boxLikesAndPrice(GALLERY.totalLike, data.dataPhotographers);
        // Appel de LikeSubcriber pour gestion des likes
        new LikeSubscriber();
    }

    // Création de la box contenant le nb de likes + le tarif journalier
    boxLikesAndPrice(totalLike, photographers) {
        const ID = window.location.search.split('id=')[1];

        photographers.forEach(photographer => {
            if (ID == photographer.id) {
                let box = document.getElementById('box');
                let boxTemplate = `
                <span id="total-likes">${totalLike}</span>
                <i class="fas fa-heart" aria-label='likes'></i>
                <span>${photographer.price} €/ jour</span>
                `
                box.innerHTML = boxTemplate;
            }
        })
    }
}