import { setTimeout } from 'components/tools/timeout_manager';
import { move } from 'components/blockman/move';

const enemyMove = (speed) => {
  const options = ["right", "left"];
  const enemyHealth = document.querySelector(".health-2");
  const enemyLives = enemyHealth.querySelectorAll(".life");
  const enemy = document.querySelector(".cube-enemy");
  const enemyPart = enemy.querySelector(".box");
  const health = document.querySelector(".health-1");
  const lives = health.querySelectorAll(".life");

  let selection = Math.floor(Math.random() * options.length);

  if ((enemyLives.length > 0) && (lives.length > 0)) {
    if ((enemyPart.classList.contains("move-right2") && selection == 0) ||
      (enemyPart.classList.contains("move-left2") && selection == 1)) {
      enemyMove(speed);
    }
    else {
      move(options[selection], 2);

      setTimeout( function timer() {
        enemyMove(speed);
      }, speed);
    };
  };
};

export { enemyMove };
