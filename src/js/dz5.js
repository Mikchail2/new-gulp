// if (location.pathname === '/js.html') {



  class Shop {
    obj;

    constructor(name) {
      this.name = name;
      this.array = [];
    }

    add(cost, product) {
      this.obj = {
        cost,
        product
      };
      this.array.push(this.obj);
    }

    find(element) {
       return this.array.find((elements) => {
        if (element === elements.cost) {
          return elements.cost
        } else if (element === elements.product) {
          return elements.product
        } else {
           return null
        }

      })

    }

    get() {
      // console.log(this.array);
      return this.array
        .map(item => {
          return {
            cost: item.cost,
            product: item.product
          };
        });
    }

    set(number, cost) {
      this.array[number].cost = cost
    }
    delete(number){

    }
  }

  let shop = new Shop('fruit');
  // arr.add(112,'apple')
  // arr.add(233,'strew')
  shop.add(20, 'яблоки');
  shop.add(23, 'апельсины');
  shop.add(223, 'помидоры');
  console.log(shop.get())
  shop.set(1, 50);
  shop.get();
  shop.find(2000)
  shop.find(223)
  shop.find('помидоры')





  const addshop = document.querySelector('.addshop');
  const inputCost = document.querySelector('.input-shop');
  const pageTable = document.querySelector('.page-table');
  const inputProduct = document.querySelector('.input-add-product');
  function tableWrapper(cb) {
    // let table = document.createElement('table');
    for (var i = 0; i < cb.length; i++) {
      let tableRow = document.createElement('tr');
      let tableDataCost = document.createElement('td');
      let tableDataProduct = document.createElement('td');
      tableDataCost.appendChild(document.createTextNode(cb[i].cost));
      tableDataProduct.appendChild(document.createTextNode(cb[i].product));
      tableRow.appendChild(tableDataCost)
      tableRow.appendChild(tableDataProduct)
      pageTable.appendChild(tableRow);
    }
    // console.log(shop.get());
  }

  // console.log(shop.get());
  addshop.addEventListener('click', function (event) {
    event.preventDefault();
    shop.add(inputProduct.value, inputCost.value);
    pageTable.innerHTML = '';
    pageTable.append(tableWrapper.call(shop, shop.get()));
  });
  // tableWrapper.call(shop, shop.get())
  pageTable.addEventListener('click', function ({target}) {
    if (target.tagName === "TD") {
      var rows = [];
      if (Number.isInteger(parseInt(target.innerHTML))) {
        Array.prototype.forEach.call(pageTable.children, item => {
          var child = pageTable.removeChild(item)
          rows.push(child)
        });
        rows.sort(function (a, b) {
          return parseInt(a.firstChild.innerHTML) - parseInt(b.firstChild.innerHTML);
        });
        Array.prototype.forEach.call(rows, item => {
          pageTable.appendChild(item);
        });
      } else {
        Array.prototype.forEach.call(pageTable.children, item => {
          var child = pageTable.removeChild(item);
          rows.push(child)
        });
        rows.sort(function (a, b) {
          return a.lastChild.innerHTML - b.lastChild.innerHTML;
        });
        Array.prototype.forEach.call(rows, item => {
          pageTable.appendChild(item);
        });
      }

    }
  });


// **********)  Написать скрипт, который создаст объект магазин,
// который будет иметь поля: имя и  продукты, также написать
// функцию поиска в магазине по цене, функцию поиска
// по названию, функцию добавления нового продукта в конец
// списка, функцию удаления продукта по номеру в списке (нумерация идет с нуля), функцию изменения цены товара
// по его номеру, функцию вывода всех товаров, функция вывода всего магазина в консоль.


