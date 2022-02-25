'use strict';

import GalleryFactory from '../../factories/GalleryFactory.js';

export default class DropDownMenu {
    // Ouverture du menu dropdown
    dropDown(data) {
        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = 'block';
            });
            this.sortMedias(data);
        }
        if (arrowClose) {
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "none";
            });
        }
    }
    // Trier les médias
    sortMedias(data) {
        let medias_sorted_array = [];
        const MEDIAS = data.dataMedias;
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        let sortBtn = Array.from(document.getElementsByClassName('sort'));

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
            hiddenSort[0].style.display = "none";
            if (index == 0) {
                btnSort.innerHTML = `Popularité`;
                // Trier par popularité
                medias_sorted_array = MEDIAS.sort((a, b) => {   
                    return b.likes - a.likes;
                })
            } else if (index == 1) {
                btnSort.innerHTML = `Date`;
                // Trier par date
                medias_sorted_array = MEDIAS.sort((a, b) => {  
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })
            } else if (index == 2) {
                btnSort.innerHTML = `Titre`;
                // Trier par titre
                medias_sorted_array = MEDIAS.sort((a, b) => { 
                    if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
                        return -1;
                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
                        return 1;
                    }
                })
            }
            // Affichage des médias triés
            this.displaySortMedia(medias_sorted_array);
        }));
    }
    // Appel méthode builder() de GalleryFactory()
    displaySortMedia(medias_sorted_array) {
        document.getElementById("ph-works").innerHTML = "";
        new GalleryFactory().builderGallery(medias_sorted_array);
    }
}