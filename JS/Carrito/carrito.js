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

let listCart = [];
function addCard($idProducto){
    let productCopy = JSON.parse(JSON.stringify(products));
    //if this product is not in the cart
    if(!listCart[$idProducto]){
        let dataProduct = productCopy.filter(
            product => product.id ==$idProducto
        )[0];

        //add data product cart
        listCart[$idProducto] = dataProduct;
        listCart[$idProducto] = quatity = 1;
    }else{
        //if this product is already in the cart
        //i just increased the quatity
        listCart[$idProducto].quatity++;

    }
    //i will ssav datas cart in cookie
    //to save this datas cart when i turn th  computer
    let timeSave = "expire=Thu, 31 Dec 2025 23:59:59 UTC";
    document.cookie = "listCart=" + JSON.stringify
}

