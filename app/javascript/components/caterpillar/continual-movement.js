import { setTimeout } from 'components/tools/timeout_manager';
import { addEventListener } from 'components/tools/event_listener_manager';
import { tail } from 'components/caterpillar/tail';
import { generateFood } from 'components/caterpillar/generate-food';
import { updateScore } from 'components/caterpillar/update-score';

const continualMovement = () => {
  addEventListener(window, "keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const start = document.getElementById("start");
  const grids = document.querySelectorAll(".grid-snake");
  const inners = document.querySelectorAll(".inner");

  const footstepSound = document.querySelector(".footstep");
  const biteSound = document.querySelector(".bite");
  let gameState = false;
  var keyState = {};
  let difficulty = 1;

  let length = 1;
  let i = 0;

  keyState[38] = true;

  addEventListener(document, 'keydown', (e) => {
    keyState[37] = false;
    keyState[38] = false;
    keyState[39] = false;
    keyState[40] = false;
    keyState[e.keyCode] = true;
  });

  function foodLoop() {
    if (gameState) {
      generateFood();

      setTimeout(foodLoop, 2000);
    };
  };

  addEventListener(start, 'click', () => {
    difficulty = document.getElementById("level").innerText;

    footstepSound.play();
    footstepSound.playbackRate = 3.0;

    gameState = true;

    foodLoop();
  });


  function movementLoop() {
    let active = document.querySelector(".active");
    let right = document.getElementById(parseInt(active.id) + 1);
    let left = document.getElementById(parseInt(active.id) - 1);
    let down = document.getElementById(parseInt(active.id) + 20);
    let up = document.getElementById(parseInt(active.id) - 20);

    if (gameState && keyState[39] && right && active.classList.contains("right-boundary") == false && right.querySelector(".inner").classList.contains("body") == false) {
      right.classList.add("active");
      right.classList.add("active-r");
      active.querySelector(".inner").id = `inner-${i}`;
      active.querySelector(".inner").classList.add("body");
      active.classList.remove("active");
      active.classList.remove("active-u");
      active.classList.remove("active-d");
      active.classList.remove("active-r");
      active.classList.remove("active-l");

      if (right.classList.contains("food")) {
        right.classList.remove("food");
        length++;
        updateScore(difficulty);
        biteSound.pause();
        biteSound.currentTime = 0;
        biteSound.play();
      }

      if (i == length) {
        tail(length);
      };
    }
    else if (gameState && keyState[37] && left && active.classList.contains("left-boundary") == false && left.querySelector(".inner").classList.contains("body") == false) {
      left.classList.add("active");
      left.classList.add("active-l");
      active.querySelector(".inner").id = `inner-${i}`;
      active.querySelector(".inner").classList.add("body");
      active.classList.remove("active");
      active.classList.remove("active-u");
      active.classList.remove("active-d");
      active.classList.remove("active-r");
      active.classList.remove("active-l");

      if (left.classList.contains("food")) {
        left.classList.remove("food");
        length++;
        updateScore(difficulty);
        biteSound.pause();
        biteSound.currentTime = 0;
        biteSound.play();
      }

      if (i == length) {
        tail(length);
      };
    }
    else if (gameState && keyState[40] && down && down.querySelector(".inner").classList.contains("body") == false) {
      down.classList.add("active");
      down.classList.add("active-d");
      active.querySelector(".inner").id = `inner-${i}`;
      active.querySelector(".inner").classList.add("body");
      active.classList.remove("active");
      active.classList.remove("active-u");
      active.classList.remove("active-d");
      active.classList.remove("active-r");
      active.classList.remove("active-l");

      if (down.classList.contains("food")) {
        down.classList.remove("food");
        length++;
        updateScore(difficulty);
        biteSound.pause();
        biteSound.currentTime = 0;
        biteSound.play();
      }

      if (i == length) {
        tail(length);
      };
    }
    else if (gameState && keyState[38] && up && up.querySelector(".inner").classList.contains("body") == false) {
      up.classList.add("active");
      up.classList.add("active-u");
      active.querySelector(".inner").id = `inner-${i}`;
      active.querySelector(".inner").classList.add("body");
      active.classList.remove("active");
      active.classList.remove("active-u");
      active.classList.remove("active-d");
      active.classList.remove("active-r");
      active.classList.remove("active-l");

      if (up.classList.contains("food")) {
        up.classList.remove("food");
        length++;
        updateScore(difficulty);
        biteSound.pause();
        biteSound.currentTime = 0;
        biteSound.play();
      }

      if (i == length) {
        tail(length);
      };
    }
    else {
      gameState = false;
      footstepSound.pause();
      footstepSound.currentTime = 0;
    };

    if (i < length && gameState) {
      i++;
    };

    if (difficulty == 1) {
      setTimeout(movementLoop, 100);
    }
    else if (difficulty == 2) {
      setTimeout(movementLoop, 80);
    }
    else if (difficulty == 3) {
      setTimeout(movementLoop, 60);
    }
  };

  movementLoop();
};

export { continualMovement };
