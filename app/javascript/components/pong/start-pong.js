import { addEventListener } from '../tools/event_listener_manager.js';
import { moveBall } from '../pong/move-ball.js';
import { generateLevel } from '../pong/generate-level.js';

const startPong = (newLevel) => {
  addEventListener(window, "keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const start = document.getElementById("start");
  let gameState = document.getElementById("game-state");

  generateLevel();

  addEventListener(start, 'click', () => {
    location.reload();
  });

  addEventListener(document, 'keydown', (e) => {
    const lives = document.querySelectorAll(".life");

    if (e.keyCode == 32 && lives.length > 0) {
      gameState.innerText = "On"
      moveBall("NW");
    };
  });
};

export { startPong };
