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
.then(data =>{
    products = data.filter(producto => producto.categoria === "Suplementos" && producto.tipo === "Creatina");
    addDataToHTML();
})

function addDataToHTML(){
    let listproductHtML = document.querySelector('.listCreatine');
    listproductHtML.innerHTML = "";

    //add data
    if(products != null)
        {
        products.forEach(products =>{
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${products.image}" alt="">
            <h2>${products.name}</h2>
            <div class="price">S/.${products.price}</div>
            <button onclick="addCart(${products.id})">Comprar</button>`;
            listproductHtML.appendChild(newProduct);
        });
    }

}
/*Lista add */

