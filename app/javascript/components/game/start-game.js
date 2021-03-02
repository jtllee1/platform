const startGame = () => {
  var myGameArea = {
    canvas : document.getElementById("game"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      this.frameNo = 0;
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
    },
    stop : function() {
      clearInterval(this.interval);
    }
  };

  var myGamePiece;
  var myObstacles = [];

  // variables above

  myGamePiece = new component(30, 30, "red", 10, 120);
  myGameArea.start();

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
    this.crashWith = function(otherobj) {
      var myleft = this.x;
      var myright = this.x + (this.width);
      var mytop = this.y;
      var mybottom = this.y + (this.height);
      var otherleft = otherobj.x;
      var otherright = otherobj.x + (otherobj.width);
      var othertop = otherobj.y;
      var otherbottom = otherobj.y + (otherobj.height);
      var crash = true;
      if ((mybottom < othertop) ||
      (mytop > otherbottom) ||
      (myright < otherleft) ||
      (myleft > otherright)) {
        crash = false;
      }
      return crash;
    };
  };

  function updateGameArea() {
    var x, y;
    for (let i = 0; i < myObstacles.length; i += 1) {
      if (myGamePiece.crashWith(myObstacles[i])) {
        myGameArea.stop();
        return;
      };
    };
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
      let x = myGameArea.canvas.width;
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(Math.random()*(maxHeight - minHeight + 1)+ minHeight);
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random()*(maxGap - minGap + 1) + minGap);
      myObstacles.push(new component(10, height, "green", x, 0));
      myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    };
    for (let i = 0; i < myObstacles.length; i += 1) {
      myObstacles[i].x += -1;
      myObstacles[i].update();
    };
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

  function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {
      return true;
    };
    return false;
  };
};

export { startGame };
