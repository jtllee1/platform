import { setTimeout } from '../tools/timeout_manager';
import { generateColor } from '../match3/generate-color';
import { checkMatch } from '../match3/check-match';

const dropColor = (column, row, color) => {
  const grids = document.querySelectorAll(".grid");
  const dropSound = document.querySelector(".m-drop");
  const gameState = document.getElementById("game-state");

  let dropSpeed = 20;
  let loopSpeed = 7;

  function loop() {
    let itemsCheck = document.querySelectorAll(".item");

    if (itemsCheck.length != 81) {
      for(let row = 0; row < 8; row++) {
        for (let column = 0; column < 9; column++) {
          let active = grids[71 - column - (row * 9)];
          let down = grids[80 - column - (row * 9)];

          if (!down.classList.contains("item") && active.classList.contains("item")) {
            let color = grids[active.id].className.split(" ").pop();

            setTimeout( function timer() {
              down.classList.remove("item", "green", "blue", "orange", "purple", "red", "yellow", "red", "yellow", "cyan", "pink");
              down.classList.add("item", `${color}`);
              active.classList.remove("item", "green", "blue", "orange", "purple", "red", "yellow", "red", "yellow", "cyan", "pink");
            }, row * dropSpeed );
          };
        };
      };
      setTimeout(generateColor, loopSpeed * dropSpeed);
    }
    else if (itemsCheck.length == 81) {
      checkMatch()
    };

    if (gameState.innerText == "On") {
      setTimeout(loop, loopSpeed * dropSpeed);
    };
  };

  loop();
};

export { dropColor };
