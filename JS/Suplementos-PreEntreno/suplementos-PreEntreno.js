
let listPreEntrenoHTML = document.querySelector('.listPreEntreno');

let listPre = [];

const addDataHTMLPreEntreno= () =>{
    listPreEntrenoHTML.innerHTML = '';
    const tipos = ['Pre-Entreno'];
    tipos.forEach(tipo => {
    const productosTipo = listPre.filter(producto => producto.tipo === tipo);
    if(listPre.length > 0){
        listPre.forEach(pre =>{
            let newPre = document.createElement('div');
            newPre.classList.add('item');
            newPre.innerHTML =`
            <img src="${pre.image}" alt="">
            <h2>${pre.name}</h2>
            <div class="price">S/.${pre.price}</div>
            <button class="addCard">Comprar</button>`;
            listPreEntrenoHTML.appendChild(newPre);
        });
    }
});
}
const initAppPreEntreno = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listPre = data.filter(producto => producto.categoria === "Suplementos" && producto.tipo === "Pre-Entreno");
            addDataHTMLPreEntreno();
        })
}
initAppPreEntreno();   