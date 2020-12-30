const pop = (num, blastTiming, shockWaveTiming) => {
  const strength = parseInt(document.getElementById("strength").innerText);
  const grid = document.getElementById(`${num}`);
  let rightBlock = false;
  let leftBlock = false;
  let upBlock = false;
  let downBlock = false;

  for (let i = 0; i < strength; i++) {
    let right = document.getElementById(parseInt(num) + 1 + i);
    let left = document.getElementById(parseInt(num) - 1 - i);
    let down = document.getElementById(parseInt(num) + 11 * (i + 1));
    let up = document.getElementById(parseInt(num) - 11 * (i + 1));

    setTimeout( function timer() {
      if (right && !grid.classList.contains("right-boundary") && rightBlock == false) {
        if (right.classList.contains("crate") || right.classList.contains("right-boundary")) {
          rightBlock = true;
        };

        if (right.classList.contains("block") != true) {
          right.classList.remove("crate");
          right.classList.add("blast");
          right.classList.remove("active");
        }
        else {
          rightBlock = true;
        };

        setTimeout( function timer() {
          right.classList.remove("blast");
        }, shockWaveTiming);
      };
      if (left && !grid.classList.contains("left-boundary") && leftBlock == false) {
        if (left.classList.contains("crate") || left.classList.contains("left-boundary")) {
          leftBlock = true;
        };

        if (left.classList.contains("block") != true) {
          left.classList.remove("crate");
          left.classList.add("blast");
          left.classList.remove("active");
        }
        else {
          leftBlock = true;
        };

        setTimeout( function timer() {
          left.classList.remove("blast");
        }, shockWaveTiming);
      };
      if (up && upBlock == false) {
        if (up.classList.contains("crate")) {
          upBlock = true;
        };

        if (up.classList.contains("block") != true) {
          up.classList.remove("crate");
          up.classList.add("blast");
          up.classList.remove("active");
        }
        else {
          upBlock = true;
        };

        setTimeout( function timer() {
          up.classList.remove("blast");
        }, shockWaveTiming);
      };
      if (down && downBlock == false) {
        if (down.classList.contains("crate")) {
          downBlock = true;
        };

        if (down.classList.contains("block") != true) {
          down.classList.remove("crate");
          down.classList.add("blast");
          down.classList.remove("active");
        }
        else {
          downBlock = true;
        };

        setTimeout( function timer() {
          down.classList.remove("blast");
        }, shockWaveTiming);
      };

      grid.classList.remove("balloon");
    }, blastTiming);
  };
};

export { pop };
