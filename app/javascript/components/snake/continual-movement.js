import { tail } from '../snake/tail';

const continualMovement = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const start = document.getElementById("start");
  let gameState = false;
  var keyState = {};

  keyState[38] = true;

  document.addEventListener('keydown', (e) => {
    keyState[37] = false;
    keyState[38] = false;
    keyState[39] = false;
    keyState[40] = false;
    keyState[e.keyCode] = true;
  });

  start.addEventListener('click', () => {
    gameState = true;
  });

  let level = 5;
  let i = 0;

  function movementLoop() {
    let active = document.querySelector(".active");
    let right = document.getElementById(parseInt(active.id) + 1);
    let left = document.getElementById(parseInt(active.id) - 1);
    let down = document.getElementById(parseInt(active.id) + 20);
    let up = document.getElementById(parseInt(active.id) - 20);

    if (gameState && keyState[39] && right && active.classList.contains("right-boundary") == false && right.querySelector(".inner").classList.contains("body") == false) {
      right.classList.add("active");
      right.querySelector(".inner").id = `inner-${i}`;
      right.querySelector(".inner").classList.add("body");
      active.classList.remove("active");

      if (i == level) {
        tail(level);
      };
    }
    else if (gameState && keyState[37] && left && active.classList.contains("left-boundary") == false && left.querySelector(".inner").classList.contains("body") == false) {
      left.classList.add("active");
      left.querySelector(".inner").id = `inner-${i}`;
      left.querySelector(".inner").classList.add("body");
      active.classList.remove("active");

      if (i == level) {
        tail(level);
      };
    }
    else if (gameState && keyState[40] && down && down.classList.contains("enemy") == false && down.querySelector(".inner").classList.contains("body") == false) {
      down.classList.add("active");
      down.querySelector(".inner").id = `inner-${i}`;
      down.querySelector(".inner").classList.add("body");
      active.classList.remove("active");

      if (i == level) {
        tail(level);
      };
    }
    else if (gameState && keyState[38] && up && up.classList.contains("enemy") == false && up.querySelector(".inner").classList.contains("body") == false) {
      up.classList.add("active");
      up.querySelector(".inner").id = `inner-${i}`;
      up.querySelector(".inner").classList.add("body");
      active.classList.remove("active");

      if (i == level) {
        tail(level);
      };
    };

    if (i < level && gameState) {
      i++;
    };

    setTimeout(movementLoop, 50);
  };

  movementLoop();
};

export { continualMovement };
