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

let products = null;
//get data
fetch('./JS/Inicio/productos.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
    })

function addDataToHTML() {
    let listproductHtML = document.querySelector('.listCreatine');
    listproductHtML.innerHTML = "";

    //add data
    if (products != null) {
        products.forEach(product => {
            if (product.tipo === "Creatina") {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">S/.${product.price}</div>
                <button onclick="addCart(${product.id})">Comprar</button>`;
                listproductHtML.appendChild(newProduct);
            }
        });
    }
}
/*Lista add */
let listCart = [];

//and i get cookie data cart

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    } else {
        listCart = [];
    }
}
checkCart();
function addCart($idProduct) {
    let productsCopy = JSON.parse(JSON.stringify(products));
    //if this product is not in the cart
    if (!listCart[$idProduct]) {
        listCart[$idProduct] = productsCopy.filter(product => product.id == $idProduct )[0];
        listCart[$idProduct].quantity = 1;
    } else {
        //if this product is already in the cart
        //i just increased the quatity
        listCart[$idProduct].quantity++;
    }
    //i will ssav datas cart in cookie
    //to save this datas cart when i turn th  computer
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    addCartToHTML();

}
addCartToHTML();
function addCartToHTML() {
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.totalQuantity');

    let totalQuantity = 0;

    if (listCart) {
        listCart.forEach(product => {
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

function changeQuantity($idProduct, $type) {
    switch ($type) {
        case '+':
            listCart[$idProduct].quantity++;
            break;
        case '-':
            listCart[$idProduct].quantity--;

            // if quantity <= 0 then remove product in cart
            if (listCart[$idProduct].quantity <= 0) {
                delete listCart[$idProduct];
            }
            break;

        default:
            break;
    }
    // save new data in cookie
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    // reload html view cart
    addCartToHTML();
}


