if (location.pathname === '/jsdz.html') {

  function charCampare(a, b) {
    if (a > b) {
      console.log(b)
    } else {
      console.log(a)
    }
  }

  function numberCampare(){
    var a = prompt('введи первое число');
    var b = prompt('введи первое число');
     if (a > b) {
      console.log(a)
    } else {
      console.log(b)
    }
  }
  var obj = {
    a: 'a',
    b: "f"
  };
  var array =['a','b'];

  function f() {
     console.log("'1' == 1 не строгое сравнение-->" );
    console.log(1 == '1')
   console.log("'1' === 1 строгое сравнение-->" );
    console.log(1 === '1');
    console.log('в js всё объекты ,ладно окей ,а если мне нужно получить массив и перебрать его .array это созданый массив, использую typeof =>')
    console.log(typeof array);
    console.log('object? ахуенно , но мне нужен массив');
    console.log('и придеться использовать Array.isArray() =>')
    console.log(Array.isArray(array))


  }
f()
  console.log('запуск функции charCampare("a","b") -->')
  charCampare('a','b');
  console.log('запусти функцию numberCampare() ,без параметров');

  function srting(str) {
    // var arr = str.split('');
    console.log(str.indexOf('.'))
    var result = '';
    for (var i = 0; i < str.length; i++) {
      const shouldBeBig = (str[i - 2] === '.');
      result += shouldBeBig ? str[i].toUpperCase() : str[i];

    }
    console.log(result)

  }
console.log(" srting('Саша купил машину. он использует ее каждый день. саша очень рад своей покупке.') =>")
  srting('Саша купил машину. он использует ее каждый день. саша очень рад своей покупке.')
}
