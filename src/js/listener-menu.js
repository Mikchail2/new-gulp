new ContextMenu({
    menu: ".list",
    mainBlock: 'body'
}).init();

function ListenerMenu(obj) {
    this.block = obj.block || document.querySelector('body');
    this.state = 0;
    this.square = null;
    this.triangle = null;
    this.coordsRect = null;
    this.handlerTriagle = (e) =>{

        this.triangle.style.left = e.clientX -100   + 'px';
        this.triangle.style.top = e.clientY - 100 + 'px';

        if(this.coordsRect.top - 100 > this.triangle.getBoundingClientRect().top){
            this.triangle.style.top = this.coordsRect.top - 100 + 'px';

        }
        if(this.coordsRect.top + 100 < this.triangle.getBoundingClientRect().top){
            this.triangle.style.top =this.coordsRect.top + 100 + 'px';
        }
        if(this.coordsRect.left + 200 < this.triangle.getBoundingClientRect().left){
            this.triangle.style.left = this.coordsRect.left + 200  + 'px';
        }
        if(this.coordsRect.left - 100 > this.triangle.getBoundingClientRect().left){
            this.triangle.style.left = this.coordsRect.left - 100  + 'px';
        }


    }
}
ListenerMenu.prototype = {

    toggleSquare: function (e) {
        if (!this.square) {
            var coords = this.getPosition(e);
            this.square = document.createElement('div');
            this.square.id = 'square';
            this.square.style.height = '50px';
            this.square.style.width = '50px';
            this.square.style.background = 'blue';
            this.square.style.position = 'absolute';
            this.square.style.top = coords.y + 'px';
            this.square.style.left = coords.x + 'px';
            this.block.appendChild(this.square);
        } else {
            this.block.removeChild(this.square);
            this.square = null;
        }

    },
    toggleAnimateSquare: function () {

        function makeEaseOut(timing) {
            return function (timeFraction) {
                return 1 - timing(1 - timeFraction);
            }
        }

        function bounce(timeFraction) {
            for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
                }
            }
        }
        var animateSquareBounce = makeEaseOut(bounce);
        if(this.square !== null){
            var to = this.block.clientHeight - this.square.clientHeight;
            this.animate({
                duration: 2000,
                timing: animateSquareBounce,
                draw(progress) {
                    this.square.style.top = to * progress + 'px'
                }
            });
        }

    },
    toggleTriangle: function (e) {
        if (!this.triangle) {
            var coords = this.getPosition(e);
            this.triangle = document.createElement('div');
            this.triangle.id = 'triangle';
            this.triangle.style.position = 'absolute';
            this.triangle.style.top = coords.y - 100 + 'px';
            this.triangle.style.left = coords.x -100 + 'px';
            this.triangle.style.borderStyle = 'solid';
            this.triangle.style.borderWidth = '0 100px 200px 100px';
            this.triangle.style.borderColor = 'transparent transparent red transparent';

            this.block.appendChild(this.triangle);
        } else {
            this.block.removeChild(this.triangle);
            this.block.removeEventListener('mousemove',this.handlerTriagle,false);
            this.state = 0;
            this.triangle = null;
            this.coordsRect = null;
        }
    },

    toggleAnimateTriangle: function (e) {

        if(this.state === 0){
            if(this.triangle){
                this.coordsRect = this.triangle.getBoundingClientRect();
                this.block.addEventListener('mousemove',this.handlerTriagle,false);
                this.state = 1;
            }

        } else {
            this.block.removeEventListener('mousemove',this.handlerTriagle,false);
            this.state = 0;
        }
    },

    reset: function (name) {
        if (this.triangle) {
            this.block.removeChild(this.triangle);
            this.triangle = null;
        }
        if (this.square) {
            this.block.removeChild(this.square);
            this.square = null;
        }
    },
    getPosition: function (e) {
        var posx = 0;
        var posy = 0;
        posx = e.clientX
        posy = e.clientY
        return {
            x: posx,
            y: posy
        }
    },

    animate: function ({ timing, draw, duration }) {
        var start = performance.now();
        requestAnimationFrame(function animate(time) {
            var timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;
            var progress = timing(timeFraction);

            draw(progress); // отрисовать её
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
    }
}







var clListener = new ListenerMenu({
    block: document.querySelector('body'),
});
console.log(clListener)
clListener.toggleSquare
var menu = document.querySelector('.list');
menu.addEventListener('click', (e) => {
    var target = e.target;
    if (target.classList.contains('list__square')) {
        clListener.toggleSquare(e);
    }
    if (target.classList.contains('list__triangle')) {
        clListener.toggleTriangle(e);
    }
    if (target.classList.contains('list__reset')) {
        clListener.reset();
    }
    if (target.classList.contains('list__bounce')) {
        clListener.toggleAnimateSquare();
    }
    if (target.classList.contains('list__animate-triangle')) {
        clListener.toggleAnimateTriangle(e);

    }
})

