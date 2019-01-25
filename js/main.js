(function () {

    let btn = document.getElementById("play"),
        firstBlock = document.querySelector('#first-line'),
        secondBlock = document.querySelector('#second-line'),
        thirdBlock = document.querySelector('#third-line');

    let copyDate; // для создания копии
    let newDate = []; //для испольвозания метода forEach чтоб записать сюда изменённые значения
    let typeSelector,
        resultHTML,
        lineSelector;


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
        return (urlImg.substr(0, 6)) == 'http://' ?
            urlImg :
            `http://${urlImg}`;
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
                break;
            case '2':
                getGalleryByString();
                break;
            case '3':
                galleryCreateElement();
                break;
        }
    }

    function getGalleryByReplace() {
        const replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
    <img src="$url" alt="$name" class="img-thumbnail">\
    <div class="info-wrapper">\
    <div class="text-muted">$name</div>\
    <div class="text-muted top-padding">$description</div>\
    <div class="text-muted">$date</div>\
    </div>\
    </div>';
        newDate.forEach(item => {
            resultHTML += replaceItemTemplate
                .replace(/\$name/gi, item.name)
                .replace("$url", item.url)
                .replace("$description", item.description)
                .replace("$date", item.date);
        })

        firstBlock.innerHTML = resultHTML;
    }

    function getGalleryByString() {
        // пример построения галлереи с помощю шаблонных строк
        let secondItemTemplate = `<div class="col-sm-3 col-xs-6">\
               <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
               <div class="info-wrapper">\
                   <div class="text-muted">${item.name}</div>\
                   <div class="text-muted top-padding">${item.description}</div>\
                   <div class="text-muted">${item.date}</div>\
               </div>\
               </div>`;
        //secondBlock.innerHTML = secondItemTemplate;
    }

    function getGalleryCreateElement() {


        thirdBlock.innerHTML = resultHTML;
    }

    function init() {
        selectBox();
        buildingGallery();
        // сначала снимаете значение с селектбокса, 
        // document.getElementById("").value

        // определяете какой способ построения галлереи надо использовать
        // запускаете необходимую логику

        // код ниже дан для справки, вам нужно будет использовать тот вариан который вы выбрали в селектбоксе
        // пример построения галлереи с помощю replace
        function getGalleryByReplace() {

        }


        let resultHTML = replaceItemTemplate
            .replace(/\$name/gi, item.name)
            .replace("$url", item.url)
            .replace("$description", item.description)
            .replace("$date", item.date);

        firstBlock.innerHTML = resultHTML;

        // один из примеров как прятать блоки
        document.querySelector('.first-group').classList.add("show");
        document.querySelector('.second-group').classList.add("show");
        document.querySelector('.third-group').classList.add("hide");

    }

    btn.addEventListener("click", init);

})()