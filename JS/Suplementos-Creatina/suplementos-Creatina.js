
let listCreatineHTML = document.querySelector('.listCreatine');

let listCreatine = [];

const addDataHTMLCreatine = () =>{
    listCreatineHTML.innerHTML = '';
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
        })

    }
}
const initAppCreatine = () => {
    fetch('JS/Suplementos-Creatina/creatinas.json')
        .then(response => response.json())
        .then(data => {
            listCreatine = data;
            addDataHTMLCreatine();
        })
}
initAppCreatine();   