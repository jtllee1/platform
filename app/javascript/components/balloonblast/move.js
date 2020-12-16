import { drop } from '../balloonblast/drop';

const move = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  var keyState = {};

  document.addEventListener('keydown', (e) => {
    keyState[e.keyCode] = true;
  });

  document.addEventListener('keyup', (e) => {
    keyState[e.keyCode] = false;

    if (e.keyCode == 32) {
      drop();
    };
  });

  function movementLoop() {
    let active = document.querySelector(".active");
    let right = document.getElementById(parseInt(active.id) + 1);
    let left = document.getElementById(parseInt(active.id) - 1);
    let down = document.getElementById(parseInt(active.id) + 11);
    let up = document.getElementById(parseInt(active.id) - 11);

    if (keyState[39] && right && active.classList.contains("right-boundary") == false && right.classList.contains("block") == false
      && right.classList.contains("crate") == false) {
      right.classList.add("active");
      active.classList.remove("active");
    }
    else if (keyState[37] && left && active.classList.contains("left-boundary") == false && left.classList.contains("block") == false
      && left.classList.contains("crate") == false) {
      left.classList.add("active");
      active.classList.remove("active");
    }
    else if (keyState[40] && down && active.classList.contains("down-boundary") == false && down.classList.contains("block") == false
      && down.classList.contains("crate") == false) {
      down.classList.add("active");
      active.classList.remove("active");
    }
    else if (keyState[38] && up && active.classList.contains("up-boundary") == false && up.classList.contains("block") == false
      && up.classList.contains("crate") == false) {
      up.classList.add("active");
      active.classList.remove("active");
    };

    setTimeout(movementLoop, 100);
  };

  movementLoop();
};

export { move };
