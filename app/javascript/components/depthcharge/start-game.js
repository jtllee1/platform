const startGame = () => {
  const start = document.getElementById("start");
  let firstStart = true;
  const laserSound = document.querySelector(".laser");
  const reloadSound = document.querySelector(".reload");
  const impactSound = document.querySelector(".impact");
  const swimSound = document.querySelector(".swim");
  const loseSound = document.querySelector(".lose");
  impactSound.volume = 0.3;
  swimSound.volume = 0.3;
  const avatar = document.getElementById("avatar");
  const enemy = document.getElementById("enemy");
  const ammo = document.getElementById("ammo");
  const score = document.getElementById("score");
  const laserImage = document.getElementById("laser");
  let scale;

  function screenSize() {
    if ($(window).height() > 800 && $(window).width() > 1000) {
      scale = 1.5;
    }
    else {
      scale = 1;
    };
  };

  screenSize();

  window.addEventListener('resize', (e) => {
    screenSize();

    if (myGameArea) {
      myGameArea.canvas.width = 600 * scale;
      myGameArea.canvas.height = 400 * scale;
    };

    if (myGamePiece) {
      myGamePiece.width = 60 * scale;
      myGamePiece.height = 60 * scale;
      if (scale == 1) {
        myGamePiece.x = myGamePiece.x / 1.5;
        myGamePiece.y = myGamePiece.y / 1.5;
      }
      else {
        myGamePiece.x = myGamePiece.x * 1.5;
        myGamePiece.y = myGamePiece.y * 1.5;
      };
    };

    if (myObstacles.length > 0) {
      myObstacles.forEach(obstacle => {
        obstacle.width = 30 * scale;
        obstacle.height = 30 * scale;
        if (scale == 1) {
          obstacle.x = obstacle.x / 1.5;
          obstacle.y = obstacle.y / 1.5;
        }
        else {
          obstacle.x = obstacle.x * 1.5;
          obstacle.y = obstacle.y * 1.5;
        };
      });
    };

    if (lasers.length > 0) {
      lasers.forEach(laser => {
        laser.width = 30 * scale;
        laser.height = 10 * scale;
        if (scale == 1) {
          laser.x = laser.x / 1.5;
          laser.y = laser.y / 1.5;
        }
        else {
          laser.x = laser.x * 1.5;
          laser.y = laser.y * 1.5;
        };
      });
    };
  });

  var myGameArea = {
    canvas : document.getElementById("game"),
    create : function() {
      this.canvas.width = 600 * scale;
      this.canvas.height = 400 * scale;
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

        if (gameState) {
          if (e.keyCode != 32) {
            myGameArea.keys[e.keyCode] = false;
          }
          else if (e.keyCode == 32 && lasers.length < limit) {
            myGameArea.keys[e.keyCode] = true;
            lasers.push(new component((30 * scale), (10 * scale), laserImage, (myGamePiece.x + (60 * scale)), (myGamePiece.y + (20 * scale)), "image"));
            laserSound.pause();
            laserSound.currentTime = 0;
            laserSound.play();
          };
        };
      });
      window.addEventListener('mousedown', function (e) {
        e.preventDefault();
        myGameArea.keys = (myGameArea.keys || []);
        myGameArea.keys[38] = true;
        if (gameState) {
          swimSound.pause();
          swimSound.currentTime = 0;
          swimSound.play();
        };
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
  var gameState = false;

  // variables above

  myGamePiece = new component((60 * scale), (60 * scale), avatar , (10 * scale), (170 * scale), "image");
  // myScore = new component("30px", "Consolas", "black", 380, 40, "text");
  myAmmo = new component("30px", "Consolas", "black", 10, 40, "text");
  myGameArea.create();

  start.addEventListener('click', function (e) {
    if (firstStart) {
      myGameArea.start();
      firstStart = false;
      gameState = true;
    }
    else {
      myObstacles = [];
      lasers = [];
      limit = 1;
      myGamePiece.x = 10 * scale;
      myGamePiece.y = 170 * scale;
      myGameArea.stop();
      myGameArea.clear();
      myGameArea.restart();
      gameState = true;
      score.innerText = 0;
    };
  });

  // functions below

  function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
      this.image = new Image();
      this.image.src = color.src;
    };
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.color = color.id;
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
        if (itemX <= end) {
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
    let playSpeed = -1;
    var x, y;
    if (myGameArea.frameNo > 2000) {
      playSpeed = -2;
    }
    else if (myGameArea.frameNo > 3000) {
      playSpeed = -3;
    };
    for (let i = 0; i < myObstacles.length; i += 1) {
      if (myGamePiece.crashWith(myObstacles[i]) && myObstacles[i].color == "enemy") {
        gameState = false;
        myGameArea.stop();
        loseSound.pause();
        loseSound.currentTime = 0;
        loseSound.play();
        return;
      }
      else if (myGamePiece.crashWith(myObstacles[i]) && myObstacles[i].color == "ammo") {
        myObstacles.splice(i, 1);
        limit += 1;
        reloadSound.pause();
        reloadSound.currentTime = 0;
        reloadSound.play();
      };

      if (myObstacles[i].hitEnd("obstacle")) {
        myObstacles.splice(i, 1);
        score.innerText = parseInt(score.innerText) - 1000;
      };

      for (let j = 0; j < lasers.length; j += 1) {
        if (lasers[j].laserHit(myObstacles[i])) {
          lasers.splice(j, 1);
          // myGameArea.frameNo += 500;
          if (myObstacles[i].color == "enemy") {
            score.innerText = parseInt(score.innerText) + 500;
          };
          myObstacles.splice(i, 1);
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
      let maxHeight = 370 * scale;
      let height = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
      let height2 = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
      let conditions = [true, false];
      let condition = conditions[Math.floor(Math.random() * conditions.length)];
      let randomNo1 = Math.floor(Math.random() * 10);
      let randomNo2 = Math.floor(Math.random() * 10);

      if (randomNo1 < 9 || limit > 2) {
        myObstacles.push(new component((30 * scale), (30 * scale), enemy, x, height, "image"));
      }
      else {
        myObstacles.push(new component((30 * scale), (30 * scale), ammo, x, height, "image"));
      };

      if (condition && ((height2 > height + (30 * scale)) || (height2 < height - (30 * scale)))) {
        if (randomNo2 < 9 || limit > 2) {
        myObstacles.push(new component((30 * scale), (30 * scale), enemy, x, height2, "image"));
        }
        else {
          myObstacles.push(new component((30 * scale), (30 * scale), ammo, x, height2, "image"));
        };
      };
    //bar obstacles
      // myObstacles.push(new component(10, height, "green", x, 0));
      // myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    };
    for (let i = 0; i < myObstacles.length; i += 1) {
      myObstacles[i].x += playSpeed * scale;
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
    // if (myGameArea.keys && myGameArea.keys[37]) {
    //   myGamePiece.speedX = -1;
    // };
    // if (myGameArea.keys && myGameArea.keys[39]) {
    //   myGamePiece.speedX = 1;
    // };
    if (myGameArea.keys && myGameArea.keys[38]) {
      // myGamePiece.speedY = -1;
      myGamePiece.gravity = -0.1;
    };
    if (myGameArea.keys && myGameArea.keys[38] == false) {
      myGamePiece.gravity = 0.05;
      swimSound.pause();
      swimSound.currentTime = 0;
      swimSound.play();
    };
    // if (myGameArea.keys && myGameArea.keys[40]) {
    //   // myGamePiece.speedY = 1;
    // };
    // if (myGameArea.keys && myGameArea.keys[32]) {
    //   myGameArea.keys[32] = false;
    // };
    for (let i = 0; i < lasers.length; i += 1) {
      lasers[i].x += 4;
      lasers[i].update();
    };
    // myScore.text = "SCORE: " + myGameArea.frameNo;
    // myScore.update();
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
