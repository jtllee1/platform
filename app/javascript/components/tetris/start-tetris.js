import { generateShape } from '../tetris/generate-shape';

const startTetris = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const start = document.getElementById("start");
  const shapes = ["S", "Z", "T", "L", "Line", "M-L", "Sq" ];
  const colors = ["red", "orange", "green", "cyan", "yellow", "purple"];
  let gameState = false;
  let next = false;
  let time = 500;

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
  });

  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 32) {
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

      let dropping = document.querySelectorAll(".dropping");
      let bottom = document.getElementById(parseInt(dropping[dropping.length - 1].id));
      let down = document.getElementById(parseInt(bottom.id) + 16);

      if (bottom.classList.contains("down-boundary") == false && down.classList.contains("dropped") == false) {
        for (let step = 0; step < dropping.length; step++) {

          let index = dropping.length - step - 1;

          dropping[index].classList.remove("dropping");
          dropping[index].classList.remove(`${color}`);
          document.getElementById(parseInt(dropping[index].id) + 16).classList.add("dropping");
          document.getElementById(parseInt(dropping[index].id) + 16).classList.add(`${color}`);
        };
      }
      else {
        dropping.forEach(drop => {
          drop.classList.remove("dropping");
          drop.classList.add("dropped");

          next = true;
        });
      };
    };

    setTimeout(drop, time);
  };

  drop();
};

export { startTetris };
