
let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

const addDataHTML = () => {
    listProductHTML.innerHTML = '';
    const tipos = ['Proteina', 'Vitamina', 'Pre-Entreno', 'Creatina'];
    tipos.forEach(tipo => {
        const productosTipo = listProducts.filter(producto => producto.tipo === tipo);
        if (productosTipo.length > 0) {
            // Limitar la cantidad de productos a mostrar a 2 por tipo
            productosTipo.slice(0, 2).forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">S/.${product.price}</div>
                <button class="addCard">Comprar</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    });
}


const initApp = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listProducts = data.filter(producto => producto.categoria === "Suplementos");
            addDataHTML();
        })
}
initApp();