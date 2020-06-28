import { clearGrid } from '../components/clear-grid';
import { enemyMovement } from '../components/enemy-movement';

const generateEnemies = () => {
  const start = document.getElementById("start");
  const scoreBoard = document.getElementById("score");

  start.addEventListener('click', () => {
    const level = document.getElementById("level").innerText;
    const ids = [];
    const level1 = [];
    const level2 = [];

    clearGrid();
    scoreBoard.innerText = 0;

    if (level == 1) {
      var limit1 = 20;
      var limit2 = 0;
    }
    else if (level == 2) {
      var limit1 = 10;
      var limit2 = 10;
    }
    else if (level == 3) {
      var limit1 = 0;
      var limit2 = 20;
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
        else if (level2.length < limit2) {
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
