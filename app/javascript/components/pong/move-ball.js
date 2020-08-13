const moveBall = (initDirection) => {
  let direction = initDirection;
  let gameState = document.getElementById("game-state");

  function ballMovement() {
    let location = document.querySelector(".ball");

    if (gameState.innerText == "On") {
      let actives = document.querySelectorAll(".active");

      if (direction == "NW") {
        let nW = document.getElementById(parseInt(location.id) - 21);

        nW.classList.add("ball");
        location.classList.remove("ball");

        setTimeout(ballMovement, 80);

        if (nW.classList.contains("left-boundary")) {
          direction = "NE";
        }
        else if (nW.classList.contains("up-boundary")) {
          direction = "SW";
        };
      }
      else if (direction == "NE") {
        let nE = document.getElementById(parseInt(location.id) - 19);

        nE.classList.add("ball");
        location.classList.remove("ball");

        setTimeout(ballMovement, 80);

        if (nE.classList.contains("right-boundary")) {
          direction = "NW";
        }
        else if (nE.classList.contains("up-boundary")) {
          direction = "SE";
        };
      }
      else if (direction == "SW") {
        let sW = document.getElementById(parseInt(location.id) + 19);

        sW.classList.add("ball");
        location.classList.remove("ball");

        setTimeout(ballMovement, 80);

        if (sW.classList.contains("left-boundary")) {
          direction = "SE";
        }
        else if (sW.classList.contains("active")) {
          if (actives[0].id == sW.id) {
            direction = "NW";
          }
          else if (actives[2].id == sW.id) {
            direction = "NE";
          }
          else {
            direction = "NW";
          };
        };
      }
      else if (direction == "SE") {
        let sE = document.getElementById(parseInt(location.id) + 21);

        sE.classList.add("ball");
        location.classList.remove("ball");

        setTimeout(ballMovement, 80);

        if (sE.classList.contains("right-boundary")) {
          direction = "SW";
        }
        else if (sE.classList.contains("active")) {
          if (actives[0].id == sE.id) {
            direction = "NW";
          }
          else if (actives[2].id == sE.id) {
            direction = "NE";
          }
          else {
            direction = "NE";
          };
        };
      };
    };
  };

  ballMovement();
};

export { moveBall };
