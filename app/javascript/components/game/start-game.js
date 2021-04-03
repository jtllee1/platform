const startGame = () => {
  const start = document.getElementById("start");
  let firstStart = true;
  const laserSound = document.querySelector(".laser");
  const reloadSound = document.querySelector(".reload");
  const impactSound = document.querySelector(".impact");
  impactSound.volume = 0.3;
  const avatar = document.getElementById("avatar");

  var myGameArea = {
    canvas : document.getElementById("game"),
    create : function() {
      this.canvas.width = 600;
      this.canvas.height = 400;
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
        else if (e.keyCode == 32 && lasers.length < limit) {
          myGameArea.keys[e.keyCode] = true;
          lasers.push(new component(30, 10, "red", (myGamePiece.x + 60), (myGamePiece.y + 20)));
          laserSound.pause();
          laserSound.currentTime = 0;
          laserSound.play();
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
  var myAmmo;
  var limit = 1;

  // variables above

  myGamePiece = new component(60, 60, avatar.src , 10, 170, "image");
  myScore = new component("30px", "Consolas", "black", 400, 40, "text");
  myAmmo = new component("30px", "Consolas", "black", 10, 40, "text");
  myGameArea.create();

  start.addEventListener('click', function (e) {
    if (firstStart) {
      myGameArea.start();
      firstStart = false;
    }
    else {
      myObstacles = [];
      lasers = [];
      limit = 1;
      myGamePiece.x = 10;
      myGamePiece.y = 170;
      myGameArea.stop();
      myGameArea.clear();
      myGameArea.restart();
    };
  });

  // functions below

  function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
      this.image = new Image();
      this.image.src = color;
    };
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.color = color;
    this.update = function(){
      let ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      if (this.type == "text") {
        ctx.font = this.width + " " + this.height;
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
      }
      else if (type == "image") {
        ctx.drawImage(this.image,
          this.x,
          this.y,
          this.width, this.height);
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
    this.hitEnd = function(item) {
      var end;
      var itemX;
      var crash = false;

      if (item == "laser") {
        end = myGameArea.canvas.width;
        itemX = this.x;
        if (itemX >= end) {
          crash = true;
        };
      }
      else if (item == "obstacle") {
        end = 0;
        itemX = this.x + this.width;
        if (itemX == end) {
          crash = true;
        };
      };

      return crash;
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
      if (myGamePiece.crashWith(myObstacles[i]) && myObstacles[i].color == "green") {
        myGameArea.stop();
        return;
      }
      else if (myGamePiece.crashWith(myObstacles[i]) && myObstacles[i].color == "yellow") {
        myObstacles.splice(i, 1);
        limit += 1;
        reloadSound.pause();
        reloadSound.currentTime = 0;
        reloadSound.play();
      };

      if (myObstacles[i].hitEnd("obstacle")) {
        myObstacles.splice(i, 1);
      };

      for (let j = 0; j < lasers.length; j += 1) {
        if (lasers[j].laserHit(myObstacles[i])) {
          lasers.splice(j, 1);
          myObstacles.splice(i, 1);
          myGameArea.frameNo += 500;
          impactSound.pause();
          impactSound.currentTime = 0;
          impactSound.play();
          return;
        };
      };
    };
    for (let k = 0; k < lasers.length; k += 1) {
      if (lasers[k].hitEnd("laser")) {
        lasers.splice(k, 1);
        return;
      };
    };
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
      let x = myGameArea.canvas.width;
      let minHeight = 0;
      let maxHeight = 370;
      let height = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
      let height2 = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
      let conditions = [true, false];
      let condition = conditions[Math.floor(Math.random() * conditions.length)];
      let colors = ["green", "green", "green", "green", "green", "green", "green", "green", "green", "yellow"];
      let color1 = colors[Math.floor(Math.random() * colors.length)];
      let color2 = colors[Math.floor(Math.random() * colors.length)];

      if (limit > 2) {
        color1 = "green";
        color2 = "green";
      };

      myObstacles.push(new component(30, 30, color1, x, height));
      if (condition && ((height2 > height + 30) || (height2 < height - 30))) {
        myObstacles.push(new component(30, 30, color2, x, height2));
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
      lasers[i].x += 4;
      lasers[i].update();
    };
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
    myAmmo.text = "AMMO: " + (limit - lasers.length);
    myAmmo.update();
  };

  function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {
      return true;
    };
    return false;
  };
};

export { startGame };
