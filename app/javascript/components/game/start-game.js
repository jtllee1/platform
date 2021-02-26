const startGame = () => {
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[2]);
      this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  };

  var myGamePiece;

  // variables above

  myGameArea.start();
  myGamePiece = new component(30, 30, "red", 10, 120);

  // functions below

  function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
      let ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    };
  };

  function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
  };
};

export { startGame };
