'use strict';

// Récupérartion des données Ficheye
import { getDataFisheye } from './dataFisheye.js';

// Création Page d'Accueil
import { displayPhotographers } from './pages/accueil/index-page.js';

// Création Profil Photographe
import { displayPhotographerProfil } from './pages/photographe/photographer-profil.js';
// Création Bouton Dropdown
import DropDownMenu from './pages/photographe/DropDownSort.js';
// création Gallery photographe & Box Total likes + tarif journalier
import MediaBuilder from './pages/photographe/MediaBuilder.js';

(async function appRouter() {
    try {
        const DATA_FISHEYE = await getDataFisheye()
        if (window.location.pathname.includes("/photographer.html")) {
            // Affichage Profil Photographe
            displayPhotographerProfil(DATA_FISHEYE);

            // Affichage Bouton dropdown
            new DropDownMenu().dropDown(DATA_FISHEYE);

            // Affichage Gallery photographe & Box Likes + tarif
            new MediaBuilder().photographersMedias(DATA_FISHEYE);
            return;
        }
        // Affichage Page d'Accueil
        displayPhotographers(DATA_FISHEYE);
    }
    catch (err) {
        console.error('Erreur accès dataFisheye ');
    }
})();
