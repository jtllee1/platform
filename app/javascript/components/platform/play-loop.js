import { actions } from '../platform/actions';

const playLoop = () => {
  const gameState = document.getElementById("game-state");

  if (gameState.innerText == "On") {
    let column = Math.floor(Math.random() * 4);

    actions(column, 9, 200, "blue");

    let time = Math.floor(Math.random() * 4) + 1;

    setTimeout( playLoop, time * 1000);
  };
};

export { playLoop };
