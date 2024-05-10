let listCart = [];

function checkCart() {
    let cartData = localStorage.getItem('listCart');
    if (cartData) {
        listCart = JSON.parse(cartData);
    } else {
        listCart = [];
    }
}


function saveCartToCookie() {
    document.cookie = `listCart=${JSON.stringify(listCart)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

checkCart();
addCartToHTML();

function addCartToHTML() {
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML =
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inicioSesion-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Guardar los datos del carrito en las cookies
        saveCartToCookie();

        // Mostrar la alerta
        Swal.fire({
            title: "Compra Exitosa!",
            text: "Muchas gracias por comprar en FITNESS FUSION!!",
            icon: "success"
        }).then(() => {
            // Redirigir a la página de inicio
            window.location.href = "Index.html";
        });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    checkCart(); // Obtener datos del carrito de las cookies
    addCartToHTML(); // Mostrar los productos en el carrito en la página de checkout
});
