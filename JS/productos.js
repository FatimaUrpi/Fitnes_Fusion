
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
        
    // Obtener solo los primeros 4 productos
    var primerosProductos = productos.slice(0, 4);

    primerosProductos.forEach(function(producto, index) {
        var productoDiv = document.createElement("div");
        productoDiv.className = "producto prom"; // Agrega la clase "prom" aquí

        var imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = "Producto";

        var titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        var precio = document.createElement("p");
        precio.textContent = producto.precio;

        var boton = document.createElement("button");
        boton.textContent = "COMPRAR"; // Texto del botón

        productoDiv.appendChild(imagen);
        productoDiv.appendChild(titulo);
        productoDiv.appendChild(precio);
        productoDiv.appendChild(boton); // Agrega el botón al producto

        productosContainer.appendChild(productoDiv);
    });
});
