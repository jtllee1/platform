import { setTimeout } from 'components/tools/timeout_manager';
import { addEventListener } from 'components/tools/event_listener_manager';
import { playLoop } from 'components/platform/play-loop';

const control = () => {
  const cubes = document.querySelectorAll(".cube");
  const gameState = document.getElementById("game-state");
  const start = document.getElementById("start");
  const score = document.getElementById("score");
  const bgMusics = document.querySelectorAll(".bg-music");

  const cube1 = document.querySelector(".l-1.p-1.top");
  const cube2 = document.querySelector(".l-1.p-2.top");
  const cube3 = document.querySelector(".l-1.p-3.top");
  const cube4 = document.querySelector(".l-1.p-4.top");

  cube1.classList.add("far", "fa-arrow-alt-circle-left");
  cube2.classList.add("far", "fa-arrow-alt-circle-up");
  cube3.classList.add("far", "fa-arrow-alt-circle-down");
  cube4.classList.add("far", "fa-arrow-alt-circle-right");

  addEventListener(start, 'click', (e) => {
    if (gameState.innerText == "Off") {
      const getValue = document.getElementById('song').selectedOptions[0].value;
      const bgMusic = bgMusics[getValue];

      gameState.innerText = "On";

      score.innerText = 0;

      bgMusic.pause();
      bgMusic.currentTime = 0;
      bgMusic.play();

      playLoop(bgMusic);

      addEventListener(bgMusic, 'ended', (e) => {
        gameState.innerText = "Off";
      });
    };
  });

  addEventListener(document, 'keyup', (e) => {
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
