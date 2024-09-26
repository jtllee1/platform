import { setTimeout } from '../tools/timeout_manager';
import { addEventListener } from '../tools/event_listener_manager';
import { generateTile } from '../2048/generate-tile';
import { moveTile } from '../2048/move-tile';
import { color } from '../2048/color';

const start2048 = () => {
  const start = document.getElementById("start");
  const gameState = document.getElementById("game-state");
  const tiles = document.querySelectorAll(".grid");

  addEventListener(start, 'click', () => {
    tiles.forEach(tile => {
      tile.classList.remove("active");
      tile.innerText = "";
      tile.style.backgroundColor = "";
    });

    gameState.innerText = "On";
    generateTile();
    generateTile();
  });

  addEventListener(document, 'keyup', (e) => {
    let direction = "";

    if (gameState.innerText == "On" &&
      (e.keyCode == 37 || e.keyCode == 38 ||
        e.keyCode == 39 || e.keyCode == 40)) {
      gameState.innerText = "Off";

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

      setTimeout(function timer() {
        generateTile();
      }, 300);

      setTimeout(function timer() {
        color();
      }, 200);
    };
  });
};

export { start2048 };
