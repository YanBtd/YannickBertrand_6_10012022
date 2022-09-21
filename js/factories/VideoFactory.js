'use strict';

export class VideoFactory {
    // Création d'un élément vidéo et ses attributs
    createHtmlElement(media) {
        const ELTVIDEO = document.createElement('video');

        ELTVIDEO.setAttribute('id', media.id);              
        ELTVIDEO.setAttribute('src', media.video);
        ELTVIDEO.setAttribute('title', media.mediaName);
        ELTVIDEO.setAttribute('alt', media.alt);
        ELTVIDEO.setAttribute('role', 'button');
        ELTVIDEO.setAttribute('aria-label', 'aria-video');
        ELTVIDEO.className = 'video-media';

        return ELTVIDEO;
    }
};