async function getPhotographers() {
    
    const response = await fetch('data/photographers.json', { mode: 'same-origin' })
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Ce fichier n'est pas au format JSON!");
    }
    return await response.json();
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographers_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
