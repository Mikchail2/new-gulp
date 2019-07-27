if (location.pathname === '/js.html') {

  var textDiv = document.querySelector('.text'),
    forDiv = document.querySelector('.for'),
    whileDiv = document.querySelector('.while'),
    regName = /^[a-zа-яё]+$/i,
    regAge = /^[0-9]{1,2}$/i,
    buttonFor = document.querySelector('.button-for'),
    buttonWhile = document.querySelector('.button-while'),
    buttonObj = document.querySelector('.button-obj');
  buttonObj.addEventListener('click', function () {
    var youName = prompt('Как вас зовут?'),
      youAge = parseInt(prompt('Сколько вам лет?'));
    while (true) {
      if (youName === '' || youName === null) {
        alert('меня хуй наёбешь введи имя!');
        youName = prompt('Как вас зовут?');
      }
      if (!regName.test(youName)) {
        alert('введи своё имя !! твоё имя состоит из цифр?!');
        youName = prompt('Как вас зовут?');
      }
      if (youName !== '') {
        if (youName !== null) {
          if (regName.test(youName)) {
            break;
          }

        }
      }
    }

    while (true) {
      if (youAge === '' || youAge === null) {
        alert('меня хуй наёбешь введи возраст!');
        youAge = parseInt(prompt('Сколько вам лет?'));
      }
      if (!regAge.test(youAge)) {
        alert('введи свой возраст !!');
        youAge = parseInt(prompt('Сколько вам лет?'));
      }
      if (youAge !== '') {
        if (youAge !== null) {
          if (regAge.test(youAge)) {
            break;
          }
        }
      }
    }

    var data = {
      name: youName,
      age: youAge
    };

    function text(obj) {
      var p = document.createElement('p'),
        age = obj.age <= 24 ? `ты ёще малой
     так как тебе всего ${obj.age} лет` : `Смотрю к нам пожаловал
      огромный дядька c возрастом в ${obj.age} лет`,
        textHtml = `Здорова ${obj.name}! ${age}`;
      p.innerHTML = textHtml;
      textDiv.appendChild(p);
    }

    text(data);
  });


  buttonFor.addEventListener('click', function () {
    var arr = [];
    for (var i = 0; i < 5; i++) {
      var prom = prompt();
      arr.push(prom);
    }
    forDiv.appendChild(document.createTextNode(arr));
  })
  buttonWhile.addEventListener('click', function () {
    var arr = [];
    var i = 0;
    while (true) {
      if (i == 5) {
        break;
      }
      var prom = prompt();
      arr.push(prom);
      i++;
    }
    whileDiv.appendChild(document.createTextNode(arr));
  })
}

// function createTree(container, obj) {
//    container.appendChild(createTreeDom(obj));
//  }
// function createTreeDom(obj) {
//   // если нет детей, то рекурсивный вызов ничего не возвращает
//   // так что вложенный UL не будет создан
//   if (isObjectEmpty(obj)) return;
//
//   var ul = document.createElement('ul');
//
//   for (var key in obj) {
//     var li = document.createElement('li');
//     li.innerHTML = key;
//
//     var childrenUl = createTreeDom(obj[key]);
//     if (childrenUl) li.appendChild(childrenUl);
//
//     ul.appendChild(li);
//   }
//
//   return ul;
// }
