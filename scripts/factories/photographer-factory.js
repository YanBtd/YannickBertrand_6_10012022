function photographerFactory(photographer) {
    // const { name, portrait } = data;

    const { name } = photographer;

    // const picture = `assets/photographers/${portrait}`;

    // function getUserCardDOM() {
    //     const article = document.createElement( 'article' );
    //     const img = document.createElement( 'img' );
    //     img.setAttribute("src", picture)
    //     const h2 = document.createElement( 'h2' );
    //     h2.textContent = name;
    //     article.appendChild(img);
    //     article.appendChild(h2);
    //     return (article);
    // }
    // return { name, picture, getUserCardDOM }

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.className = 'fichePhotographe';
        let templatePhotographer = `
            <a href="photographer.html?id=${photographer.id}" title="${photographer.name}">
                <img src="${photographer.portrait}" alt="${photographer.alt}">
                <h2 class="name">${photographer.name}</h2>
            </a>
            <p class="location">${photographer.city}, ${photographer.country}</p>
            <p class="tagline">${photographer.tagline}</p>
            <p class="price">${photographer.price}€/jour</p>
            `
            article.innerHTML = templatePhotographer;
            return (article);
    }
    return {name, getUserCardDOM}
}