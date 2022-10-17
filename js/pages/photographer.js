'use strict';

// Import api des données Ficheye
import {getDataFisheye} from '../api/apiDataFisheye.js';

// Import méthode d'affichage du profil photographe
import {displayProfil} from '../components/displayProfil.js';

// Import méthode de gestion du tri
import {DropDownMenu} from '../components/HandleDropDown.js';

// Import méthode d'affichage Gallery photographe & Box Likes + tarif
import {displayGalleryAndBox} from '../components/displayGalleryAndBox.js';

const DATA_FISHEYE_OBJ = await getDataFisheye();

const PHOTOGRAPHERSARRAY = DATA_FISHEYE_OBJ.photographersArray;

// Array de type object des 59 Objects
// alt, date, id, image || video, likes, mediaName, photographerId, price
const MEDIASARRAY = DATA_FISHEYE_OBJ.mediasArray;

// Affichage du profil du photographe
displayProfil(PHOTOGRAPHERSARRAY);

// Gestion du tri
new DropDownMenu().dropDown(MEDIASARRAY);

// Affichage Gallery photographe & Box Likes + tarif
displayGalleryAndBox(MEDIASARRAY, PHOTOGRAPHERSARRAY);