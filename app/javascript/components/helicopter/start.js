import { obstacle } from '../helicopter/obstacle';
import { createClouds } from '../helicopter/create-clouds';

const start = () => {
  const start = document.getElementById("start");
  const text = document.getElementById("1847");
  const grids = document.querySelectorAll(".grid-heli");
  const score = document.getElementById("score");
  const helicopterSound = document.querySelector(".helicopter");
  let on = false;

  createClouds(313);
  createClouds(566);
  createClouds(1654);
  createClouds(2914);
  createClouds(3373);

  start.addEventListener('click', () => {
    on = true;

    helicopterSound.play();

    grids.forEach(grid => {
      grid.classList.remove("cover");
    });

    score.innerText = 0;

    // for (let step = 0; step < 3; step++) {
    //   setTimeout( function timer() {
    //     if (step == 0) {
    //       text.innerText = "Ready?";
    //     }
    //     else if (step == 1) {
    //       text.innerText = "Start!";
    //     }
    //     else {
    //       text.innerText = "";
    //     }
    //   }, step * 1000 );
    // };
  });

  function game() {
    if (on) {
      obstacle(40);
    };

    setTimeout(game, 2000);
  };

  function stop() {
    grids.forEach(grid => {
      if (grid.classList.contains("active") && grid.classList.contains("obstacle")) {
        on = false;

        grids.forEach(grid => {
          grid.classList.add("cover");
        });

        helicopterSound.pause();
        helicopterSound.currentTime = 0;
      };
    });

    setTimeout(stop, 0);
  };

  function timer () {
    if (on) {
      let value = parseInt(score.innerText);

      score.innerText = value + 10;
    };

    setTimeout(timer, 2000);
  };

  game();
  stop();
  timer();
};

export { start };
