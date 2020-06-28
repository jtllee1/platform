import { scoring } from '../components/scoring';

const laser = () => {
  document.addEventListener('keyup', (e) => {
    let active = document.querySelector(".active");
    let up = document.getElementById(parseInt(active.id) - 20);
    let i = 20;
    let j = 0;
    let keepGoing = true;

    if (e.keyCode === 32) {
      for (let step = 0; step < 20; step++) {
        setTimeout( function timer() {
          if (up.id - i >= -19 && keepGoing){
            let object = document.getElementById(parseInt(active.id) - i);
            if (object.classList.contains("level-2")) {
              object.classList.remove("level-2");
              i = i + 20;
              keepGoing = false;
              scoring(300, false);
            }
            else if (object.classList.contains("enemy")) {
              object.classList.remove("enemy");
              i = i + 20;
              keepGoing = false;
              scoring(100, false);
            }
            else {
              object.classList.add("laser");
              i = i + 20;
            }
          };
        }, step * 18 );

        setTimeout( function timer() {
          if (up.id - j >= -19){
            document.getElementById(parseInt(active.id) - j).classList.remove("laser");
            j = j + 20;
          };
        }, step * 18 );
      };
    };
  });
};

export { laser };
