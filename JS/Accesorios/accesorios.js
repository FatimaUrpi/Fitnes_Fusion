
let listAccesoriosHTML = document.querySelector('.listAccesorios');
let listAccesorios = [];

const addDataHTMLAccesorios = () => {
    listAccesoriosHTML.innerHTML = '';
    if (listAccesorios.length > 0) {
        listAccesorios.slice(0).forEach(product => {
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

const initAppAccesorios = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listAccesorios = data.filter(product => product.categoria === "Accesorios");
            addDataHTMLAccesorios();
        })
}
initAppAccesorios();