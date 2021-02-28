const startGame = () => {
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[2]);
      this.interval = setInterval(updateGameArea, 20);
      window.addEventListener('keydown', function (e) {
      // single direction movement
        // myGameArea.key = e.keyCode;
      // multiple direction movement
        myGameArea.keys = (myGameArea.keys || []);
        myGameArea.keys[e.keyCode] = true;
      });
      window.addEventListener('keyup', function (e) {
      // single direction movement
        // myGameArea.key = false;
      // multiple direction movement
        myGameArea.keys[e.keyCode] = false;
      });
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
    this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
    };
  };

  function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
  // single direction movement
    // if (myGameArea.key && myGameArea.key == 37) {
    //   myGamePiece.speedX = -1;
    // };
    // if (myGameArea.key && myGameArea.key == 39) {
    //   myGamePiece.speedX = 1;
    // };
    // if (myGameArea.key && myGameArea.key == 38) {
    //   myGamePiece.speedY = -1;
    // };
    // if (myGameArea.key && myGameArea.key == 40) {
    //   myGamePiece.speedY = 1;
    // };
  // multiple direction movement
    if (myGameArea.keys && myGameArea.keys[37]) {
      myGamePiece.speedX = -1;
    };
    if (myGameArea.keys && myGameArea.keys[39]) {
      myGamePiece.speedX = 1;
    };
    if (myGameArea.keys && myGameArea.keys[38]) {
      myGamePiece.speedY = -1;
    };
    if (myGameArea.keys && myGameArea.keys[40]) {
      myGamePiece.speedY = 1;
    };
    myGamePiece.newPos();
    myGamePiece.update();
  };
};

export { startGame };