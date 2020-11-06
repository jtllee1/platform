import { generateTile } from '../2048/generate-tile';
import { moveTile } from '../2048/move-tile';

const start2048 = () => {
  const start = document.getElementById("start");
  const gameState = document.getElementById("game-state");

  start.addEventListener('click', () => {
    gameState.innerText = "On";
    generateTile();
    generateTile();
  });

  document.addEventListener('keyup', (e) => {
    let direction = "";

    if (gameState.innerText == "On") {
      if (e.keyCode == 37) {
        direction = "left";
      }
      else if (e.keyCode == 39) {
        direction = "right";
      }
      else if (e.keyCode == 38) {
        direction = "up";
      }
      else if (e.keyCode == 40) {
        direction = "down"
      };

      for (let i = 0; i < 3; i++) {
        setTimeout(function timer() {
          moveTile(direction);
        }, i * 80);
      };
    };
  });
};

export { start2048 };
