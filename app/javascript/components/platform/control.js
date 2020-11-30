import { playLoop } from '../platform/play-loop';

const control = () => {
  const cubes = document.querySelectorAll(".cube");
  const gameState = document.getElementById("game-state");
  const start = document.getElementById("start");
  const score = document.getElementById("score");

  start.addEventListener('click', (e) => {
    gameState.innerText = "On";

    score.innerText = 0;

    playLoop();
  });

  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 37) {
      cubes[0].classList.add("up");

      setTimeout( function timer() {
        cubes[0].classList.remove("up");
      }, 200);
    }
    else if (e.keyCode == 38) {
      cubes[1].classList.add("up");

      setTimeout( function timer() {
        cubes[1].classList.remove("up");
      }, 200);
    }
    else if (e.keyCode == 40) {
      cubes[2].classList.add("up");

      setTimeout( function timer() {
        cubes[2].classList.remove("up");
      }, 200);
    }
    else if (e.keyCode == 39) {
      cubes[3].classList.add("up");

      setTimeout( function timer() {
        cubes[3].classList.remove("up");
      }, 200);
    };

  });
};

export { control };
