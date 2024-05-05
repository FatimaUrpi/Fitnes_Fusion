
let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

const addDataHTML = () => {
    listProductHTML.innerHTML = '';
    if (listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listProductHTML.appendChild(newProduct);
        })
    }
}

const initApp = () => {
    fetch('JS/Suplementos-Inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listProducts = data;
            addDataHTML();
        })
}
initApp();