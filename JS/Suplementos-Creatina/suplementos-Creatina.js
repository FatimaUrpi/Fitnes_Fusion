
let listCreatineHTML = document.querySelector('.listCreatine');

let listCreatine = [];

const addDataHTMLCreatine = () =>{
    listCreatineHTML.innerHTML = '';
    const tipos = ['Creatina'];
    tipos.forEach(tipo => {
    const productosTipo = listCreatine.filter(producto => producto.tipo === tipo);
    if(listCreatine.length > 0){
        listCreatine.forEach(creatinas =>{
            let newCreatine = document.createElement('div');
            newCreatine.classList.add('item');
            newCreatine.innerHTML =`
            <img src="${creatinas.image}" alt="">
            <h2>${creatinas.name}</h2>
            <div class="price">S/.${creatinas.price}</div>
            <button class="addCard">Comprar</button>`;
            listCreatineHTML.appendChild(newCreatine);
        });
    }
});
}
const initAppCreatine = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listCreatine = data.filter(producto => producto.categoria === "Suplementos" && producto.tipo === "Creatina");
            addDataHTMLCreatine();
        })
}
initAppCreatine();   