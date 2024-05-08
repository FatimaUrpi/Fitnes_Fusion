
let listVitaminaHTML = document.querySelector('.listVitamina');

let listVitamina = [];

const addDataHTMLVitamina= () =>{
    listVitaminaHTML.innerHTML = '';
    const tipos = ['Vitamina'];
    tipos.forEach(tipo => {
    const productosTipo = listVitamina.filter(producto => producto.tipo === tipo);
    if(listVitamina.length > 0){
        listVitamina.forEach(vitaminas =>{
            let newVitamina = document.createElement('div');
            newVitamina.classList.add('item');
            newVitamina.innerHTML =`
            <img src="${vitaminas.image}" alt="">
            <h2>${vitaminas.name}</h2>
            <div class="price">S/.${vitaminas.price}</div>
            <button class="addCard">Comprar</button>`;
            listVitaminaHTML.appendChild(newVitamina);
        });
    }
});
}
const initAppVitamina = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listVitamina = data.filter(producto => producto.categoria === "Suplementos" && producto.tipo === "Vitamina");
            addDataHTMLVitamina();
        })
}
initAppVitamina();   