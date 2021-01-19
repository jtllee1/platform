const pop = (num, blastTiming, shockWaveTiming, number) => {
  const strength = parseInt(document.getElementById(`strength-${number}`).innerText);
  const grid = document.getElementById(`${num}`);
  let rightBlock = false;
  let leftBlock = false;
  let upBlock = false;
  let downBlock = false;
  let active = "";
  const splashSound = document.querySelector(".splash");

  if (number == 1) {
    active = "active";
  }
  else if (number == 2) {
    active = "active-2";
  };

  for (let i = 0; i < strength; i++) {
    let right = document.getElementById(parseInt(num) + 1 + i);
    let left = document.getElementById(parseInt(num) - 1 - i);
    let down = document.getElementById(parseInt(num) + 11 * (i + 1));
    let up = document.getElementById(parseInt(num) - 11 * (i + 1));

    setTimeout( function timer() {
      grid.classList.add("blast");

      setTimeout( function timer() {
        grid.classList.remove("blast");
      }, shockWaveTiming);

      if (right && !grid.classList.contains("right-boundary") && rightBlock == false) {
        if (right.classList.contains("crate") || right.classList.contains("right-boundary")) {
          rightBlock = true;
        };

        if (right.classList.contains("block") != true) {
          right.classList.remove("crate");
          right.classList.add("blast-h");
          right.classList.remove(active);
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
          left.classList.remove("crate");
          left.classList.add("blast-h");
          left.classList.remove(active);
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
          up.classList.remove("crate");
          up.classList.add("blast-v");
          up.classList.remove(active);
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
          down.classList.remove("crate");
          down.classList.add("blast-v");
          down.classList.remove(active);
        }
        else {
          downBlock = true;
        };

        setTimeout( function timer() {
          down.classList.remove("blast-v");
        }, shockWaveTiming);
      };

      grid.classList.remove(`balloon-${number}`);

      splashSound.pause();
      splashSound.currentTime = 0;
      splashSound.play();
    }, blastTiming);
  };
};

export { pop };
