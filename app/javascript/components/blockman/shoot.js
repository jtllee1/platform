const shoot = (direction) => {
  let player = "";
  let playerId = "";

  if (direction == "forward") {
    player = "cube-player";
    playerId = 1;
  }
  else {
    player = "cube-enemy";
    playerId = 2;
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

  const laser = document.querySelector(`.laser-${playerId}`);

  const faces = ["front", "right", "back", "left", "bottom", "top"];

  faces.forEach(face => {
    let div = document.createElement('div');
    div.className = "box";
    div.classList.add("l-1", `${face}`, `${column}`);
    laser.appendChild(div);
  });

  const laserParts = laser.querySelectorAll(".box");

  for (let i = 1; i < 9; i++) {
    setTimeout( function timer() {
      laserParts.forEach(part => {
        part.classList.remove(`l-${i}`);
        part.classList.add(`l-${i + 1}`);
      });
    }, i * 60 );
  };
};

export { shoot };
