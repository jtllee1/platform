import { addEventListener } from '../tools/event_listener_manager';
import { moveBall } from '../pong/move-ball';
import { generateLevel } from '../pong/generate-level';

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
