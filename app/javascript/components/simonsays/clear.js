const clear = () => {
  const selections = document.querySelectorAll(".selection");
  const gameState = document.getElementById("game-state");

  selections.forEach(selection => {
    selection.remove();
  });

  gameState.innerText = "On";
};

export { clear };
