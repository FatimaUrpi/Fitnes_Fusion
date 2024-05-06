/*POLERAS*/ 
let listProductPolerasMujeresHTML = document.querySelector('.listProductPolerasMujeres');
let listProductPolerasMujeres = [];

const addDataHTMLPoleraMujer = () => {
    listProductPolerasMujeresHTML.innerHTML = '';
    if (listProductPolerasMujeres.length > 0) {
        listProductPolerasMujeres.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listProductPolerasMujeresHTML.appendChild(newProduct);
        })
    }
}

const initAppPoleraMujer = () => {
    fetch('./JS/Mujeres/mujerPolera.json')
        .then(response => response.json())
        .then(data => {
            listProductPolerasMujeres = data;
            addDataHTMLPoleraMujer();
        })
}
initAppPoleraMujer();

/*CASACAS*/

let listProductCasacasMujeresHTML = document.querySelector('.listProductCasacasMujeres');
let listProductsCasacasMujeres = [];

const addDataHTMLCasacasMujeres = () => {
    listProductCasacasMujeresHTML.innerHTML = '';
    if (listProductsCasacasMujeres.length > 0) {
        listProductsCasacasMujeres.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listProductCasacasMujeresHTML.appendChild(newProduct);
        })
    }
}

const initAppCasacasMujeres = () => {
    fetch('./JS/Mujeres/mujerCasaca.json')
        .then(response => response.json())
        .then(data => {
            listProductsCasacasMujeres = data;
            addDataHTMLCasacasMujeres();
        })
}
initAppCasacasMujeres();

/*CONJUNTOS*/

let listProductConjuntosMujeresHTML = document.querySelector('.listProductConjuntosMujeres');
let listProductsConjuntosMujeres = [];

const addDataHTMLConjuntosMujeres = () => {
    listProductConjuntosMujeresHTML.innerHTML = '';
    if (listProductsConjuntosMujeres.length > 0) {
        listProductsConjuntosMujeres.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listProductConjuntosMujeresHTML.appendChild(newProduct);
        })
    }
}

const initAppConjuntosMujeres = () => {
    fetch('./JS/Mujeres/mujerConjunto.json')
        .then(response => response.json())
        .then(data => {
            listProductsConjuntosMujeres = data;
            addDataHTMLConjuntosMujeres();
        })
}
initAppConjuntosMujeres();
