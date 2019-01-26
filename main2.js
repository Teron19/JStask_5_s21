;
(() => {
    'use strict'

    let btn = document.getElementById("play"),
        firstBlock = document.querySelector('#first-line'),
        secondBlock = document.querySelector('#second-line'),
        thirdBlock = document.querySelector('#third-line');

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