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
        const data = await getDataFisheye()
        if (window.location.pathname.includes("/photographer.html")) {
            // Affichage Profil Photographe
            displayPhotographerProfil(data);

            // Affichage Bouton dropdown
            new DropDownMenu().dropDown(data);

            // Affichage Gallery photographe & Box Likes + tarif
            new MediaBuilder().photographersMedias(data);
            return;
        }
        // Affichage Page d'Accueil
        await displayPhotographers(data);
    }
    catch (err) {
        console.error('Erreur accès dataFisheye ');
    }
})();
