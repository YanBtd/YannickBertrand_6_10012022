'use strict';

// Import api des données Ficheye
import {getDataFisheye} from '../api/apiDataFisheye.js';

// Appel de la fonction d'affichage des photographers
import { displayPhotographers } from "../components/displayPhotographers.js";

// Récupération des données
const DATA_FISHEYE_OBJ = await getDataFisheye();

const photographersArray = DATA_FISHEYE_OBJ.photographersArray;

displayPhotographers(photographersArray);

