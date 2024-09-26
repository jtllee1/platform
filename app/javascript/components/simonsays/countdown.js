import { setTimeout } from '../tools/timeout_manager';

const countdown = () => {
  const start = document.querySelector(".start");
  const gameState = document.getElementById("game-state");

  if (start.innerText > 1) {
    start.innerText = start.innerText - 1;
    setTimeout(countdown, 1000);
  }
  else if (gameState.innerText == "Comp") {
    start.innerText = "Computer's Turn";
  }
  else if (gameState.innerText == "On") {
    start.innerText = "Your Turn";
  }
};

export { countdown };
