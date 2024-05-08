/*POLERAS*/ 
let listProductPolerasMujeresHTML = document.querySelector('.listProductPolerasMujeres');
let listProductPolerasMujeres = [];

const addDataHTMLPoleraMujer = () => {
    listProductPolerasMujeresHTML.innerHTML = '';
    const tipos = ['polera'];
    tipos.forEach(tipo => {
        const productosTipo = listProductPolerasMujeres.filter(producto => producto.tipo === tipo);
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
        });
    }
});
}
const initAppPoleraMujer = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listProductPolerasMujeres = data.filter(producto => producto.categoria === "ropa_deportiva" && producto.tipo === "polera" && producto.genero === "Mujer");
            addDataHTMLPoleraMujer();
        })
}
initAppPoleraMujer();

/*CASACAS*/

let listProductCasacasMujeresHTML = document.querySelector('.listProductCasacasMujeres');
let listProductsCasacasMujeres = [];

const addDataHTMLCasacasMujeres = () => {
    listProductCasacasMujeresHTML.innerHTML = '';
    const tipos = ['casaca'];
    tipos.forEach(tipo => {
    const productosTipo = listProductsCasacasMujeres.filter(producto => producto.tipo === tipo);
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
        });
    }
});
}
const initAppCasacasMujeres = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listProductsCasacasMujeres = data.filter(producto => producto.categoria === "ropa_deportiva" && producto.tipo === "casaca"&& producto.genero === "Mujer");
            addDataHTMLCasacasMujeres();
        })
}
initAppCasacasMujeres();

/*CONJUNTOS*/

let listProductConjuntosMujeresHTML = document.querySelector('.listProductConjuntosMujeres');
let listProductsConjuntosMujeres = [];

const addDataHTMLConjuntosMujeres = () => {
    listProductConjuntosMujeresHTML.innerHTML = '';
    const tipos = ['conjunto'];
    tipos.forEach(tipo => {
        const productosTipo = listProductPolerasMujeres.filter(producto => producto.tipo === tipo);
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
        });
    }
});
}
const initAppConjuntosMujeres = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listProductsConjuntosMujeres = data.filter(producto => producto.categoria === "ropa_deportiva" && producto.tipo === "conjunto"&& producto.genero === "Mujer");
            addDataHTMLConjuntosMujeres();
        })
}
initAppConjuntosMujeres();
