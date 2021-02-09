import { move } from '../blockman/move';
import { shoot } from '../blockman/shoot';
import { enemyMove } from '../blockman/enemy-move';

const startBlockman = () => {
  const shootStatus = document.querySelector(".shoot-status-1");
  const start = document.getElementById("start");
  const data = document.querySelector(".data");

  start.addEventListener('click', (e) => {
    enemyMove();
    data.classList.add("invisible");
  });

  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 37) {
      move("left", 1);
    }
    else if (e.keyCode == 39) {
      move("right", 1);
    };

    if (e.keyCode == 32) {
      if (shootStatus.innerText == "on") {
        shoot("forward");
        shootStatus.innerText = "off";
      };
    };
  });
};

export { startBlockman };
