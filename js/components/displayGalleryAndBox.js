'use strict';

import { GalleryFactory } from '../factories/GalleryFactory.js';
import { likeSubscriber } from './handleLikes.js';
import { setLikesAndPrice } from './handleBox.js';

// Les 2 Tableaux d'Objects passés en arguments par photographer.js
export function displayGalleryAndBox(mediasArray, photographersArray) {
    // Appel de la méthode de GalleryFactory pour créer la gallerie
    // Affichage de la gallery d'articles pour chaque photographer
    const GALLERY = new GalleryFactory().createGallery(mediasArray);

    // Appel de setLikesAndPrice() pour créer la box
    // !!! Bien retourner le THIS dans GalleryFactory.js !!! 
    // Gallery.totalLike correspond à this.totalLike += parseInt(media.likes)
    // de createGallery(mediasArray) de GalleryFactory{}
    setLikesAndPrice(GALLERY.totalLike, photographersArray);

    // Appel de LikeSubcriber pour gestion des likes au clic sur icône
    likeSubscriber();
}