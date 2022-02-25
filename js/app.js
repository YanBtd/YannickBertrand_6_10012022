'use strict';

// Récupérartion des données Ficheye
import { getDataFisheye } from './dataFisheye.js';

// Création Page d'Accueil
import { displayPhotographers } from './pages/accueil/index-page.js';

// Création Profil Photographe
import { displayPhotographerProfil } from './pages/photographe/photographer-page.js';

(function appRouter() {
    getDataFisheye().then((data) => {
        if (window.location.pathname.includes("/photographer.html")) {
            // Affichage Profil Photographe
            displayPhotographerProfil(data);
        }
        // Affichage Page d'Accueil
        displayPhotographers(data);
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })
})();
