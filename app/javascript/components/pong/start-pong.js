import { moveBall } from '../pong/move-ball';
import { generateLevel } from '../pong/generate-level';

const startPong = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const start = document.getElementById("start");
  const level = document.getElementById("level");
  let gameState = document.getElementById("game-state");

  start.addEventListener('click', () => {

    generateLevel(level.innerText);
  });

  document.addEventListener('keydown', (e) => {
    if (e.keyCode == 32) {
      gameState.innerText = "On"
      moveBall("NW");
    };
  });
};

export { startPong };
