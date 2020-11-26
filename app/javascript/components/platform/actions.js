const actions = (column, rows, timer, change) => {
  const cubes = document.querySelectorAll(".cube");
  const tops = document.querySelectorAll(".top");
  const hit = document.getElementById("hit");
  const gameState = document.getElementById("game-state");
  const cymbalSound = document.querySelector(".cymbal");

  for (let i = 0; i < rows; i++) {
    setTimeout( function timer() {
      tops[32 + column - (i * 4)].classList.add(`${change}`);
    }, i * timer);

    setTimeout( function timer() {
      tops[32 + column - (i * 4)].classList.remove(`${change}`);

      if (i == (rows - 1)) {
        if (cubes[32 + column - (i * 4)].classList.contains("up")) {
          hit.innerText = "Great!";
          cymbalSound.pause();
          cymbalSound.currentTime = 0;
          cymbalSound.play();
        }
        else {
          hit.innerText = "Miss!";

          gameState.innerText = "Off";
        };
      };
    }, (i + 1) * timer);
  };
};

export { actions };
