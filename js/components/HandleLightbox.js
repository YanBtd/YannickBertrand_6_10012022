'use strict';

/**
 * @property {HTMLElement} lightbox
 * @property {object[]} ARRAY_HTML_MEDIAS Médias-objets de la lightbox 
 * @property {string} targetID ID du média affiché
 */

export class Lightbox {
    constructor(targetID,ARRAY_HTML_MEDIAS) {
        this.lightbox = this.buildDom();
        this.currentElement = null;
        this.listMedias = ARRAY_HTML_MEDIAS;
        this.loadMedia(targetID);
        this.onKeyUp = this.onKeyUp.bind(this);
        document.body.appendChild(this.lightbox);
        document.addEventListener('keyup', this.onKeyUp);
    }

    /**
     * @param {string} id ID du média
     * @return {HTMLElement} Retourne le média-objet
     */
    getElementById(id) {
        return this.listMedias.find(element => element.id == id);
    }

    /**
     * @param {string} id ID du média
     */
    loadMedia(id) {
        this.currentElement = this.getElementById(id);

        this.setControls();
        this.displayMedia();
    }

    displayMedia() {
        // Source du média
        const MEDIA_SRC = this.lightbox.querySelector('.lightbox__mediaSrc');
        MEDIA_SRC.innerHTML = '';
        // MEDIA_SRC.innerHTML = this.currentElement.outerHTML;
        MEDIA_SRC.insertAdjacentElement("afterbegin", this.currentElement);

        // Nom du média
        const MEDIA_NAME = this.currentElement.title;
        this.lightBoxName = this.lightbox.querySelector('.lightbox__mediaName');
        this.lightBoxName.innerText = `${MEDIA_NAME}`;
        // this.lightBoxName.innerText = this.currentElement.title;
    }
    
    /**
     * @return {HTMLElement} Retourne le DOM
     */
    buildDom() {
        const DOM = document.createElement('aside');
        DOM.classList.add('lightbox');
        DOM.innerHTML = `<article class="lightbox__content">
        <button type="button" class="fas fa-times lightbox__close" role="button"
            title="Close dialog"></button>
        <button type="button" class="fas fa-chevron-left lightbox__prev" role="button"
            title="Média précédent"></button>
        <button type="button" class="fas fa-chevron-right lightbox__next" role="button"
            title="Média suivant"></button>
        <div class="lightbox__mediaSrc"></div>
        <div class="lightbox__mediaName"></div>
    </article>`
    DOM.querySelector('.lightbox__close').addEventListener('click',
        this.closeLightbox.bind(this));
    DOM.querySelector('.lightbox__next').addEventListener('click',
        this.next.bind(this));
    DOM.querySelector('.lightbox__prev').addEventListener('click',
        this.previous.bind(this));

    return DOM;
    }

    setControls() {
        // Affiche: l'URL du media
        const URLMEDIA = this.currentElement.src;

        // Affiche: l'extention du media
        const EXTENTIONMEDIA = URLMEDIA.split('.').pop();
        
        // SI extentionmedia === 'mp4', on active controls & autoplay
        if (EXTENTIONMEDIA === 'mp4') {
            // console.log('setControls() dit EXTENTIONMEDIA vaut:', EXTENTIONMEDIA);
            this.currentElement.setAttribute("controls", "controls");
            this.currentElement.setAttribute("autoplay", "autoplay");
            // this.currentElement.setAttribute("muted", "muted");
        } 
    }

    /**
     * Navigation au clavier
     * @param {KeyboardEvent} e 
     */
    onKeyUp(e) {
        if (e.key === 'Escape') {
            this.closeLightbox(e);
        } else if (e.key === 'ArrowLeft') {
            this.previous(e);
        } else if (e.key === 'ArrowRight') {
            this.next(e);
        }
    }

    /**
     * Ferme la lightbox
     * @param {MouseEvent/KeyboardEvent} e 
     */
    closeLightbox(e) {
        e.preventDefault();
        this.lightbox.classList.add('fadeOut');
        window.setTimeout(() => {
            this.lightbox.parentElement.removeChild(this.lightbox);
        }, 300)
        document.removeEventListener('keyup', this.onKeyUp);
    }

    /**
     * Passe au média suivant
     * @param {MouseEvent/KeyboardEvent} e 
     */
    next(e) {
        e.preventDefault();
        let index = this.listMedias.findIndex(element => element.id == this.currentElement.id);
        if (index == this.listMedias.length - 1) {
            this.currentElement = this.listMedias[0];
        } else {
            this.currentElement = this.listMedias[index + 1];
        }
        this.displayMedia();
    }

    /**
     * Passe au média précédent
     * @param {MouseEvent/KeyboardEvent} e 
     */
    previous(e) {
        e.preventDefault();
        let index = this.listMedias.findIndex(element => element.id == this.currentElement.id);
        if (index == 0) {
            this.currentElement = this.listMedias[this.listMedias.length - 1];
        } else {
            this.currentElement = this.listMedias[index - 1];
        }
        this.displayMedia();
    }

    // handleEvents() {
    //     document.querySelector(".right-arrow-icon").addEventListener("click", () => {
    //         this.next();
    //     });
    //     document.querySelector(".left-arrow-icon").addEventListener("click", () => {
    //         this.previous();
    //     });
    //     document.querySelector(".close-icon").addEventListener("click", () => {
    //         this.closeLightbox();
    //     });
    //     this.lightbox.addEventListener("click", (e) => {
    //         if (e.target == e.currentTarget) {
    //             this.closeLightbox();
    //         }
    //     });
    //     document.addEventListener("keyup", (e) => {
  
    //         switch(e.key) {
    //             case "ArrowRight":
    //                 // console.log(e.key);
    //                 // console.log("next !!");
    //                 this.next(e);
    //                 break;
    //             case "ArrowLeft":
    //                 // console.log(e.key);
    //                 // console.log("previous !!");
    //                 this.previous(e);
    //                 break;
    //             case "Escape":
    //                 // console.log(e.key);
    //                 // console.log("close !!");
    //                 this.closeLightbox(e);
    //                 break;
    //         }
    //     });
    // }

    // keyboard() {
    //     this.lightbox.addEventListener("keydown", (e) => {
            
    //         // ECHAP pour fermer
    //         if (e.key == "Escape") {
    //             this.closeLightbox();
    //         }

    //         // Flèche droite pour avancer
    //         else if (e.key == "ArrowRight") {
    //             this.next();
    //         }

    //         // Flèche gauche pour reculer
    //         else if (e.key == "ArrowLeft") {
    //             this.previous();
    //         } else {
    //             console.log("erreur dans le else")
    //         }
    //     });
    // }

}
