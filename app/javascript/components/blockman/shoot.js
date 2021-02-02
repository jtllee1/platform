const shoot = (direction) => {
  let player = "";
  let playerId = "";
  let laserStart = "";
  let laserCalc = "";

  if (direction == "forward") {
    player = "cube-player";
    playerId = 1;
    laserStart = "l-1";
  }
  else {
    player = "cube-enemy";
    playerId = 2;
    laserStart = "l-9";
  };

  const cube = document.querySelector(`.${player}`);
  const cubePart = cube.querySelector(".box");

  let column = "";

  if (cubePart.classList.contains("move-left2")) {
    column = "move-left2";
  }
  else if (cubePart.classList.contains("move-left")) {
    column = "move-left";
  }
  else if (cubePart.classList.contains("move-right")) {
    column = "move-right";
  }
  else if (cubePart.classList.contains("move-right2")) {
    column = "move-right2";
  }
  else {
    column = "box";
  };

  let laser = document.querySelector(`.laser-${playerId}`);

  const faces = ["front", "right", "back", "left", "bottom", "top"];

  faces.forEach(face => {
    let div = document.createElement('div');
    div.className = "box";
    div.classList.add(`${laserStart}`, `${face}`, `${column}`);
    laser.appendChild(div);
  });

  const laserParts = laser.querySelectorAll(".box");

  for (let i = 1; i < 9; i++) {
    setTimeout( function timer() {
      laserParts.forEach(part => {
        if (direction == "forward") {
          part.classList.remove(`l-${i}`);
          part.classList.add(`l-${i + 1}`);
        }
        else {
          part.classList.remove(`l-${10 - i}`);
          part.classList.add(`l-${9 - i}`);
        };
      });
    }, i * 60 );
  };

  setTimeout( function timer() {
    laser.innerText = "";
  }, 9 * 60);
};

export { shoot };

