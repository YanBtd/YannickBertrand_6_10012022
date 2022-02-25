'use strict';

export default class LightBox {
    constructor() {
        this.currentIndex = 0;
    }

    // Initialisation lightbox sur le click + navigation
    initLightbox(currentMedia, currentMediaName) {
        let getMedias = Array.from(document.getElementsByClassName('ph-media'));
        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');
            let src = currentMedia[index];
            let nameSrc = currentMediaName[index];
            this.currentIndex = index;

            document.getElementById('works-lightbox').style.display = 'block';
            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        }))
        this.previous(document.querySelector('.left-arrow-lightbox'), currentMedia, currentMediaName);
        this.next(document.querySelector('.right-arrow-lightbox'), currentMedia, currentMediaName);
        this.close();
        this.keyboard(currentMedia, currentMediaName);
        return this;
    }
    // Média précédent
    previous(elt, media, name) {
        elt.addEventListener('click', () => {
            this.currentIndex -= 1;
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            if (this.currentIndex < 0) {
                this.currentIndex = media.length - 1;
                this.currentIndex = name.length - 1;
            }

            let src = media[this.currentIndex];
            let nameSrc = name[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }
    // Média suivant
    next(elt, media, name) {
        elt.addEventListener('click', () => {
            this.currentIndex += 1;
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            if (this.currentIndex > name.length - 1) {
                this.currentIndex = 0;
            }

            let src = media[this.currentIndex];
            let nameSrc = name[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }
    // Fermeture lightbox
    close() {
        document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
            let lightbox = document.getElementById('works-lightbox');

            lightbox.style.display = 'none';
        })
    }
    // Navigation clavier
    keyboard(currentMedia, currentMediaName) {
        document.addEventListener('keydown', (key) => {
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            // Fermeture lightbox
            if (key.code == "Escape") {
                let lightBox = document.getElementById('works-lightbox');
                lightBox.style.display = 'none';
            }
            // Média suivant
            else if (key.code == "ArrowRight") {
                this.currentIndex += 1;

                if (this.currentIndex > currentMediaName.length - 1) {
                    this.currentIndex = 0;
                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }
            // Média précédent
            else if (key.code == "ArrowLeft") {
                this.currentIndex -= 1;

                if (this.currentIndex < 0) {
                    this.currentIndex = currentMedia.length - 1;
                    this.currentIndex = currentMediaName.length - 1;
                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }
        });
    }
}