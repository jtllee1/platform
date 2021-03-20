const startGame = () => {
  const start = document.getElementById("start");
  let firstStart = true;

  var myGameArea = {
    canvas : document.getElementById("game"),
    create : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
    },
    start : function() {
      this.frameNo = 0;
      this.interval = setInterval(updateGameArea, 20);
      window.addEventListener('keydown', function (e) {
      // single direction movement
        // myGameArea.key = e.keyCode;
      // multiple direction movement
        myGameArea.keys = (myGameArea.keys || []);
        if (e.keyCode != 32) {
          myGameArea.keys[e.keyCode] = true;
        };
      });
      window.addEventListener('keyup', function (e) {
      // single direction movement
        // myGameArea.key = false;
      // multiple direction movement
        myGameArea.keys[e.keyCode] = false;

        if (e.keyCode != 32) {
          myGameArea.keys[e.keyCode] = false;
        }
        else if (e.keyCode == 32) {
          myGameArea.keys[e.keyCode] = true;
          lasers.push(new component(30, 10, "red", (myGamePiece.x + 30), (myGamePiece.y + 10)));
        };
      });
      window.addEventListener('mousedown', function (e) {
        e.preventDefault();
        myGameArea.keys = (myGameArea.keys || []);
        myGameArea.keys[38] = true;
      });
      window.addEventListener('mouseup', function (e) {
        e.preventDefault();
        myGameArea.keys[38] = false;
      });
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
      clearInterval(this.interval);
    },
    restart : function() {
      this.frameNo = 0;
      this.interval = setInterval(updateGameArea, 20);
    },
  };

  var myGamePiece;
  var myObstacles = [];
  var myScore;
  var lasers = [];

  // variables above

  myGamePiece = new component(30, 30, "red", 10, 120);
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myGameArea.create();

  start.addEventListener('click', function (e) {
    if (firstStart) {
      myGameArea.start();
      firstStart = false;
    }
    else {
      myObstacles = [];
      lasers = [];
      myGamePiece.x = 10;
      myGamePiece.y = 120;
      myGameArea.stop();
      myGameArea.clear();
      myGameArea.restart();
    };
  });

  // functions below

  function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.update = function(){
      let ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      if (this.type == "text") {
        ctx.font = this.width + " " + this.height;
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
      }
      else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      };
    };
    this.newPos = function() {
      this.gravitySpeed += this.gravity;
      this.x += this.speedX;
      this.y += this.speedY + this.gravitySpeed;
      this.hitBottom();
      this.hitTop();
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
      };
      return crash;
    };
    this.hitBottom = function() {
      var bottom = myGameArea.canvas.height - this.height;
      if (this.y > bottom) {
        this.y = bottom;
        this.gravitySpeed = 0;
        // myGameArea.stop();
      };
    };
    this.hitTop = function() {
      var top = 0;
      if (this.y < top) {
        this.y = top;
        this.gravitySpeed = 0;
        // myGameArea.stop();
      };
    };
    this.laserHit = function(otherobj) {
      var myleft = this.x;
      var myright = this.x + (this.width);
      var mytop = this.y;
      var mybottom = this.y + (this.height);
      var otherleft = otherobj.x;
      var otherright = otherobj.x + (otherobj.width);
      var othertop = otherobj.y;
      var otherbottom = otherobj.y + (otherobj.height);
      var crash = false;
      if ((myright > otherleft) &&
        ((mytop < othertop && mybottom > othertop) || (mytop < otherbottom && mybottom > otherbottom)
          || (mytop >= othertop && mybottom <= otherbottom))) {
        crash = true;
      };
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
      for (let j = 0; j < lasers.length; j += 1) {
        if (lasers[j].laserHit(myObstacles[i])) {
          lasers.splice(j, 1);
          myObstacles.splice(i, 1);
          return;
        };
      };
    };
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
      let x = myGameArea.canvas.width;
      let minHeight = 0;
      let maxHeight = 240;
      let height = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
      let height2 = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
      let conditions = [true, false];
      let condition = conditions[Math.floor(Math.random() * conditions.length)];

      myObstacles.push(new component(30, 30, "green", x, height));
      if (condition && ((height2 > height + 30) || (height2 < height - 30))) {
        myObstacles.push(new component(30, 30, "green", x, height2));
      };
    //bar obstacles
      // myObstacles.push(new component(10, height, "green", x, 0));
      // myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
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
      // myGamePiece.speedY = -1;
      myGamePiece.gravity = -0.1;
    };
    if (myGameArea.keys && myGameArea.keys[38] == false) {
      myGamePiece.gravity = 0.05;
    };
    if (myGameArea.keys && myGameArea.keys[40]) {
      // myGamePiece.speedY = 1;
    };
    if (myGameArea.keys && myGameArea.keys[32]) {
      myGameArea.keys[32] = false;
    };
    for (let i = 0; i < lasers.length; i += 1) {
      lasers[i].x += 2;
      lasers[i].update();
    };
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
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
