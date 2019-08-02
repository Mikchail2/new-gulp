window.onload = function() {
function srting(str){
  // var arr = str.split('');
  var result = '';
  for(var i = 0;i<str.length;i++){
    const shouldBeBig = ( str[i-2] === '.');
    result += shouldBeBig ? str[i].toUpperCase() : str[i];
  
  }
  console.log(result)

}
srting('Саша купил машину. он использует ее каждый день. саша очень рад своей покупке.')



  class Shop{
    constructor(name){
      this.name = name ;
      this.array = [];
      this.fruit = null;
      console.log(this.array)
  }
    add(cost,product){
        this.obj = {
          cost,
          product
        } 
        this.array.push(this.obj);
    }
    get(){
      return this.array.map(item =>{
        return  item.cost + ' ' + item.product;
       });
    // return this.array
    }
  }
  let arr = new Shop('fruit');
  arr.add(112,'apple')
  arr.add(233,'strew')
  arr.add(566,'jery')
  arr.add(23,'melon')
// console.log(arr.get())
  const addshop = document.querySelector('.addshop');
  const inputCost = document.querySelector('.input-shop');
  const look = document.querySelector('.look');
  const inputProduct = document.querySelector('.input-add-product');
  look.append(arr.get())
  addshop.addEventListener('click',function(event){
    event.preventDefault();
    arr.add(inputCost.value,inputProduct.value);
    look.innerHTML = '';
    look.append(arr.get())
  })
};

// **********)  Написать скрипт, который создаст объект магазин, который будет иметь поля: имя и  продукты, также написать функцию поиска в магазине по цене, функцию поиска по названию, функцию добавления нового продукта в конец списка, функцию удаления продукта по номеру в списке (нумерация идет с нуля), функцию изменения цены товара по его номеру, функцию вывода всех товаров, функция вывода всего магазина в консоль.

// this.table = document.createElement('table');
// this.tr = document.createElement('tr')
// this.td1 = document.createElement('td');
// this.td2 = document.createElement('td');