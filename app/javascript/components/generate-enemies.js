import { enemyMovement } from '../components/enemy-movement';

const generateEnemies = () => {
  const start = document.getElementById("start");
  const grids = document.querySelectorAll(".grid");

  start.addEventListener('click', () => {
    const level = document.getElementById("level").innerText;
    const ids = [];
    const level1 = [];
    const level2 = [];

    grids.forEach((grid) => {
      grid.classList.remove("enemy");
      grid.classList.remove("level-2");
    });

    if (level == 1) {
      var limit1 = 20;
    }
    else if (level == 2) {
      var limit1 = 10;
    }

    for (let i = 0; ids.length < 20; i++) {
      let chosenId = Math.floor(Math.random()*200) + 1;
      if (ids.includes(chosenId) == false) {
        ids.push(chosenId)

        function checkEnemyLevel(enemy, level) {
          level.push(enemy);
        };

        document.getElementById(chosenId).classList.add("enemy");

        if (level1.length < limit1) {
          checkEnemyLevel(chosenId, level1);
        }
        else if (level2.length < 20) {
          document.getElementById(chosenId).classList.add("level-2");
          checkEnemyLevel(chosenId, level2);
        }
      };
    };
  });

  function enemyMovementLoop() {
    const enemies = document.querySelectorAll(".enemy");

    enemies.forEach((enemy) => {
      enemyMovement(enemy);
    });

    setTimeout(enemyMovementLoop, 1000);
  };

  enemyMovementLoop();
};

export { generateEnemies };
