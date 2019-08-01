window.onload = function() {
  class Shop{
    constructor(cost,product){
      this.cost = cost;
      this.product = product;
      this.id =  Date.now();
    }

    add(cost,product){

    }
  }
  var arr = new Shop(12,'apple')
  console.log(arr)
};
