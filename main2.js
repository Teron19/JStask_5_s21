;
(() => {
    'use strict'

    const btn = document.getElementById("play");
    
    const typeMethod = document.getElementById("type-selector"), //выбранний метод
          amountImage = document.getElementById("line-selector"); //количество картинок    
    
    const firstBlock = document.querySelector('#first-line'),
          secondBlock = document.querySelector('#second-line'),
          thirdBlock = document.querySelector('#third-line'),
       
    const boxSelect = document.querySelector('first-groupe'),
          buildGallery =  document.querySelector('second-group'),
          createElementGallery =  document.querySelector('third-group');

        
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