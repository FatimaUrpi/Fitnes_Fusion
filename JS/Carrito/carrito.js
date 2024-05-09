let listCart = [];

// Obtener datos del carrito del almacenamiento local al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    checkCart();
    addCartToHTML();
});

let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

iconCart.addEventListener('click', function(){
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    }else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})
close.addEventListener('click', function (){
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})

// Obtener datos del carrito del almacenamiento local
function checkCart() {
    let cartData = localStorage.getItem('listCart');
    if (cartData) {
        listCart = JSON.parse(cartData);
    } else {
        listCart = [];
    }
}

// Guardar datos del carrito en el almacenamiento local
function saveCart() {
    localStorage.setItem('listCart', JSON.stringify(listCart));
}

// Agregar producto al carrito
function addCart($idProduct) {
    let productsCopy = JSON.parse(JSON.stringify(products));
    // Si este producto no está en el carrito
    if (!listCart[$idProduct]) {
        listCart[$idProduct] = productsCopy.filter(product => product.id == $idProduct )[0];
        listCart[$idProduct].quantity = 1;
    } else {
        // Si este producto ya está en el carrito, solo aumentamos la cantidad
        listCart[$idProduct].quantity++;
    }
    // Guardar datos del carrito en el almacenamiento local
    saveCart();
    addCartToHTML();
}

// Actualizar la vista del carrito en HTML
function addCartToHTML() {
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.totalQuantity');

    let totalQuantity = 0;

    if (listCart) {
        Object.values(listCart).forEach(product => {
            if (product) {
                    let newCart = document.createElement('div');
                    newCart.classList.add('item');
                    newCart.innerHTML = `
                    <img src="${product.image}">
                    <div class="content">
                    <div class="name">${product.name}</div>
                    <div class="price">${product.price}/1 product
                </div>
                <div class="quantity">
                        <button onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value">${product.quantity}</span>
                        <button onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
                    listCartHTML.appendChild(newCart);
                    totalQuantity = totalQuantity + product.quantity;
            }
        })
    }
    totalHTML.innerText = totalQuantity;
}

// Cambiar la cantidad de un producto en el carrito
function changeQuantity($idProduct, $type) {
    switch ($type) {
        case '+':
            listCart[$idProduct].quantity++;
            break;
        case '-':
            listCart[$idProduct].quantity--;

            // Si la cantidad es <= 0, eliminar el producto del carrito
            if (listCart[$idProduct].quantity <= 0) {
                delete listCart[$idProduct];
            }
            break;

        default:
            break;
    }
    // Guardar datos del carrito en el almacenamiento local
    saveCart();
    // Recargar la vista del carrito en HTML
    addCartToHTML();
}
