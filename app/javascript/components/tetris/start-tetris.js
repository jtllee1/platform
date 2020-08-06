import { generateShape } from '../tetris/generate-shape';
import { moveTetris } from '../tetris/move-tetris';

const startTetris = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const start = document.getElementById("start");
  const shapes = ["S", "Z", "T", "L", "M-L", "Sq", "Line" ];
  const colors = ["red", "orange", "green", "cyan", "yellow", "purple"];
  let gameState = false;
  let next = false;
  let time = 500;
  let dropping = "";
  let bottom = "";
  var keyState = {};

  let shape = shapes[Math.floor(Math.random() * 7)];
  let color = colors[Math.floor(Math.random() * 6)];

  start.addEventListener('click', () => {
      generateShape(shape, color);
      gameState = true;
  });

  document.addEventListener('keydown', (e) => {
    if (e.keyCode == 32) {
      time = 50;
    };
    if (e.keyCode == 39 || e.keyCode == 37) {
      time = 100;
      keyState[e.keyCode] = true;
    };
  });

  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 32) {
      time = 500;
    };
    if (e.keyCode == 39 || e.keyCode == 37) {
      time = 500;
    };
  });

  function drop() {
    if (gameState) {
      if (next) {
        shape = shapes[Math.floor(Math.random() * 7)];
        color = colors[Math.floor(Math.random() * 6)];

        generateShape(shape, color);

        next = false;
      };

      let dropCondition = false;
      dropping = document.querySelectorAll(".dropping");

      if (dropping[dropping.length - 1] !== undefined) {
        bottom = document.getElementById(parseInt(dropping[dropping.length - 1].id));
        if (bottom.classList.contains("down-boundary") == false) {
          dropCondition = true;
        }
      }
      else {
        dropCondition = false;
      }

      let down = true;

      for (let step = 0; step < dropping.length; step++) {
        if (document.getElementById(parseInt(dropping[step].id) + 16)) {
          if (document.getElementById(parseInt(dropping[step].id) + 16).classList.contains("dropped")) {
            down = false;
          };
        };
      };

      let notMoving = true;

      if (keyState[39] || keyState[37]) {
        moveTetris(keyState,dropping, color);
        keyState[39] = false;
        keyState[37] = false;
      }
      else if (dropCondition) {
        for (let step = 0; step < dropping.length; step++) {

          let index = dropping.length - step - 1;

          if (down) {
            dropping[index].classList.remove("dropping");
            dropping[index].classList.remove(`${color}`);
            document.getElementById(parseInt(dropping[index].id) + 16).classList.add("dropping");
            document.getElementById(parseInt(dropping[index].id) + 16).classList.add(`${color}`);
          }
          else {
            dropping.forEach(drop => {
              drop.classList.remove("dropping");
              drop.classList.add("dropped");
            });

            next = true;
          };
        };
      }
      else if (dropCondition == false) {
        dropping.forEach(drop => {
          drop.classList.remove("dropping");
          drop.classList.add("dropped");
        });

        next = true;
      };
    };

    setTimeout(drop, time);
  };

  drop();
};

export { startTetris };
