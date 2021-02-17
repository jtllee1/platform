import { life } from '../blockman/life';

const shoot = (direction) => {
  const impactSound = document.querySelector(".impact");
  let player = "";
  let playerId = "";
  let playerId2 = "";
  let laserStart = "";
  let laserCalc = "";

  if (direction == "forward") {
    player = "cube-player";
    playerId = 1;
    laserStart = "l-1";
    playerId2 = 2;
  }
  else {
    player = "cube-enemy";
    playerId = 2;
    laserStart = "l-9";
    playerId2 = 1;
  };

  const cube = document.querySelector(`.${player}`);
  const cubePart = cube.querySelector(".box");
  const shootStatus = document.querySelector(`.shoot-status-${playerId}`);

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
    column = "middle";
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

  const collisionStatus = document.querySelector(`.collision-status-${playerId}`);
  const collisionStatus2 = document.querySelector(`.collision-status-${playerId2}`);

  for (let i = 1; i < 9; i++) {
    setTimeout( function timer() {
      const laser2 = document.querySelector(`.laser-${playerId2}`);
      const laserPart2 = laser2.querySelector(".box");

      laserParts.forEach(part => {
        if (direction == "forward") {
          if (laserPart2) {
            if ((laserPart2.classList.contains(`l-${i + 1}`)) &&
              (laserPart2.classList.contains(`${column}`))) {
              collisionStatus.innerText = "on";
              collisionStatus2.innerText = "on";
            };
          };

          part.classList.remove(`l-${i}`);

          if (collisionStatus.innerText == "off") {
            part.classList.add(`l-${i + 1}`);
          };
        }
        else {
          if (laserPart2) {
            if ((laserPart2.classList.contains(`l-${9 - i}`)) &&
              (laserPart2.classList.contains(`${column}`))) {
              collisionStatus.innerText = "on";
              collisionStatus2.innerText = "on";
            };
          };

          part.classList.remove(`l-${10 - i}`);

          if (collisionStatus.innerText == "off") {
            part.classList.add(`l-${9 - i}`);
          };
        };
      });

      if (collisionStatus.innerText == "off") {
        if (i == 8) {
          if (direction == "forward") {
            const enemy = document.querySelector(".cube-enemy");
            const enemyId = enemy.querySelector(".box");

            if (enemyId.classList.contains(`${column}`)) {
              life("health-2");
              impactSound.pause();
              impactSound.currentTime = 0;
              impactSound.play();
            };
          }
          else {
            const enemy = document.querySelector(".cube-player");
            const enemyId = enemy.querySelector(".box");

            if (enemyId.classList.contains(`${column}`)) {
              life("health-1");
              impactSound.pause();
              impactSound.currentTime = 0;
              impactSound.play();
            };
          };
        };
      };

      if (collisionStatus.innerText == "on") {
        impactSound.play();
      };
    }, i * 60 );
  };

  setTimeout( function timer() {
    laser.innerText = "";
    shootStatus.innerText = "on";
    collisionStatus.innerText = "off";
  }, 9 * 60);
};

export { shoot };

