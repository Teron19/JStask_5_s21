;
(() => {
    'use strict'

    const btn = document.getElementById("play"),
        firstBlock = document.querySelector('#first-line'),
        secondBlock = document.querySelector('#second-line'),
        boxSelect = '',
        buildGallery = '';
        
    function selectBox() {

    }

    function buildingGallery() {

    }

    function init() {
        // сначала снимаете значение с селектбокса
        selectBox(); // document.getElementById("").value
        buildingGallery(); // определяете какой способ построения галлереи надо использовать
        // запускаете необходимую логику
    }
    btn.addEventListener("click", init);
})();