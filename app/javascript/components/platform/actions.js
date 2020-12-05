const actions = (column, rows, timer, change, music) => {
  const cubes = document.querySelectorAll(".cube");
  const tops = document.querySelectorAll(".top");
  const hit = document.getElementById("hit");
  const gameState = document.getElementById("game-state");
  const cymbalSound = document.querySelector(".cymbal");
  const score = document.getElementById("score");

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
          score.innerText = parseInt(score.innerText) + 500;

          tops[32 + column - (i * 4)].classList.add("yellow")

          setTimeout( function timer() {
            tops[32 + column - (i * 4)].classList.remove("yellow");
          }, 300);
        }
        else {
          hit.innerText = "Miss!";

          gameState.innerText = "Off";

          tops[32 + column - (i * 4)].classList.add("red");

          music.pause();

          setTimeout( function timer() {
            tops[32 + column - (i * 4)].classList.remove("red");
          }, 300);
        };
      };
    }, (i + 1) * timer);
  };
};

export { actions };
