import { setTimeout } from '../tools/timeout_manager';
import { addEventListener } from '../tools/event_listener_manager';

const movement = () => {
  addEventListener( window,"keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const grids = document.getElementById("grids-heli");

  var keyState = {};

  addEventListener(document, 'keydown', (e) => {
    keyState[e.keyCode] = true;
  });

  addEventListener(document, 'keyup', (e) => {
    keyState[e.keyCode] = false;
  });

  addEventListener(grids, 'mousedown', (e) => {
    keyState[32] = true;
  });

  addEventListener(grids, 'mouseup', (e) => {
    keyState[32] = false;
  });

  function movementLoop() {
    let actives = document.querySelectorAll(".active");
    let top = document.getElementById(parseInt(actives[0].id) - 100);
    let bottom = document.getElementById(parseInt(actives[9].id) + 100);

    if (keyState[32] && top) {
      actives.forEach(active => {
        let up = document.getElementById(parseInt(active.id) - 100);
        let down = document.getElementById(parseInt(active.id) + 100);

        up.classList.add("active");

        if (down) {
          down.classList.remove("active");
        };
      });
    }
    else if (keyState[32] == false && bottom) {
      actives.forEach(active => {
        let up = document.getElementById(parseInt(active.id) - 100);
        let down = document.getElementById(parseInt(active.id) + 100);

        down.classList.add("active");

        if (up) {
          up.classList.remove("active");
        };
      });
    };

    setTimeout(movementLoop, 40);
  };

  movementLoop();
};

export { movement };
