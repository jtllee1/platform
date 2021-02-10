import { shoot } from '../blockman/shoot';

const enemyShoot = () => {
  const enemyHealth = document.querySelector(".health-2");
  const enemyLives = enemyHealth.querySelectorAll(".life");

  if (enemyLives.length > 0) {
    shoot("backward");

    setTimeout(enemyShoot, 1000);
  };
};

export { enemyShoot };
