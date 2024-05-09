let listRopaDeportivaHTML = document.querySelector('.listRopaDeportiva');
let listRopaDeportiva = [];

const addDataHTMLRopaDeportiva = () => {
    listRopaDeportivaHTML.innerHTML = '';
    const tipos = ['polera', 'casaca', 'conjunto'];
    let totalProductosMostrados = 0;
    tipos.forEach(tipo => {
        const productosTipo = listRopaDeportiva.filter(producto => producto.tipo === tipo);
        if (productosTipo.length > 0) {
            const productosMostradosPorTipo = Math.min(2, 4 - totalProductosMostrados);
            productosTipo.slice(0, productosMostradosPorTipo).forEach(producto => {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = `
                <img src="${producto.image}" alt="">
                <h2>${producto.name}</h2>
                <div class="price">S/.${producto.price}</div>
                <button class="addCard">Comprar</button>`;
                listRopaDeportivaHTML.appendChild(newProduct);
                totalProductosMostrados++;
            });
        }
    });
}

const initAppRopaDeportiva = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listRopaDeportiva = data.filter(producto => producto.categoria === "ropa_deportiva");
            addDataHTMLRopaDeportiva();
        })
}
initAppRopaDeportiva();

let listSuplementosHTML = document.querySelector('.listSuplementos');
let listSuplementos = [];

const addDataHTMLSuplementos = () => {
    listSuplementosHTML.innerHTML = '';
    if (listSuplementos.length > 0) {
        listSuplementos.slice(0, 4).forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listSuplementosHTML.appendChild(newProduct);
        });
    }
}

const initAppSuplementos = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listSuplementos = data.filter(product => product.categoria === "Suplementos");
            addDataHTMLSuplementos();
        })
}
initAppSuplementos();

let listAccesoriosHTML = document.querySelector('.listAccesoriosInicio');
let listAccesorios = [];

const addDataHTMLAccesorios = () => {
    listAccesoriosHTML.innerHTML = '';
    if (listAccesorios.length > 0) {
        listAccesorios.slice(0,4).forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">S/.${product.price}</div>
            <button class="addCard">Comprar</button>`;
            listAccesoriosHTML.appendChild(newProduct);
        });
    }
}

const initAppAccesorios = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listAccesorios = data.filter(product => product.categoria === "Accesorios");
            addDataHTMLAccesorios();
        })
}
initAppAccesorios();

document.addEventListener("DOMContentLoaded", function() {
    function mostrarOpcionesRopaOcultarVerMas() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        var verMasRopaBtn = document.getElementById("ver-mas-ropa-btn");
        opcionesRopa.style.display = "block";
        verMasRopaBtn.style.display = "none";
    }

    function ocultarOpcionesRopaMostrarVerMas() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        var verMasRopaBtn = document.getElementById("ver-mas-ropa-btn");
        opcionesRopa.style.display = "none";
        verMasRopaBtn.style.display = "block";
    }

    document.getElementById("ver-mas-ropa-btn").addEventListener("click", function() {
        var opcionesRopa = document.getElementById("opciones-ropa");
        if (opcionesRopa.style.display === "none" || opcionesRopa.style.display === "") {
            mostrarOpcionesRopaOcultarVerMas();
            reiniciarTimerRopa();
        } else {
            ocultarOpcionesRopaMostrarVerMas();
        }
    });

    var botonOpcionHombre = document.getElementById("opcion-hombre");
    var botonOpcionMujer = document.getElementById("opcion-mujer");

    botonOpcionHombre.addEventListener("click", function() {
        ocultarOpcionesRopaMostrarVerMas();
    });

    botonOpcionMujer.addEventListener("click", function() {
        ocultarOpcionesRopaMostrarVerMas();
    });

    function mostrarOpcionesSuplementosOcultarVerMas() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        var verMasSuplementosBtn = document.getElementById("ver-mas-suplementos-btn");
        opcionesSuplementos.style.display = "block";
        verMasSuplementosBtn.style.display = "none";
    }

    function ocultarOpcionesSuplementosMostrarVerMas() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        var verMasSuplementosBtn = document.getElementById("ver-mas-suplementos-btn");
        opcionesSuplementos.style.display = "none";
        verMasSuplementosBtn.style.display = "block";
    }

    document.getElementById("ver-mas-suplementos-btn").addEventListener("click", function() {
        var opcionesSuplementos = document.getElementById("opciones-suplementos");
        if (opcionesSuplementos.style.display === "none" || opcionesSuplementos.style.display === "") {
            mostrarOpcionesSuplementosOcultarVerMas();
            reiniciarTimerSuplementos();
        } else {
            ocultarOpcionesSuplementosMostrarVerMas();
        }
    });

    var tiempoLimiteRopa = 5000; 
    var timerRopa;

    function reiniciarTimerRopa() {
        clearTimeout(timerRopa); 
        timerRopa = setTimeout(function() {
            ocultarOpcionesRopaMostrarVerMas();
        }, tiempoLimiteRopa);
    }

    var tiempoLimiteSuplementos = 5000; 
    var timerSuplementos;

    function reiniciarTimerSuplementos() {
        clearTimeout(timerSuplementos); 
        timerSuplementos = setTimeout(function() {
            ocultarOpcionesSuplementosMostrarVerMas();
        }, tiempoLimiteSuplementos);
    }
    document.getElementById("ver-mas-ropa-btn").addEventListener("click", reiniciarTimerRopa);
    document.getElementById("ver-mas-suplementos-btn").addEventListener("click", reiniciarTimerSuplementos);
});























