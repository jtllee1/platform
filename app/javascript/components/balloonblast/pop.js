import { setTimeout } from '../tools/timeout_manager';

const pop = (num, blastTiming, shockWaveTiming, number) => {
  const strength = parseInt(document.getElementById(`strength-${number}`).innerText);
  const grid = document.getElementById(`${num}`);
  let rightBlock = false;
  let leftBlock = false;
  let upBlock = false;
  let downBlock = false;
  let active = "";
  const splashSound = document.querySelector(".splash");

  for (let i = 0; i < strength; i++) {
    let right = document.getElementById(parseInt(num) + 1 + i);
    let left = document.getElementById(parseInt(num) - 1 - i);
    let down = document.getElementById(parseInt(num) + 11 * (i + 1));
    let up = document.getElementById(parseInt(num) - 11 * (i + 1));

    setTimeout( function timer() {
      if (grid.classList.contains("balloon")) {
        grid.classList.add("blast");

        setTimeout( function timer() {
          grid.classList.remove("blast");
        }, shockWaveTiming);

        if (right && !grid.classList.contains("right-boundary") && rightBlock == false) {
          if (right.classList.contains("crate") || right.classList.contains("right-boundary")) {
            rightBlock = true;
          };

          if (right.classList.contains("block") != true) {
            if (right.classList.contains("balloon")) {
              let bNumber = 0;

              if (right.classList.contains("balloon-1")) {
                bNumber = 1;
              }
              else if (right.classList.contains("balloon-2")) {
                bNumber = 2;
              };

              pop(right.id, 0, shockWaveTiming, bNumber);
            };

            right.classList.remove("crate");
            right.classList.add("blast-h");
            right.classList.remove("active", "active-2");
          }
          else {
            rightBlock = true;
          };

          setTimeout( function timer() {
            right.classList.remove("blast-h");
          }, shockWaveTiming);
        };

        if (left && !grid.classList.contains("left-boundary") && leftBlock == false) {
          if (left.classList.contains("crate") || left.classList.contains("left-boundary")) {
            leftBlock = true;
          };

          if (left.classList.contains("block") != true) {
            if (left.classList.contains("balloon")) {
              let bNumber = 0;

              if (left.classList.contains("balloon-1")) {
                bNumber = 1;
              }
              else if (left.classList.contains("balloon-2")) {
                bNumber = 2;
              };

              pop(left.id, 0, shockWaveTiming, bNumber);
            };

            left.classList.remove("crate");
            left.classList.add("blast-h");
            left.classList.remove("active", "active-2");
          }
          else {
            leftBlock = true;
          };

          setTimeout( function timer() {
            left.classList.remove("blast-h");
          }, shockWaveTiming);
        };

        if (up && upBlock == false) {
          if (up.classList.contains("crate")) {
            upBlock = true;
          };

          if (up.classList.contains("block") != true) {
            if (up.classList.contains("balloon")) {
              let bNumber = 0;

              if (up.classList.contains("balloon-1")) {
                bNumber = 1;
              }
              else if (up.classList.contains("balloon-2")) {
                bNumber = 2;
              };

              pop(up.id, 0, shockWaveTiming, bNumber);
            };

            up.classList.remove("crate");
            up.classList.add("blast-v");
            up.classList.remove("active", "active-2");
          }
          else {
            upBlock = true;
          };

          setTimeout( function timer() {
            up.classList.remove("blast-v");
          }, shockWaveTiming);
        };

        if (down && downBlock == false) {
          if (down.classList.contains("crate")) {
            downBlock = true;
          };

          if (down.classList.contains("block") != true) {
            if (down.classList.contains("balloon")) {
              let bNumber = 0;

              if (down.classList.contains("balloon-1")) {
                bNumber = 1;
              }
              else if (down.classList.contains("balloon-2")) {
                bNumber = 2;
              };

              pop(down.id, 0, shockWaveTiming, bNumber);
            };

            down.classList.remove("crate");
            down.classList.add("blast-v");
            down.classList.remove("active", "active-2");
          }
          else {
            downBlock = true;
          };

          setTimeout( function timer() {
            down.classList.remove("blast-v");
          }, shockWaveTiming);
        };

        setTimeout( function timer() {
          grid.classList.remove("balloon", `balloon-${number}`, "active", "active-2");
        }, 100);

        splashSound.pause();
        splashSound.currentTime = 0;
        splashSound.play();
      };
    }, blastTiming);
  };
};

export { pop };
