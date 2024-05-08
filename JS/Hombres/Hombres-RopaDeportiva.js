/*POLERAS*/ 
let listProductPolerasHombreHTML = document.querySelector('.listProductPolerasHombre');
let listProductPolerasHombre = [];

const addDataHTMLPoleraHombre = () => {
    listProductPolerasHombreHTML.innerHTML = '';
    const tipos = ['polera'];
    tipos.forEach(tipo => {
        const productosTipo = listProductPolerasHombre.filter(producto => producto.tipo === tipo);
        if (productosTipo.length > 0) {
            productosTipo.forEach(producto => {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = `
                <img src="${producto.image}" alt="">
                <h2>${producto.name}</h2>
                <div class="price">S/.${producto.price}</div>
                <button class="addCard">Comprar</button>`;
                listProductPolerasHombreHTML.appendChild(newProduct);
            });
        }
    });
}

const initAppPoleraHombre = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listProductPolerasHombre = data.filter(producto => producto.categoria === "ropa_deportiva" && producto.tipo === "polera" && producto.genero === "Hombre");
            addDataHTMLPoleraHombre();
        })
}
initAppPoleraHombre();

/*CASACAS*/

let listProductCasacasHTML = document.querySelector('.listProductCasacasHombre'); // Selecciona el contenedor de casacas
let listProductsCasacas = []; // Usar una variable diferente para almacenar las casacas

const addDataHTMLCasacas = () => {
    listProductCasacasHTML.innerHTML = '';
    const tipos = ['casaca'];
    tipos.forEach(tipo => {
    const productosTipo = listProductsCasacas.filter(producto => producto.tipo === tipo);
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
        });
    }
});
}
const initAppCasacas = () => {
    fetch('./JS/inicio/productos.json') // Lee el archivo JSON correcto para casacas
        .then(response => response.json())
        .then(data => {
            listProductsCasacas = data.filter(producto => producto.categoria === "ropa_deportiva" && producto.tipo === "casaca"&& producto.genero === "Hombre");
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
    fetch('./JS/inicio/productos.json') // Lee el archivo JSON correcto para conjuntos
        .then(response => response.json())
        .then(data => {
            listProductsConjuntos = data.filter(producto => producto.categoria === "ropa_deportiva" && producto.tipo === "conjunto"&& producto.genero === "Hombre");
            addDataHTMLConjuntos();
        })
}
initAppConjuntos();