import { generateShape } from '../tetris/generate-shape';

const startTetris = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const start = document.getElementById("start");
  const shapes = ["S", "Z", "T", "L", "M-L", "Sq" ];
  const colors = ["red", "orange", "green", "cyan", "yellow", "purple"];
  let gameState = false;
  let next = false;
  let time = 500;
  let dropping = "";
  let bottom = "";

  let shape = shapes[Math.floor(Math.random() * 7)];
  let color = colors[Math.floor(Math.random() * 6)];

  start.addEventListener('click', () => {
    setTimeout(function timer() {
      generateShape(shape, color);
      gameState = true;
    }, 500 );
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

      dropping = document.querySelectorAll(".dropping");

      if (dropping[dropping.length - 1] !== undefined) {
        bottom = document.getElementById(parseInt(dropping[dropping.length - 1].id));
      };

      let down = true;

      for (let step = 0; step < dropping.length; step++) {
        if (document.getElementById(parseInt(dropping[step].id) + 16)) {
          if (document.getElementById(parseInt(dropping[step].id) + 16).classList.contains("dropped")) {
            down = false;
          };
        };
      };

      if (bottom.classList.contains("down-boundary") == false) {
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
          }
        };
      }
      else {
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
