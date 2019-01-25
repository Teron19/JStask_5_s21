(function () {
    'use strict'
    let btn = document.getElementById("play"),
        firstBlock = document.querySelector('#first-line'),
        secondBlock = document.querySelector('#second-line'),
        thirdBlock = document.querySelector('#third-line');

        /*firstGroup =  document.querySelector('.first-group').classList.add("hide");
        secondGroup = document.querySelector('.second-group').classList.add("hide");
        document.querySelector('.third-group').classList.add("hide");*/

        let firstGroup,
            secondGroup,
            thirdGroup;

        let el = document.querySelector('#el');
            el.classList.add('hide');
        let el2 = document.querySelector('#el2');
            el2.classList.add('hide');
        let el3 = document.querySelector('#el3');
            el3.classList.add('hide');

    let copyDate; // для создания копии
    let newDate = []; //для испольвозания метода forEach чтоб записать сюда изменённые значения
    let typeMethod,
        amountImage;


    copyDate = data.slice();
    copyDate = formatData(copyDate);

    function formatDate(arr) {
        arr.forEach(el => {
            newDate.push({
                url: transformUrl(el.url),
                name: transformName(el.name),
                description: transformDescription(el.description),
                date: transformDate(el.date)
            })
            return newDate;
        })
    }

    function transformUrl(urlImg) {
        return (urlImg.substr(0, 6)) == 'http://' 
        ? urlImg 
        : `http://${urlImg}`;
        /*return urlImg.startsWith('http://' 
        ? urlImg;
        : 'http://' + urlImg;
        )*/
    }

    function transformName(elemName) {
        return elemName.slice(0).toUpperCase() + elemName.slice(1).toLowerCase();
    }

    function transformDescription(elemDescript) {
        return (elemDescript.lenght > 15) ?
            `${elemDescript.substt(0, 15)}...` :
            `${elemDescript}`;
    }

    function transformDate(elemDateMillisec) {
        return moment(elemDateMillisec).format('YYYY/MM/DD/ HH:mm');
    }

    //---------------StartCode-------------
    function selectBox() {
        typeMethod = document.getElementById("type-selector").value; //выбранний метод
        amountImage = document.getElementById("line-selector").value; //количество картинок
    }

    function buildingGallery() {
        switch (amountImage) {
            case '0':
                newDate.slice(0);
                break;
            case '1':
                newDate.slice(0, 3);
                break;
            case '2':
                newDate.slice(3, 6);
                break;
        }
        switch (typeMethod) {
            case '1':
                getGalleryByReplace();
                firstGroup =  document.querySelector('.first-group').classList.add("show");
                // firstGroup = document.querySelector('#el');
                //  el.classList.add('show');
                break;
            case '2':
                getGalleryByString();
                secondGroup = document.querySelector('.second-group').classList.add("show");
                // firstGroup = document.querySelector('#el2');
                // el2.classList.add('show');
                break;
            case '3':
                galleryByCreateElement();
                 thirdGroup = document.querySelector('.third-group').classList.add("hide")
                // thirdGroup = document.querySelector('#el3');
                //  el3.classList.add('show');
                break;
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
        newDate.forEach(item => {
            resultHTML += replaceItemTemplate // += прошлись по масиву даннх и записали результат в resultHTML и так каждій раз. В resultHTML накапливаем результт
                .replace(/\$name/gi, item.name)
                .replace("$url", item.url)
                .replace("$description", item.description)
                .replace("$date", item.date);
        })
        firstBlock.innerHTML = resultHTML; //вывод результата
    }

    function getGalleryByString() {
        // пример построения галлереи с помощю шаблонных строк.
        let secondItemTemplate = ''; // создаем для накапливания результата. 
        newDate.forEach(item => { // проходимся методом forEach до конца массива обектов newDate и на каждой итерации добавляем результат в переменную secondItemTemplate.
            secondItemTemplate += `<div class="col-sm-3 col-xs-6">
               <img src="${item.url}" alt="${item.name}" class="img-thumbnail">
               <div class="info-wrapper">
                   <div class="text-muted">${item.name}</div>
                   <div class="text-muted top-padding">${item.description}</div>
                   <div class="text-muted">${item.date}</div>
               </div>
               </div>`;
        })
        secondBlock.innerHTML = secondItemTemplate; //выводим ныкопленные с secondItemTemplate данные в secondBlock = document.querySelector('#second-line'),
    }

    function galleryByCreateElement() {
        //const element = document.querySelector('#third-line');
        let resultElement = newDate.forEach(item => {
            let = divCol = document.createElement('div');
                img = document.createElement('img');
                img.classlist.add('img-thumbnail')
                img.src = `${item.url}`; // ?

                divWrapper = document.createElement('div');
                divWrapper.classlist.add('info-wrapper');

                divName = document.createElement('div');
                divNAme.classList.add('text-muted');
                texName = document.createTextNode(`${item.name}`);

                divDescript = document.createElement('div');
                divDescript.classList.add('text-muted', 'top-padding');
                textDescript = document.createTextNode(`${item.description}`);

                divDate = document.createElement('div');
                divDate.classList.add('text-muted');
                textDate = document.createTextNode(`${item.date}`);

                // добавялем как дочерний елемент const element = document.querySelector('#third-line'); 
                //ДОБАВЛЯЕТСЯ ДОЧЕРНИЙ В КОНЕЦ РОДИТЕЛЬСКОГО 
                divCol.appendChild(divCol);
                img.appendChild(img);

                divWrapper.appendChild(divWrapper);

                divName.appendChild(divName);
                textName.appendChild(textName);

                divDescript.appendChild(divDescript);
                textDescript.appendChild(textDescript);

                divDate.appendChild(divDate);
                textDate.appendChild(textDate);
        })
        thirdBlock.innerHTML = resultElement;
    }

    function init() {
        // сначала снимаете значение с селектбокса
        selectBox(); // document.getElementById("").value
        buildingGallery(); // определяете какой способ построения галлереи надо использовать
        // запускаете необходимую логику
    }
    btn.addEventListener("click", init);
})()