const startSimon = () => {
  const start = document.querySelector(".start");
  const gameState = document.getElementById("game-state");

  start.addEventListener('click', () => {
    start.classList.add("invisible");
    gameState.innerText = "On";
  });
};

export { startSimon };
