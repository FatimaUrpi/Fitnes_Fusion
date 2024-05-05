// Definir productos en un ámbito global
var productos = [
    { imagen: "./img/producto1.jpg", nombre: "POLO URBANO KOSMISK DROMMER", precio: "S/. 119.90 PEN" },
    { imagen: "./img/producto2.jpg", nombre: "POLO URO KOSMISK DROMMER", precio: "S/. 119.90 PEN" },
    { imagen: "./img/producto3.jpg", nombre: "POLO ALLO KOSMISK DROMMER", precio: "S/. 119.90 PEN" },
    { imagen: "./img/producto4.jpg", nombre: "POLO BANO KOSMISK DROMMER", precio: "S/. 119.90 PEN" },
    { imagen: "./img/producto5.jpg", nombre: "POLO URoO KOSMISK DROMMER", precio: "S/. 119.90 PEN" },
];

document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar las opciones y ocultar el botón "VER MÁS" para ropa deportiva
    function mostrarOpcionesRopaOcultarVerMas() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        var verMasRopaBtn = document.getElementById("ver-mas-ropa-btn");
        opcionesRopa.style.display = "block";
        verMasRopaBtn.style.display = "none"; // Oculta el botón "VER MÁS"
    }

    // Función para ocultar las opciones y mostrar el botón "VER MÁS" para ropa deportiva
    function ocultarOpcionesRopaMostrarVerMas() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        var verMasRopaBtn = document.getElementById("ver-mas-ropa-btn");
        opcionesRopa.style.display = "none";
        verMasRopaBtn.style.display = "block"; // Muestra el botón "VER MÁS"
    }

    // Botón "VER MÁS" para ropa deportiva
    document.getElementById("ver-mas-ropa-btn").addEventListener("click", function() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        if (opcionesRopa.style.display === "none" || opcionesRopa.style.display === "") {
            mostrarOpcionesRopaOcultarVerMas(); // Mostrar opciones y ocultar "VER MÁS"
            reiniciarTimerRopa(); // Reiniciar el temporizador
        } else {
            ocultarOpcionesRopaMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS"
        }
    });

    // Selección de los botones de opción para ropa deportiva
    var botonOpcionHombre = document.getElementById("opcion-hombre");
    var botonOpcionMujer = document.getElementById("opcion-mujer");

    // Asignación de evento de clic a cada botón de opción para ropa deportiva
    botonOpcionHombre.addEventListener("click", function() {
        // Lógica para manejar la selección de "Hombre"
        ocultarOpcionesRopaMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS"
    });

    botonOpcionMujer.addEventListener("click", function() {
        // Lógica para manejar la selección de "Mujer"
        ocultarOpcionesRopaMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS"
    });

    // Función para mostrar las opciones y ocultar el botón "VER MÁS" para suplementos
    function mostrarOpcionesSuplementosOcultarVerMas() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        var verMasSuplementosBtn = document.getElementById("ver-mas-suplementos-btn");
        opcionesSuplementos.style.display = "block";
        verMasSuplementosBtn.style.display = "none"; // Oculta el botón "VER MÁS"
    }

    // Función para ocultar las opciones y mostrar el botón "VER MÁS" para suplementos
    function ocultarOpcionesSuplementosMostrarVerMas() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        var verMasSuplementosBtn = document.getElementById("ver-mas-suplementos-btn");
        opcionesSuplementos.style.display = "none";
        verMasSuplementosBtn.style.display = "block"; // Muestra el botón "VER MÁS"
    }

    // Botón "VER MÁS" para suplementos
    document.getElementById("ver-mas-suplementos-btn").addEventListener("click", function() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        if (opcionesSuplementos.style.display === "none" || opcionesSuplementos.style.display === "") {
            mostrarOpcionesSuplementosOcultarVerMas(); // Mostrar opciones y ocultar "VER MÁS"
            reiniciarTimerSuplementos(); // Reiniciar el temporizador
        } else {
            ocultarOpcionesSuplementosMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS"
        }
    });

    // Selección de los botones de opción para suplementos
    var botonOpcionPreEntreno = document.getElementById("opcion-pre-entreno");
    var botonOpcionProteina = document.getElementById("opcion-proteina");
    var botonOpcionVitaminas = document.getElementById("opcion-vitaminas");

   // Asignación de evento de clic a cada botón de opción para ropa deportiva
    botonOpcionHombre.addEventListener("click", function() {
        // Redireccionar a la página correspondiente para hombres
        window.location.href = "https://www.ejemplo.com/hombres";
    });

    botonOpcionMujer.addEventListener("click", function() {
        // Redireccionar a la página correspondiente para mujeres
        window.location.href = "https://www.ejemplo.com/mujeres";
    });

    // Asignación de evento de clic a cada botón de opción para suplementos
    botonOpcionPreEntreno.addEventListener("click", function() {
        // Redireccionar a la página correspondiente para pre-entrenos
        window.location.href = "https://www.ejemplo.com/pre-entreno";
    });

    botonOpcionProteina.addEventListener("click", function() {
        // Redireccionar a la página correspondiente para proteínas
        window.location.href = "https://www.ejemplo.com/proteina";
    });

    botonOpcionVitaminas.addEventListener("click", function() {
        // Redireccionar a la página correspondiente para vitaminas
        window.location.href = "https://www.ejemplo.com/vitaminas";
    });

    // Tiempo para volver a mostrar el botón "VER MÁS" si no se selecciona ninguna opción para ropa deportiva
    var tiempoLimiteRopa = 5000; // 5 segundos
    var timerRopa;

    function reiniciarTimerRopa() {
        clearTimeout(timerRopa); // Reiniciar el temporizador
        timerRopa = setTimeout(function() {
            ocultarOpcionesRopaMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS" después de un tiempo
        }, tiempoLimiteRopa);
    }

    // Tiempo para volver a mostrar el botón "VER MÁS" si no se selecciona ninguna opción para suplementos
    var tiempoLimiteSuplementos = 5000; // 5 segundos
    var timerSuplementos;

    function reiniciarTimerSuplementos() {
        clearTimeout(timerSuplementos); // Reiniciar el temporizador
        timerSuplementos = setTimeout(function() {
            ocultarOpcionesSuplementosMostrarVerMas(); // Ocultar opciones y mostrar "VER MÁS" después de un tiempo
        }, tiempoLimiteSuplementos);
    }

    // Reiniciar el temporizador cada vez que se haga clic en el botón "VER MÁS" para ropa deportiva
    document.getElementById("ver-mas-ropa-btn").addEventListener("click", reiniciarTimerRopa);

    // Reiniciar el temporizador cada vez que se haga clic en el botón "VER MÁS" para suplementos
    document.getElementById("ver-mas-suplementos-btn").addEventListener("click", reiniciarTimerSuplementos);

    // Función para mostrar los productos
    function mostrarProductos() {
        var contenedorProductos = document.getElementById("productos-container");
        // Obtener solo los primeros 4 productos
        var primerosProductos = productos.slice(0, 4);

        primerosProductos.forEach(function(producto) {
            var productoDiv = document.createElement("div");
            productoDiv.className = "producto";

            var imagen = document.createElement("img");
            imagen.src = producto.imagen;
            imagen.alt = producto.nombre;

            var titulo = document.createElement("h3");
            titulo.textContent = producto.nombre;

            var precio = document.createElement("p");
            precio.textContent = producto.precio;

            productoDiv.appendChild(imagen);
            productoDiv.appendChild(titulo);
            productoDiv.appendChild(precio);

            contenedorProductos.appendChild(productoDiv);
        });
    }

    // Llamar a la función para mostrar los productos
    mostrarProductos();
});
