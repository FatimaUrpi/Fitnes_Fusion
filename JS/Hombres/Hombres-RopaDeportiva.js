/*POLERAS*/ 
let listProductPolerasHombreHTML = document.querySelector('.listProductPolerasHombre');
let listProductPolerasHombre = [];

const addDataHTMLPoleraHombre = () => {
    listProductPolerasHombreHTML.innerHTML = '';
    if (listProductPolerasHombre.length > 0) {
        listProductPolerasHombre.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listProductPolerasHombreHTML.appendChild(newProduct);
        })
    }
}

const initAppPoleraHombre = () => {
    fetch('./JS/Hombres/hombrePolera.json')
        .then(response => response.json())
        .then(data => {
            listProductPolerasHombre = data; // Asigna los datos a la variable correcta
            addDataHTMLPoleraHombre();
        })
}
initAppPoleraHombre();

/*CASACAS*/

let listProductCasacasHTML = document.querySelector('.listProductCasacasHombre'); // Selecciona el contenedor de casacas
let listProductsCasacas = []; // Usar una variable diferente para almacenar las casacas

const addDataHTMLCasacas = () => {
    listProductCasacasHTML.innerHTML = '';
    if (listProductsCasacas.length > 0) {
        listProductsCasacas.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listProductCasacasHTML.appendChild(newProduct);
        })
    }
}

const initAppCasacas = () => {
    fetch('./JS/Hombres/hombreCasaca.json') // Lee el archivo JSON correcto para casacas
        .then(response => response.json())
        .then(data => {
            listProductsCasacas = data; // Asigna los datos a la variable correcta
            addDataHTMLCasacas();
        })
}
initAppCasacas();

/*CONJUNTOS*/

let listProductConjuntosHTML = document.querySelector('.listProductConjuntosHombre'); // Selecciona el contenedor de conjuntos
let listProductsConjuntos = []; // Usar una variable diferente para almacenar los conjuntos

const addDataHTMLConjuntos = () => {
    listProductConjuntosHTML.innerHTML = '';
    if (listProductsConjuntos.length > 0) {
        listProductsConjuntos.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listProductConjuntosHTML.appendChild(newProduct);
        })
    }
}

const initAppConjuntos = () => {
    fetch('./JS/Hombres/hombreConjunto.json') // Lee el archivo JSON correcto para conjuntos
        .then(response => response.json())
        .then(data => {
            listProductsConjuntos = data; // Asigna los datos a la variable correcta
            addDataHTMLConjuntos();
        })
}
initAppConjuntos();