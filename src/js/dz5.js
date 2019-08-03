// if (location.pathname === '/js.html') {


class Shop {
  obj;

  constructor(name) {
    this.name = name;
    this.array = [];
  }

  add(cost, product) {
    if (cost === '' || product === '') {
      return
    }
    this.obj = {
      cost,
      product
    };
    this.array.push(this.obj);
    delete this.obj;
  }

  find(element) {
    return this.array.find((elements) => {
      if (parseInt(element) === elements.cost) {
        console.log(elements)
        return elements
      } else if (element === elements.product) {
        console.log(elements)
        return elements
      } else if (parseInt(element) === elements.id) {
        console.log(elements)
        return elements
      } else {
        return null
      }
    })
  }

  get() {
    let i = 0;
    return this.array
      .map(item => {
        return {
          cost: item.cost,
          product: item.product,
          id: i++
        };
      });
  }

  set(number, cost) {
    this.array[number].cost = cost
  }

  delete(number) {
    if (number === '') {
      console.log(number)
      return false
    } else {
       console.log(number)
      this.array.splice(parseInt(number), 1);
    }

  }
}

let shop = new Shop('fruit');
shop.add(20, 'яблоки');
shop.add(23, 'апельсины');
shop.add(223, 'грушы');



const addshop = document.querySelector('.addshop');
const shopWrapper = document.querySelector('.shop');
const inputCost = document.querySelector('.input-shop');
const pageTable = document.querySelector('.page-table tbody');
const inputProduct = document.querySelector('.input-add-product');

var tableAppendProduct = function (cb) {
  pageTable.innerHTML = '';
  for (var i = 0; i < cb.length; i++) {

    let tableRow = document.createElement('tr');
    let tableDataCost = document.createElement('td');
    let tableDataProduct = document.createElement('td');
    let tableDataId = document.createElement('td');

    tableDataCost.appendChild(document.createTextNode(cb[i].cost));
    tableDataProduct.appendChild(document.createTextNode(cb[i].product));
    tableDataId.appendChild(document.createTextNode(cb[i].id));
    tableRow.appendChild(tableDataId)
    tableRow.appendChild(tableDataCost)
    tableRow.appendChild(tableDataProduct)
    pageTable.appendChild(tableRow);
  }
};
var inputСheckForm = function(a, b = '1'){
  if (a === '' && b === '') {
    return false
  } else {
    return true
  }
};
shopWrapper.addEventListener('click', function (event) {
  var target = event.target;
  event.preventDefault();
  if (target.matches('.addshop')) {
      inputСheckForm(target.parentNode[0],target.parentNode[1]);

    shop.add(target.parentNode[1].value,target.parentNode[0].value);
    target.parentNode[0] = '';
    target.parentNode[1] = '';
  }
   if (target.matches('.deleteshop')) {
      inputСheckForm(target.parentNode[0].value);
      shop.delete(target.parentNode[0].value);
   }
   if (target.matches('.findshop')) {
      inputСheckForm(target.parentNode[0].value);
      shop.find(target.parentNode[0].value);
   }
  if (target.matches('.costshop')) {
      inputСheckForm(target.parentNode[0].value,target.parentNode[1].value);
      shop.set(parseInt(target.parentNode[0].value),parseInt(target.parentNode[1].value));
   }
  tableAppendProduct.call(shop, shop.get());
});
tableAppendProduct.call(shop, shop.get());


var iterateTable = function (pageTable) {
  var rows = [];
  for (var i = pageTable.children.length - 1; i >= 0; i--) {
    var child = pageTable.removeChild(pageTable.children[i]);
    rows.push(child);
  }
  return rows;
};
var appendTable = function (rows) {
  Array.prototype.forEach.call(rows, item => {
    pageTable.appendChild(item);
  });
};

var sortTable = function (number, rows) {
  if (Number.isInteger(number)) {
    rows.sort(function (a, b) {
      return parseInt(a.firstChild.innerHTML) - parseInt(b.firstChild.innerHTML);
    });
  } else {
    rows.sort(function (a, b) {
      return a.lastChild.innerHTML - b.lastChild.innerHTML;
    });
  }

};
pageTable.addEventListener('click', function ({target}) {
  var rows;
  if (target.tagName === "TD") {
    if (Number.isInteger(parseInt(target.innerHTML))) {
      rows = iterateTable(pageTable);
      sortTable(parseInt(target.innerHTML), rows);
      appendTable(rows);
    } else {
      rows = iterateTable(pageTable);
      sortTable(target.innerHTML, rows);
      appendTable(rows);
    }
  }
});


// **********)  Написать скрипт, который создаст объект магазин,
// который будет иметь поля: имя и  продукты, также написать
// функцию поиска в магазине по цене, функцию поиска
// по названию, функцию добавления нового продукта в конец
// списка, функцию удаления продукта по номеру в списке (нумерация идет с нуля), функцию изменения цены товара
// по его номеру, функцию вывода всех товаров, функция вывода всего магазина в консоль.


