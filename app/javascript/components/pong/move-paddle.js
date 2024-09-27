import { setTimeout } from 'components/tools/timeout_manager';
import { addEventListener } from 'components/tools/event_listener_manager';

const movePaddle = () => {
  var keyState = {};

  addEventListener(document, 'keydown', (e) => {
    keyState[e.keyCode] = true;
  });

  addEventListener(document, 'keyup', (e) => {
    keyState[e.keyCode] = false;
  });

  function movementLoop() {
    let actives = document.querySelectorAll(".active");
    let gameState = document.getElementById("game-state");
    let ball = document.querySelector(".ball");
    let right = document.getElementById(parseInt(actives[actives.length - 1].id) + 1);
    let left = document.getElementById(parseInt(actives[0].id) - 1);

    if (keyState[39] && right) {
      document.getElementById(parseInt(actives[actives.length - 1].id) + 1).classList.add("active");
      actives[0].classList.remove("active");
      if (gameState.innerText == "Off") {
        document.getElementById(parseInt(ball.id) + 1).classList.add("ball");
        ball.classList.remove("ball");
      };
    }
    else if (keyState[37] && left.id > 570) {
      document.getElementById(parseInt(actives[0].id) - 1).classList.add("active");
      actives[actives.length - 1].classList.remove("active");
      if (gameState.innerText == "Off") {
        document.getElementById(parseInt(ball.id) - 1).classList.add("ball");
        ball.classList.remove("ball");
      };
    };

    setTimeout(movementLoop, 30);
  };

  movementLoop();
};

export { movePaddle };
