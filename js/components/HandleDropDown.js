'use strict';

import { GalleryFactory } from '../factories/GalleryFactory.js';

export class DropDownMenu {
    constructor() {
        this.arrowOpen = document.getElementsByClassName('sort-btn');
        this.arrowClose = document.getElementsByClassName('arrow-up-close');
        this.sortButton = document.querySelector('.sort-btn');
        this.ulMenu = document.getElementsByClassName('ul-menu');
        this.liArray = Array.from(document.getElementsByClassName('li'));
        this.medias = document.getElementById("medias");
        this.mediasSortedArray = [];
    }

    displayMenu() {
        this.ulMenu[0].style.display = 'block';
    }

    hideMenu() {
        this.ulMenu[0].style.display = 'none';
    }

    handleButtonText(index) {
        if(index == 0) {
            this.sortButton.innerText = `Popularité`;
        } else if (index==1) {
            this.sortButton.innerText = `Date`;
        } else if (index==2) {
            this.sortButton.innerText = `Titre`;
        }
    }

    displaySortedMedias(sortedMedias)  {
        // Création + Affichage des médias triés
        this.medias.innerHTML = "";
        new GalleryFactory().createGallery(sortedMedias);
    }

    // Ouverture du menu dropdown
    dropDown(medias) {
        if (this.arrowOpen) {
            this.arrowOpen[0].addEventListener('click', this.displayMenu.bind(this));
            this.sortMedias(medias);
            this.keyboard(medias);
        }
        if (this.arrowClose) {
            this.arrowClose[0].addEventListener('click', this.hideMenu.bind(this));
        }
    }

    // Trier les médias
    sortMedias(medias) {
        this.liArray.forEach((li, index) => li.addEventListener('click', () => {
        
            // Au clic sur le li, on ferme le menu
            this.hideMenu();

            if (index == 0) {
                this.handleButtonText(0);
                // Trier par popularité
                this.mediasSortedArray = medias.sort((a, b) => {
                    return b.likes - a.likes;
                })
            } else if (index == 1) {
                this.handleButtonText(1);
                // Trier par date
                this.mediasSortedArray = medias.sort((a, b) => {
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })
            } else if (index == 2) {
                this.handleButtonText(2);
                // Trier par titre
                this.mediasSortedArray = medias.sort((a, b) => {
                    if (a.mediaName.toLowerCase() < b.mediaName.toLowerCase()) {
                        return -1;
                    } else if (a.mediaName.toLowerCase() > b.mediaName.toLowerCase()) {
                        return 1;
                    }
                })
            }
            // Création + Affichage des médias triés
            this.displaySortedMedias(this.mediasSortedArray);
        }));
    }

    // Navigation clavier
    keyboard(medias) {
        this.liArray.forEach((li, index) => li.addEventListener('keyup', (e) => {

            if (e.key == "Enter") {
                if(index==0) {
                    this.handleButtonText(0);
                    // Trier par popularité
                    this.mediasSortedArray = medias.sort((a, b) => {
                        return b.likes - a.likes;
                    })
                } else if (index==1) {
                    this.handleButtonText(1);
                    // Trier par date
                    this.mediasSortedArray = medias.sort((a, b) => {
                        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                    })
                } else if (index==2) {
                    this.handleButtonText(2);
                    // Trier par titre
                    this.mediasSortedArray = medias.sort((a, b) => {
                        if (a.mediaName.toLowerCase() < b.mediaName.toLowerCase()) {
                            return -1;
                        } else if (a.mediaName.toLowerCase() > b.mediaName.toLowerCase()) {
                            return 1;
                        }
                    })
                }
                // Fermeture menu
                this.hideMenu();
                // Création + Affichage des médias triés
                this.displaySortedMedias(this.mediasSortedArray);
            }
        }));
    }
};