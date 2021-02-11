import { shoot } from '../blockman/shoot';

const enemyShoot = () => {
  const enemyHealth = document.querySelector(".health-2");
  const enemyLives = enemyHealth.querySelectorAll(".life");
  const health = document.querySelector(".health-1");
  const lives = health.querySelectorAll(".life");

  if ((enemyLives.length > 0) && (lives.length > 0)) {
    shoot("backward");

    setTimeout(enemyShoot, 1000);
  };
};

export { enemyShoot };
