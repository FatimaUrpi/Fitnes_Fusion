// productos.js

// Definir productos en un ámbito global
var productos = [
    { imagen: "./img/producto1.jpg", nombre: "POLO URBANO KOSMISK DROMMER", precio: "S/. 119.90 PEN" },
    { imagen: "./img/producto2.jpg", nombre: "POLO URO KOSMISK DROMMER", precio: "S/. 119.90 PEN" },
    { imagen: "./img/producto3.jpg", nombre: "POLO ALLO KOSMISK DROMMER", precio: "S/. 119.90 PEN" },
    { imagen: "./img/producto4.jpg", nombre: "POLO BANO KOSMISK DROMMER", precio: "S/. 119.90 PEN" },
    { imagen: "./img/producto5.jpg", nombre: "POLO URoO KOSMISK DROMMER", precio: "S/. 119.90 PEN" },
];

document.addEventListener("DOMContentLoaded", function() {
    var productosContainer = document.getElementById("productos-container");

    productos.forEach(function(producto, index) {
        var productoDiv = document.createElement("div");
        productoDiv.className = "producto";

        // Al hacer clic en un producto, llamará a la función showModalDatos() con el índice del producto
        productoDiv.onclick = function() {
            showModalDatos(index);
        };

        var imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = "Producto";

        var titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        var precio = document.createElement("p");
        precio.textContent = producto.precio;

        productoDiv.appendChild(imagen);
        productoDiv.appendChild(titulo);
        productoDiv.appendChild(precio);

        productosContainer.appendChild(productoDiv);
    });
});

