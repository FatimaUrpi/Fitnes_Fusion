
let listPreEntrenoHTML = document.querySelector('.listPreEntreno');

let listPre = [];

const addDataHTMLPreEntreno= () =>{
    listPreEntrenoHTML.innerHTML = '';
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
        })

    }
}
const initAppPreEntreno = () => {
    fetch('JS/Suplementos-PreEntreno/preEntreno.json')
        .then(response => response.json())
        .then(data => {
            listPre = data;
            addDataHTMLPreEntreno();
        })
}
initAppPreEntreno();   