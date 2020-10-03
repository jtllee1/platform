const matchTimer = () => {
  const count = document.getElementById("timer");
  const gameState = document.getElementById("game-state");

  function countdown() {
    if (gameState.innerText == "On") {
      count.innerText = parseInt(count.innerText) - 1;
    };

    if (count.innerText == 0) {
      gameState.innerText = "Off";
    };

    setTimeout(countdown, 1000);
  };

  countdown();
};

export { matchTimer };
