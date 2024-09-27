import { addEventListener } from 'components/tools/event_listener_manager';
import { move } from 'components/blockman/move';
import { shoot } from 'components/blockman/shoot';
import { enemyMove } from 'components/blockman/enemy-move';
import { enemyShoot } from 'components/blockman/enemy-shoot';

const startBlockman = () => {
  const shootStatus = document.querySelector(".shoot-status-1");
  const start = document.getElementById("start");
  const data = document.querySelector(".data");

  addEventListener(start, 'click', (e) => {
    const level = document.getElementById("level").innerText;
    const remainingLives = document.querySelectorAll(".empty");

    remainingLives.forEach(life => {
      life.classList.remove("empty");
      life.classList.add("life");
    });

    let moveSpeed = 600;
    let shootSpeed = 2000;

    if (level == "2") {
      moveSpeed = 500;
      shootSpeed = 1800;
    }
    else if (level == "3") {
      moveSpeed = 400;
      shootSpeed = 1600;
    };

    enemyMove(moveSpeed);
    enemyShoot(shootSpeed);
    data.classList.add("invisible");
  });

  addEventListener(document, 'keyup', (e) => {
    const player = document.querySelector(".health-1")
    const lives = player.querySelectorAll(".life");

    if (lives.length > 0) {
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
    };
  });
};

export { startBlockman };
