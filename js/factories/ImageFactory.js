'use strict';

export class ImageFactory {
    // Création d'un élément image et ses attributs
    createHtmlElement(media) {
        const ELTIMAGE = document.createElement('img');

        ELTIMAGE.setAttribute('id', media.id);  
        ELTIMAGE.setAttribute('src', media.image);
        ELTIMAGE.setAttribute('title', media.mediaName);
        ELTIMAGE.setAttribute('alt', media.alt);
        ELTIMAGE.setAttribute('role', 'button');
        ELTIMAGE.setAttribute('aria-label', 'aria-image');
        ELTIMAGE.className = 'image-media';

        return ELTIMAGE;
    }
}