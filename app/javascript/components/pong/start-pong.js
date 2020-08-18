import { moveBall } from '../pong/move-ball';
import { generateLevel } from '../pong/generate-level';

const startPong = (newLevel) => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const start = document.getElementById("start");
  let gameState = document.getElementById("game-state");

  start.addEventListener('click', () => {
    const lives = document.querySelectorAll(".life");

    if (lives.length > 0) {
      generateLevel();
    }
    else {
      location.reload();
    };
  });

  document.addEventListener('keydown', (e) => {
    const lives = document.querySelectorAll(".life");

    if (e.keyCode == 32 && lives.length > 0) {
      gameState.innerText = "On"
      moveBall("NW");
    };
  });
};

export { startPong };
