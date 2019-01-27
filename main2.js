;
(() => {
    'use strict'

    const btn = document.getElementById("play");
    
    const typeMethod = document.getElementById("type-selector"), //выбранний метод selectBox
          amountImage = document.getElementById("line-selector"); //количество картинок    
    
    const firstBlock = document.querySelector('#first-line'), // для вывода информации в данный блок
          secondBlock = document.querySelector('#second-line'),
          thirdBlock = document.querySelector('#third-line');
       
    const firstGroupe = document.querySelector('#first-groupe'),
          secondGroupe =  document.querySelector('#second-group'),
          thirdGroupe =  document.querySelector('#third-group');
    
    function run() {
        const preparedData = fetchData();
        const slicedData = sliceData(preparedData);

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

        function sliceData(preparedData) {
            switch (amountImage.value) {
                case '0':
                    getGalleryByReplace();
                    return preparedData.slice(0);
                case '1':
                getGalleryByString();
                    return preparedData.slice(0, 4);
                case '2':
                    galleryByCreateElement();
                    return preparedData.slice(0, 7);
                default: 
                    alert('Выбирете количество картинок');
            }
        }

    function fetchData() {
        let newDate = [];
        data.forEach(el =>{
            newDate.push({
                url: transformURL(el.url),
                name: transformName(el.name),
                description: transformDescript(el.description),
                date: transformDate(el.date)
            })
            return newDate;
        })
    
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

    function getGalleryByReplace() {
        let resultHTML = ''; // для накопления результата 
        const replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
    <img src="$url" alt="$name" class="img-thumbnail">\
    <div class="info-wrapper">\
        <div class="text-muted">$name</div>\
        <div class="text-muted top-padding">$description</div>\
        <div class="text-muted">$date</div>\
    </div>\
    </div>';
        preparedData.forEach(item => {
            resultHTML += replaceItemTemplate // += прошлись по масиву даннх и записали результат в resultHTML и так каждій раз. В resultHTML накапливаем результт
                .replace(item.name, /\$name/gi)
                .replace(item.url, "$url")
                .replace(item.description ,"$description" )
                .replace(item.date, "$date");
        })
        firstBlock.innerHTML = resultHTML; //вывод результата
    }

    function getGalleryByString() {
        secondItemTemplate = '';
        preparedData.forEach(item => {
            secondItemTemplate += `<div class="col-sm-3 col-xs-6">
            <img src="${item.url}" alt="${item.name}" class="img-thumbnail">
            <div class="info-wrapper">
                <div class="text-muted">${item.name}</div>
                <div class="text-muted top-padding">${item.description}</div>
                <div class="text-muted">${item.date}</div>
            </div>
            </div>`;
        })
        secondBlock.innerHTML = secondItemTemplate;
    }

    function galleryByCreateElement() {

    }



    btn.addEventListener("click", run);
})();