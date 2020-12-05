import { actions } from '../platform/actions';

const playLoop = (music) => {
  const gameState = document.getElementById("game-state");
  const score = document.getElementById("score");

  if (gameState.innerText == "On") {
    let column = Math.floor(Math.random() * 4);

    actions(column, 9, 300, "blue", music);

    let time = Math.floor(Math.random() * 4) + 1;

    if (parseInt(score.innerText) >= 8000) {
      setTimeout(playLoop, time * 600);
    }
    else if (parseInt(score.innerText) >= 4000) {
      setTimeout(playLoop, time * 800);
    }
    else {
      setTimeout(playLoop, time * 1000);
    };
  };
};

export { playLoop };
