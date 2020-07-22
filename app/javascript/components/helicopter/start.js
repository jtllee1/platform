import { obstacle } from '../helicopter/obstacle';

const start = () => {
  const start = document.getElementById("start");
  const text = document.getElementById("190");
  let on = false;

  start.addEventListener('click', () => {
    on = true;

    for (let step = 0; step < 3; step++) {
      setTimeout( function timer() {
        if (step == 0) {
          text.innerText = "Ready?";
        }
        else if (step == 1) {
          text.innerText = "Start!";
        }
        else {
          text.innerText = "";
        }
      }, step * 1000 );
    };
  });

  function game() {
    if (on) {
      obstacle();
    };

    setTimeout(game, 3000);
  };

  game();
};

export { start };
