import { setTimeout } from 'components/tools/timeout_manager';
import { addEventListener } from 'components/tools/event_listener_manager';
import { drop } from 'components/balloonblast/drop';
import { addBar } from 'components/balloonblast/add-bar';

const move = () => {
  addEventListener(window, "keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const limit = document.getElementById("limit-1");
  const strength = document.getElementById("strength-1");
  const limit2 = document.getElementById("limit-2");
  const strength2 = document.getElementById("strength-2");

  var keyState = {};

  addEventListener(document, 'keydown', (e) => {
    keyState[e.keyCode] = true;
  });

  addEventListener(document, 'keyup', (e) => {
    keyState[e.keyCode] = false;

    if (e.keyCode == 32) {
      drop("active", 1);
    }
    else if (e.keyCode == 13) {
      drop("active-2", 2);
    };
  });

  function movementLoop() {
    let active = document.querySelector(".active");
    let right = document.getElementById(parseInt(active.id) + 1);
    let left = document.getElementById(parseInt(active.id) - 1);
    let down = document.getElementById(parseInt(active.id) + 11);
    let up = document.getElementById(parseInt(active.id) - 11);
    const powerSound = document.querySelector(".power-up");

    if (keyState[68] && right && active.classList.contains("right-boundary") == false && right.classList.contains("block") == false
      && right.classList.contains("crate") == false && right.classList.contains("balloon") == false && right.classList.contains("active-2") == false) {
      right.classList.add("active");
      active.classList.remove("active");

      if (right.classList.contains("exballoon")) {
        right.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;

        addBar("l-1", "bar-ex");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      }
      else if (right.classList.contains("power")) {
        right.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;

        addBar("s-1", "bar-power");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      };
    }
    else if (keyState[65] && left && active.classList.contains("left-boundary") == false && left.classList.contains("block") == false
      && left.classList.contains("crate") == false && left.classList.contains("balloon") == false && left.classList.contains("active-2") == false) {
      left.classList.add("active");
      active.classList.remove("active");

      if (left.classList.contains("exballoon")) {
        left.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;

        addBar("l-1", "bar-ex");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      }
      else if (left.classList.contains("power")) {
        left.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;

        addBar("s-1", "bar-power");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      };
    }
    else if (keyState[83] && down && active.classList.contains("down-boundary") == false && down.classList.contains("block") == false
      && down.classList.contains("crate") == false && down.classList.contains("balloon") == false && down.classList.contains("active-2") == false) {
      down.classList.add("active");
      active.classList.remove("active");

      if (down.classList.contains("exballoon")) {
        down.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;

        addBar("l-1", "bar-ex");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      }
      else if (down.classList.contains("power")) {
        down.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;

        addBar("s-1", "bar-power");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      };
    }
    else if (keyState[87] && up && active.classList.contains("up-boundary") == false && up.classList.contains("block") == false
      && up.classList.contains("crate") == false && up.classList.contains("balloon") == false && up.classList.contains("active-2") == false) {
      up.classList.add("active");
      active.classList.remove("active");

      if (up.classList.contains("exballoon")) {
        up.classList.remove("exballoon");

        limit.innerText = parseInt(limit.innerText) + 1;

        addBar("l-1", "bar-ex");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      }
      else if (up.classList.contains("power")) {
        up.classList.remove("power");

        strength.innerText = parseInt(strength.innerText) + 1;

        addBar("s-1", "bar-power");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
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
    const powerSound = document.querySelector(".power-up");

    if (keyState[39] && right && active.classList.contains("right-boundary") == false && right.classList.contains("block") == false
      && right.classList.contains("crate") == false && right.classList.contains("balloon") == false && right.classList.contains("active") == false) {
      right.classList.add("active-2");
      active.classList.remove("active-2");

      if (right.classList.contains("exballoon")) {
        right.classList.remove("exballoon");

        limit2.innerText = parseInt(limit2.innerText) + 1;

        addBar("l-2", "bar-ex");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      }
      else if (right.classList.contains("power")) {
        right.classList.remove("power");

        strength2.innerText = parseInt(strength2.innerText) + 1;

        addBar("s-2", "bar-power");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      };
    }
    else if (keyState[37] && left && active.classList.contains("left-boundary") == false && left.classList.contains("block") == false
      && left.classList.contains("crate") == false && left.classList.contains("balloon") == false && left.classList.contains("active") == false) {
      left.classList.add("active-2");
      active.classList.remove("active-2");

      if (left.classList.contains("exballoon")) {
        left.classList.remove("exballoon");

        limit2.innerText = parseInt(limit2.innerText) + 1;

        addBar("l-2", "bar-ex");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      }
      else if (left.classList.contains("power")) {
        left.classList.remove("power");

        strength2.innerText = parseInt(strength2.innerText) + 1;

        addBar("s-2", "bar-power");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      };
    }
    else if (keyState[40] && down && active.classList.contains("down-boundary") == false && down.classList.contains("block") == false
      && down.classList.contains("crate") == false && down.classList.contains("balloon") == false && down.classList.contains("active") == false) {
      down.classList.add("active-2");
      active.classList.remove("active-2");

      if (down.classList.contains("exballoon")) {
        down.classList.remove("exballoon");

        limit2.innerText = parseInt(limit2.innerText) + 1;

        addBar("l-2", "bar-ex");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      }
      else if (down.classList.contains("power")) {
        down.classList.remove("power");

        strength2.innerText = parseInt(strength2.innerText) + 1;

        addBar("s-2", "bar-power");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      };
    }
    else if (keyState[38] && up && active.classList.contains("up-boundary") == false && up.classList.contains("block") == false
      && up.classList.contains("crate") == false && up.classList.contains("balloon") == false && up.classList.contains("active") == false) {
      up.classList.add("active-2");
      active.classList.remove("active-2");

      if (up.classList.contains("exballoon")) {
        up.classList.remove("exballoon");

        limit2.innerText = parseInt(limit2.innerText) + 1;

        addBar("l-2", "bar-ex");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      }
      else if (up.classList.contains("power")) {
        up.classList.remove("power");

        strength2.innerText = parseInt(strength2.innerText) + 1;

        addBar("s-2", "bar-power");

        powerSound.pause();
        powerSound.currentTime = 0;
        powerSound.play();
      };
    };

    setTimeout(movementLoop2, 100);
  };

  movementLoop();
  movementLoop2();
};

export { move };
