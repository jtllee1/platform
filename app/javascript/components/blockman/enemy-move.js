import { move } from '../blockman/move';

const enemyMove = () => {
  const options = ["right", "left"];
  const enemyHealth = document.querySelector(".health-2");
  const enemyLives = enemyHealth.querySelectorAll(".life");
  const enemy = document.querySelector(".cube-enemy");
  const enemyPart = enemy.querySelector(".box");

  let selection = Math.floor(Math.random() * options.length);

  if (enemyLives.length < 0) {
    if ((enemyPart.classList.contains("move-right2") && selection == 0) ||
      (enemyPart.classList.contains("move-left2") && selection == 1)) {
      enemyMove();
    }
    else {
      move(options[selection], 2);

      setTimeout(enemyMove, 600);
    };
  };
};

export { enemyMove };
