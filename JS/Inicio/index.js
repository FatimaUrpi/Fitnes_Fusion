let listRopaDeportivaHTML = document.querySelector('.listRopaDeportiva');
let listRopaDeportiva = [];

const addDataHTMLRopaDeportiva = () => {
    listRopaDeportivaHTML.innerHTML = '';
    const tipos = ['polera', 'casaca', 'conjunto'];
    tipos.forEach(tipo => {
        const productosTipo = listRopaDeportiva.filter(producto => producto.tipo === tipo);
        if (productosTipo.length > 0) {
            // Limitar la cantidad de productos a mostrar a 1 o 2
            productosTipo.slice(0, 1).forEach(producto => {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = `
                <img src="${producto.image}" alt="">
                <h2>${producto.name}</h2>
                <div class="price">S/.${producto.price}</div>
                <button class="addCard">Comprar</button>`;
                listRopaDeportivaHTML.appendChild(newProduct);
            });
        }
    });
}

const initAppRopaDeportiva = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listRopaDeportiva = data.filter(producto => producto.categoria === "ropa_deportiva");
            addDataHTMLRopaDeportiva();
        })
}
initAppRopaDeportiva();

/*SUPLEMENTOS*/

let listSuplementosHTML = document.querySelector('.listSuplementos');
let listSuplementos = [];

const addDataHTMLSuplementos = () => {
    listSuplementosHTML.innerHTML = '';
    if (listSuplementos.length > 0) {
        listSuplementos.slice(0, 4).forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listSuplementosHTML.appendChild(newProduct);
        });
    }
}

const initAppSuplementos = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listSuplementos = data.filter(product => product.categoria === "Suplementos");
            addDataHTMLSuplementos();
        })
}
initAppSuplementos();

/*CONJUNTOS*/

let listAccesoriosHTML = document.querySelector('.listAccesorios');
let listAccesorios = [];

const addDataHTMLConjuntos = () => {
    listAccesoriosHTML.innerHTML = '';
    if (listAccesorios.length > 0) {
        listAccesorios.slice(0, 4).forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listAccesoriosHTML.appendChild(newProduct);
        });
    }
}

const initAppConjuntos = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listAccesorios = data.filter(product => product.categoria === "Accesorios");
            addDataHTMLConjuntos();
        })
}
initAppConjuntos();
