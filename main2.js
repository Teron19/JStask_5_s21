;
(() => {
    'use strict'

    const btn = document.getElementById("play");
    
    const typeMethod = document.getElementById("type-selector"), //выбранний метод selectBox
          amountImage = document.getElementById("line-selector"); //количество картинок    
    
    const firstBlock = document.querySelector('#first-line'),
          secondBlock = document.querySelector('#second-line'),
          thirdBlock = document.querySelector('#third-line');
       
    const firstGroupe = document.querySelector('#first-groupe'),
          secondGroupe =  document.querySelector('#second-group'),
          thirdGroupe =  document.querySelector('#third-group');
    
    function run() {
        switch (typeMethod.value) {
            case '1':
                firstGroupe.classList.add('show');
                secondGroupe.classList.add('hide');
                thirdGroupe.classList.add('hide');               
                break;
            case '2':
                secondGroupe.classList.add('show');
                thirdGroupe.classList.add('hide');
                firstGroupe.classList.add('hide');
                break;
            case '3':
                thirdGroupe.classList.add('show');
                secondGroupe.classList.add('hide');
                firstGroupe.classList.add('hide');
                break;
            default:
                alert('Выберите вариант');
                break;
        }
    }

    const preparedData = fetchData();
    let newDate = [];

    function fetchData() {
        data.forEach(el =>{
            newDate.push({
                url: transformURL(el.url),
                name: transformName(el.name),
                description: transformDescript(el.description),
                date: transformDate(el.date)
            })
            return newDate;
        )}
    
        function transformURL(url){
            return(url.substr(0, 6) == 'http://')
                ? url
                : 'http://' + url;
        }

        function transformName(name) {
            return name.slice(0).toUpperCase() + name.slice(1).toLowerCase();
        }

        function transformDescript(text) {
            return (text.length > 15) 
                    ? text.substr(0, 15) + '...'
                    : text;
        }

        function transformDate(milliseconds) {
            return moment(milliseconds).format('YYYY/MM/DD HH:mm');
        }
    }



    btn.addEventListener("click", run);
})();