;
(() => {
  'use strict'

  const btn = document.getElementById("play");

  const typeMethod = document.getElementById("type-selector"), //выбранний метод selectBox
    amountImage = document.getElementById("line-selector"); //количество картинок    

  const firstBlock = document.querySelector('#first-line'), // для вывода информации в данный блок
    secondBlock = document.querySelector('#second-line'),
    thirdBlock = document.querySelector('#third-line');

  const firstGroupe = document.querySelector('#first-group'),
    secondGroupe = document.querySelector('#second-group'),
    thirdGroupe = document.querySelector('#third-group');

  function run() {
    const preparedData = fetchData();
    const slicedData = sliceData(preparedData);

    switch (typeMethod.value) {
      case '1':
        // в slicedData находится необходимое количество элементов для отображения
        // строим галерею методом replace
        
        renderGalleryByReplace(slicedData);

        // показываем блок с этой галереей  
        firstGroupe.classList.remove('hide');
        secondGroupe.classList.add('hide');
        thirdGroupe.classList.add('hide');
        break;
      case '2':
        renderGalleryByString(slicedData);

        secondGroupe.classList.remove('hide');
        thirdGroupe.classList.add('hide');
        firstGroupe.classList.add('hide');
        break;
      case '3':
        renderByCreateElement(slicedData);

        thirdGroupe.classList.remove('hide');
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
        return preparedData.slice(0);
      case '1':
        return preparedData.slice(0, 3);
      case '2':
        return preparedData.slice(0, 6);
    }
  }

  function fetchData() {
    let newData = [];
    data.forEach(el => {
      newData.push({
        url: transformURL(el.url),
        name: transformName(el.name),
        description: transformDescript(el.description),
        date: transformDate(el.date)
      })
    })
    return newData;

    function transformURL(url) {
      return (url.substr(0, 6) == 'http://') ?
        url :
        'http://' + url;
    }

    function transformName(name) {
      return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
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

  function renderGalleryByReplace(date) {
    let resultHTML = ''; // для накопления результата 
    const replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
    <img src="$url" alt="$name" class="img-thumbnail">\
    <div class="info-wrapper">\
        <div class="text-muted">$name</div>\
        <div class="text-muted top-padding">$description</div>\
        <div class="text-muted">$date</div>\
    </div>\
    </div>';

    date.forEach(item => {
      resultHTML += replaceItemTemplate // += прошлись по масиву даннх и записали результат в resultHTML и так каждій раз. В resultHTML накапливаем результт
        .replace(/\$name/gi, item.name)
        .replace("$url", item.url)
        .replace("$description", item.description)
        .replace("$date", item.date);
    })

    firstBlock.innerHTML = resultHTML; //вывод результата
  }

  function renderGalleryByString(date) {
    let secondItemTemplate = '';
      date.forEach(item => {
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

  function renderByCreateElement(date) {
    let resultElement = '';
    resultElement += date.forEach(item => {
      let  divCol = document.createElement('div'),
      img = document.createElement('img');
      img.classList.add('img-thumbnail');
      //img.setAttribute(`${item.url}`);  // ?
      img.src = `${item.url}`;  // ?

      let divWrapper = document.createElement('div');
      divWrapper.classList.add('info-wrapper');

      let divName = document.createElement('div');
      divName.classList.add('text-muted');
      let textName = document.createTextNode(`${item.name}`);

      let divDescript = document.createElement('div');
      divDescript.classList.add('text-muted', 'top-padding');
      let textDescript = document.createTextNode(`${item.description}`);

      let divDate = document.createElement('div');
      divDate.classList.add('text-muted');
      let textDate = document.createTextNode(`${item.date}`);

      // добавялем как дочерний елемент const element = document.querySelector('#third-line'); 
      //ДОБАВЛЯЕТСЯ ДОЧЕРНИЙ В КОНЕЦ РОДИТЕЛЬСКОГО 
      divCol.appendChild(img);
      //img.appendChild(img);

      divCol.appendChild(divWrapper);

      divWrapper.appendChild(divName);
      divName.appendChild(textName);
      //textName.appendChild(textName);

      divWrapper.appendChild(divDescript);
      divDescript.appendChild(textDescript);

      //textDescript.appendChild(textDescript);

      divWrapper.appendChild(divDate);
      divDate.appendChild(textDate);
      
      //textDate.appendChild(textDate);
    })
    thirdBlock.innerHTML = resultElement;
  }

  btn.addEventListener("click", run);
})();
