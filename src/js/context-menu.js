
class ContextMenu {

    constructor(obj){
      this.menu = document.querySelector(obj.menu);
      this.activeClassName = obj.activeClassName;
      this.mainBlock  = document.querySelector(obj.mainBlock)
      this.menuPosition;
      this.menuState = 0;
      this.menuPositionX;
      this.menuPositionY;
      this.menuWidth;
      this.menuHeight;
      this.windowWidth;
      this.windowHeight;
      this.offsetPx = 4;
    }
    positionMenu(e) {
      this.menuPosition = this.getPosition(e);
      this.menuPositionX = this.menuPosition.x
      this.menuPositionY = this.menuPosition.y
      this.menu.scrollHeight; //времено

      this.menuWidth = this.menu.offsetWidth + this.offsetPx, // сдвиг на 4 пикселя
      this.menuHeight = this.menu.offsetHeight + this.offsetPx
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight =  document.documentElement.clientHeight;

      if((this.windowWidth - this.menuPositionX) < this.menuWidth){
        this.menu.style.left = this.windowWidth - this.menuWidth + "px";
      } else {
        this.menu.style.left = this.menuPositionX + "px";
      }
      if((this.windowHeight - this.menuPositionY) < this.menuHeight){
        this.menu.style.top = this.windowHeight - this.menuHeight + "px";
      } else {
        this.menu.style.top = this.menuPositionY + "px";
      }
    }
    fade(t){
                  var fps = 60;
                  var time =  500;
                  var steps = time / fps;
                  var op = 1;
                  var d0 = op / steps;
                  var timer = setInterval(()=>{
                      op -= d0;
                      this.menu.style.opacity = op;
                      steps--;
                          if(steps <= 0){
                            clearInterval(timer);
                           this.menu.style.display = 'none';
                          }
                  }, (1000 / fps));

          }

      show(t){
                  var fps = 60;
                  var time =  500;
                  var steps = time / fps;
                  var op = t || 0;
                  var d0 = 1 / steps;
           this.menu.style.opacity = 0;
          this.menu.style.display = 'block';
                  var timer = setInterval(()=>{
                      op += d0;
                      this.menu.style.opacity = op;
                      steps--;
                          if(steps <= 0){
                            clearInterval(timer);
                          }
                  }, (1500 / fps));

          }

   getPosition(e){
      var posx = 0 ;
      var posy = 0 ;
      posx = e.clientX
      posy = e.clientY
      return {
        x: posx,
        y: posy
      }
    }

    contextListener(el) {

      el.addEventListener( "contextmenu", (e)=> {
        e.preventDefault();
        this.toggleMenuOn();
        this.positionMenu(e);

      });
      el.addEventListener("click",(e)=>{
          this.toggleMenuOff();
      })
    }

  resizeListener(){
    window.addEventListener('resize',function(){
      this.toggleMenuOff()
    })
  }

    toggleMenuOn() {
      if ( this.menuState !== 1 ) {
        this.menuState = 1;
        this.show();
      }else{
        this.show(0);
      }
        // this.menu.classList.add(this.activeClassName);

    }

    toggleMenuOff() {
      if ( this.menuState !== 0 ) {
        this.menuState = 0;
        this.fade();
        // this.menu.classList.remove(this.activeClassName);
      }
    }
    init() {
      this.contextListener(this.mainBlock);

    }
  }

