const movePaddle = () => {
  var keyState = {};

  document.addEventListener('keydown', (e) => {
    keyState[e.keyCode] = true;
  });

  document.addEventListener('keyup', (e) => {
    keyState[e.keyCode] = false;
  });

  function movementLoop() {
    let actives = document.querySelectorAll(".active");
    let gameState = document.getElementById("game-state");
    let ball = document.querySelector(".ball");
    let right = document.getElementById(parseInt(actives[2].id) + 1);
    let left = document.getElementById(parseInt(actives[0].id) - 1);

    if (keyState[39] && right) {
      document.getElementById(parseInt(actives[2].id) + 1).classList.add("active");
      actives[0].classList.remove("active");
      if (gameState.innerText == "Off") {
        document.getElementById(parseInt(ball.id) + 1).classList.add("ball");
        ball.classList.remove("ball");
      };
    }
    else if (keyState[37] && left.id > 380) {
      document.getElementById(parseInt(actives[0].id) - 1).classList.add("active");
      actives[2].classList.remove("active");
      if (gameState.innerText == "Off") {
        document.getElementById(parseInt(ball.id) - 1).classList.add("ball");
        ball.classList.remove("ball");
      };
    };

    setTimeout(movementLoop, 80);
  };

  movementLoop();
};

export { movePaddle };
