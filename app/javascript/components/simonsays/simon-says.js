import { selection } from '../simonsays/selection';

const simonSays = () => {
  const option1 = document.getElementById("o-1");
  const option2 = document.getElementById("o-2");
  const option3 = document.getElementById("o-3");
  const option4 = document.getElementById("o-4");
  const option5 = document.getElementById("o-5");

  option1.addEventListener('click', () => {
    let gameState = document.getElementById("game-state");

    if (gameState.innerText == "On") {
      selection(1)
    };
  });

  option2.addEventListener('click', () => {
    let gameState = document.getElementById("game-state");

    if (gameState.innerText == "On") {
      selection(2)
    };
  });

  option3.addEventListener('click', () => {
    let gameState = document.getElementById("game-state");

    if (gameState.innerText == "On") {
      selection(3)
    };
  });

  option4.addEventListener('click', () => {
    let gameState = document.getElementById("game-state");

    if (gameState.innerText == "On") {
      selection(4)
    };
  });

  option5.addEventListener('click', () => {
    let gameState = document.getElementById("game-state");

    if (gameState.innerText == "On") {
      selection(5)
    };
  });
};

export { simonSays };
