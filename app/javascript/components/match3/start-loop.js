import { generateColor } from '../match3/generate-color';
import { checkMatch } from '../match3/check-match';

const startLoop = () => {
  const gameState = document.getElementById("game-state");

  if (gameState.innerText == "On") {
    let items = document.querySelectorAll(".item");

    if (items.length != 81) {
      for (let column = 0; column < 9; column++) {
        generateColor(column);
      };
      setTimeout(startLoop, 400);
    }
    else {
      checkMatch();
      setTimeout(startLoop, 900);
    };
  };
};

export { startLoop };
