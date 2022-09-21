'use strict';

import {ImageFactory} from './ImageFactory.js';
import {VideoFactory} from './VideoFactory.js';

export class MediaFactory {
    renderHtmlElement(media) {
        let typeFactory = null;
        // Test type d'élément image ou vidéo
        if (media.hasOwnProperty('image')) {
            typeFactory = new ImageFactory();
        } else if (media.hasOwnProperty('video')) {
            typeFactory = new VideoFactory();
        }

        return typeFactory.createHtmlElement(media);
    }
};