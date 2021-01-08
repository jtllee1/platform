import { drop } from '../balloonblast/drop';

const move = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const limit = document.getElementById("limit");
  const strength = document.getElementById("strength");

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

    if (keyState[68] && right && active.classList.contains("right-boundary") == false && right.classList.contains("block") == false
      && right.classList.contains("crate") == false && right.classList.contains("balloon") == false) {
      right.classList.add("active");
      active.classList.remove("active");

      if (right.classList.contains("exballoon")) {
        right.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;
      }
      else if (right.classList.contains("power")) {
        right.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;
      };
    }
    else if (keyState[65] && left && active.classList.contains("left-boundary") == false && left.classList.contains("block") == false
      && left.classList.contains("crate") == false && left.classList.contains("balloon") == false) {
      left.classList.add("active");
      active.classList.remove("active");

      if (left.classList.contains("exballoon")) {
        left.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;
      }
      else if (left.classList.contains("power")) {
        left.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;
      };
    }
    else if (keyState[83] && down && active.classList.contains("down-boundary") == false && down.classList.contains("block") == false
      && down.classList.contains("crate") == false && down.classList.contains("balloon") == false) {
      down.classList.add("active");
      active.classList.remove("active");

      if (down.classList.contains("exballoon")) {
        down.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;
      }
      else if (down.classList.contains("power")) {
        down.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;
      };
    }
    else if (keyState[87] && up && active.classList.contains("up-boundary") == false && up.classList.contains("block") == false
      && up.classList.contains("crate") == false && up.classList.contains("balloon") == false) {
      up.classList.add("active");
      active.classList.remove("active");

      if (up.classList.contains("exballoon")) {
        up.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;
      }
      else if (up.classList.contains("power")) {
        up.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;
      };
    };

    setTimeout(movementLoop, 100);
  };

  function movementLoop2() {
    let active = document.querySelector(".active-2");
    let right = document.getElementById(parseInt(active.id) + 1);
    let left = document.getElementById(parseInt(active.id) - 1);
    let down = document.getElementById(parseInt(active.id) + 11);
    let up = document.getElementById(parseInt(active.id) - 11);

    if (keyState[39] && right && active.classList.contains("right-boundary") == false && right.classList.contains("block") == false
      && right.classList.contains("crate") == false && right.classList.contains("balloon") == false) {
      right.classList.add("active-2");
      active.classList.remove("active-2");

      if (right.classList.contains("exballoon")) {
        right.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;
      }
      else if (right.classList.contains("power")) {
        right.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;
      };
    }
    else if (keyState[37] && left && active.classList.contains("left-boundary") == false && left.classList.contains("block") == false
      && left.classList.contains("crate") == false && left.classList.contains("balloon") == false) {
      left.classList.add("active-2");
      active.classList.remove("active-2");

      if (left.classList.contains("exballoon")) {
        left.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;
      }
      else if (left.classList.contains("power")) {
        left.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;
      };
    }
    else if (keyState[40] && down && active.classList.contains("down-boundary") == false && down.classList.contains("block") == false
      && down.classList.contains("crate") == false && down.classList.contains("balloon") == false) {
      down.classList.add("active-2");
      active.classList.remove("active-2");

      if (down.classList.contains("exballoon")) {
        down.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;
      }
      else if (down.classList.contains("power")) {
        down.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;
      };
    }
    else if (keyState[38] && up && active.classList.contains("up-boundary") == false && up.classList.contains("block") == false
      && up.classList.contains("crate") == false && up.classList.contains("balloon") == false) {
      up.classList.add("active-2");
      active.classList.remove("active-2");

      if (up.classList.contains("exballoon")) {
        up.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;
      }
      else if (up.classList.contains("power")) {
        up.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;
      };
    };

    setTimeout(movementLoop2, 100);
  };

  movementLoop();
  movementLoop2();
};

export { move };
