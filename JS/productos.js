// Definir productos en un ámbito global
var productos = [
    { imagen: "./img/producto1.jpg", nombre: "POLO URBANO KOSMISK DROMMER", precio: "S/. 119.90 PEN", categoria: "ropa" },
    { imagen: "./img/producto2.jpg", nombre: "POLO URO KOSMISK DROMMER", precio: "S/. 119.90 PEN", categoria: "ropa" },
    { imagen: "./img/producto3.jpg", nombre: "POLO ALLO KOSMISK DROMMER", precio: "S/. 119.90 PEN", categoria: "ropa" },
    { imagen: "./img/producto4.jpg", nombre: "POLO BANO KOSMISK DROMMER", precio: "S/. 119.90 PEN", categoria: "ropa" },
    { imagen: "./img/producto5.jpg", nombre: "POLO URoO KOSMISK DROMMER", precio: "S/. 119.90 PEN", categoria: "ropa" },
];

// Función para obtener los productos del carrito almacenados en el almacenamiento local
function obtenerCarrito() {
    var carritoJSON = localStorage.getItem("carrito");
    return carritoJSON ? JSON.parse(carritoJSON) : [];
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    // Obtener el carrito actual
    var carrito = obtenerCarrito();
    // Agregar el producto al carrito
    carrito.push(producto);
    // Actualizar el almacenamiento local con el nuevo carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // Actualizar la visualización del carrito en el HTML
    actualizarCarritoHTML();
}

// Función para actualizar la visualización del carrito en el HTML
function actualizarCarritoHTML() {
    // Obtener los productos del carrito desde el almacenamiento local
    var carrito = obtenerCarrito();
    // Seleccionar el elemento del carrito en el HTML
    var carritoElemento = document.getElementById("carrito-lista");
    // Limpiar el contenido anterior del carrito
    carritoElemento.innerHTML = "";
    // Iterar sobre los productos en el carrito y agregarlos al HTML
    carrito.forEach(function(producto) {
        // Crear un elemento de lista para cada producto en el carrito
        var productoElemento = document.createElement("li");
        productoElemento.textContent = producto.nombre + " - " + producto.precio;
        // Agregar el elemento de lista al carrito en el HTML
        carritoElemento.appendChild(productoElemento);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    function mostrarOpcionesRopaOcultarVerMas() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        var verMasRopaBtn = document.getElementById("ver-mas-ropa-btn");
        opcionesRopa.style.display = "block";
        verMasRopaBtn.style.display = "none"; // Oculta el botón "VER MÁS"
    }

    function ocultarOpcionesRopaMostrarVerMas() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        var verMasRopaBtn = document.getElementById("ver-mas-ropa-btn");
        opcionesRopa.style.display = "none";
        verMasRopaBtn.style.display = "block"; // Muestra el botón "VER MÁS"
    }

    document.getElementById("ver-mas-ropa-btn").addEventListener("click", function() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        if (opcionesRopa.style.display === "none" || opcionesRopa.style.display === "") {
            mostrarOpcionesRopaOcultarVerMas(); // Mostrar opciones y ocultar "VER MÁS"
            reiniciarTimerRopa(); // Reiniciar el temporizador
        } else {
            ocultarOpcionesRopaMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS"
        }
    });

    var botonOpcionHombre = document.getElementById("opcion-hombre");
    var botonOpcionMujer = document.getElementById("opcion-mujer");

    botonOpcionHombre.addEventListener("click", function() {
        // Lógica para manejar la selección de "Hombre"
        ocultarOpcionesRopaMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS"
    });

    botonOpcionMujer.addEventListener("click", function() {
        // Lógica para manejar la selección de "Mujer"
        ocultarOpcionesRopaMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS"
    });

    function mostrarOpcionesSuplementosOcultarVerMas() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        var verMasSuplementosBtn = document.getElementById("ver-mas-suplementos-btn");
        opcionesSuplementos.style.display = "block";
        verMasSuplementosBtn.style.display = "none"; // Oculta el botón "VER MÁS"
    }

    function ocultarOpcionesSuplementosMostrarVerMas() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        var verMasSuplementosBtn = document.getElementById("ver-mas-suplementos-btn");
        opcionesSuplementos.style.display = "none";
        verMasSuplementosBtn.style.display = "block"; // Muestra el botón "VER MÁS"
    }

    document.getElementById("ver-mas-suplementos-btn").addEventListener("click", function() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        if (opcionesSuplementos.style.display === "none" || opcionesSuplementos.style.display === "") {
            mostrarOpcionesSuplementosOcultarVerMas(); // Mostrar opciones y ocultar "VER MÁS"
            reiniciarTimerSuplementos(); // Reiniciar el temporizador
        } else {
            ocultarOpcionesSuplementosMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS"
        }
    });

    var tiempoLimiteRopa = 5000; // 5 segundos
    var timerRopa;

    function reiniciarTimerRopa() {
        clearTimeout(timerRopa); // Reiniciar el temporizador
        timerRopa = setTimeout(function() {
            ocultarOpcionesRopaMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS" después de un tiempo
        }, tiempoLimiteRopa);
    }

    var tiempoLimiteSuplementos = 5000; // 5 segundos
    var timerSuplementos;

    function reiniciarTimerSuplementos() {
        clearTimeout(timerSuplementos); // Reiniciar el temporizador
        timerSuplementos = setTimeout(function() {
            ocultarOpcionesSuplementosMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS" después de un tiempo
        }, tiempoLimiteSuplementos);
    }

    document.getElementById("ver-mas-ropa-btn").addEventListener("click", reiniciarTimerRopa);
    document.getElementById("ver-mas-suplementos-btn").addEventListener("click", reiniciarTimerSuplementos);

    function mostrarProductos(contenedorId, categoria) {
        var contenedorProductos = document.getElementById(contenedorId);
        var productosCategoria = productos.filter(function(producto) {
            return producto.categoria === categoria;
        });

        var productosMostrados = productosCategoria.slice(0, 4);

        productosMostrados.forEach(function(producto) {
            var productoDiv = document.createElement("div");
            productoDiv.className = "producto";

            var imagen = document.createElement("img");
            imagen.src = producto.imagen;
            imagen.alt = producto.nombre;

            var titulo = document.createElement("h3");
            titulo.textContent = producto.nombre;

            var precio = document.createElement("p");
            precio.textContent = producto.precio;

            var botonAgregar = document.createElement("button");
            botonAgregar.textContent = "Agregar al carrito";
            botonAgregar.className = "agregar-carrito";
            botonAgregar.addEventListener("click", function() {
                agregarAlCarrito(producto); // Llama a la función agregarAlCarrito con el producto correspondiente
            });

            productoDiv.appendChild(imagen);
            productoDiv.appendChild(titulo);
            productoDiv.appendChild(precio);
            productoDiv.appendChild(botonAgregar);

            contenedorProductos.appendChild(productoDiv);
        });
    }

    mostrarProductos("ropa-container", "ropa");
    mostrarProductos("suplementos-container", "suplementos");
    mostrarProductos("accesorios-container", "accesorios");

    // Llamar a actualizarCarritoHTML cuando se cargue la página
    actualizarCarritoHTML();
});
