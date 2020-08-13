import { moveBall } from '../pong/move-ball';

const startPong = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  let gameState = document.getElementById("game-state");

  document.addEventListener('keydown', (e) => {
    if (e.keyCode == 32) {
      gameState.innerText = "On"
      moveBall("NW");
    };
  });
};

export { startPong };
