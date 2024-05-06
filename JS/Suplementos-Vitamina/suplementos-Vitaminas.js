
let listVitaminaHTML = document.querySelector('.listVitamina');

let listVitamina = [];

const addDataHTMLVitamina= () =>{
    listVitaminaHTML.innerHTML = '';
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
        })

    }
}
const initAppVitamina = () => {
    fetch('JS/Suplementos-Vitamina/vitaminas.json')
        .then(response => response.json())
        .then(data => {
            listVitamina = data;
            addDataHTMLVitamina();
        })
}
initAppVitamina();   