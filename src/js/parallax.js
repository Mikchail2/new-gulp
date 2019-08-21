const block = document.querySelectorAll('.block-img');
// var blockImg = document.querySelector('.block-img');
// var blockImgBottom = blockImg.getBoundingClientRect().bottom;
// var blockImgHeight = blockImg.clientHeight;
var blockImgBottom;
var titleTop;
var blockImgTop;
var titlePositionTop;

var arrBlockImgBottom = []; //массив для значение от начала страницы до низа блока
var arrTitleTop = [];//массив для значение от начала страницы до верха заголовка
var arrTitlePositionTop = [];//массив для значение позиций title style.top
var arrBlockImgTop = [];//массив для значение от начала страницы до вверха блока
block.forEach((title, index) => {
  blockImgBottom = title.getBoundingClientRect().bottom;
  blockImgTop = title.getBoundingClientRect().top;
  titleTop = title.querySelector('.block-img__title').getBoundingClientRect().top;
  titlePositionTop = getComputedStyle(title.querySelector('.block-img__title')).top;
  // blockImgHeight = title.clientHeight;

  arrTitleTop.push(titleTop);
  arrBlockImgBottom.push(blockImgBottom);
  arrTitlePositionTop.push(titlePositionTop);
  arrBlockImgTop.push(blockImgTop)
});

window.addEventListener('scroll', function (e) {

  const scroll = window.pageYOffset;
  block.forEach((title, index) => {
    if (arrBlockImgTop[index]-100 < scroll && arrBlockImgBottom[index]-100 > scroll) {
      var blockImgHeight = title.clientHeight;
      var titleC = (scroll - arrBlockImgTop[index])+100;
      title.querySelector('.block-img__title').style.top = `${parseInt(arrTitlePositionTop[index])-titleC}px`;
    }
  });
});

// внизу код незадействован
// function scrolling(e) {
//
//   containers.forEach(listItem => {
//     if (isPartiallyVisible(listItem)) {
//
//     } else {
//       listItem.classList.remove("active");
//     }
//   })
// }


function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return ((top + height >= 0) && (height + document.documentElement.scrollHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= document.documentElement.scrollHeight));
}
