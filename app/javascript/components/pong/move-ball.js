const moveBall = (initDirection) => {
  let direction = initDirection;
  let gameState = document.getElementById("game-state");

  function ballMovement() {
    let location = document.querySelector(".ball");

    if (gameState.innerText == "On") {
      let actives = document.querySelectorAll(".active");

      if (direction == "NW") {
        let nW = document.getElementById(parseInt(location.id) - 31);

        nW.classList.add("ball");
        location.classList.remove("ball");

        if (nW.classList.contains("left-boundary")) {
          direction = "NE";
        }
        else if (nW.classList.contains("up-boundary")) {
          direction = "SW";
        }
        else if (nW.classList.contains("left-boundary") && nW.classList.contains("up-boundary")) {
          direction = "SE";
        };
      }
      else if (direction == "NE") {
        let nE = document.getElementById(parseInt(location.id) - 29);

        nE.classList.add("ball");
        location.classList.remove("ball");

        if (nE.classList.contains("right-boundary")) {
          direction = "NW";
        }
        else if (nE.classList.contains("up-boundary")) {
          direction = "SE";
        }
        else if (nE.classList.contains("right-boundary") && nE.classList.contains("up-boundary")) {
          direction = "SW";
        };
      }
      else if (direction == "SW") {
        let sW = document.getElementById(parseInt(location.id) + 29);
        let sW2 = document.getElementById(parseInt(sW.id) + 29);

        sW.classList.add("ball");
        location.classList.remove("ball");

        if (sW.classList.contains("left-boundary") && document.getElementById(parseInt(sW.id) + 30).classList.contains("active")) {
          direction = "NE";
        }
        else if (sW.classList.contains("left-boundary")) {
          direction = "SE";
        }
        else if (sW2.classList.contains("active")) {
          if (actives[0].id == sW2.id) {
            direction = "NW";
          }
          else if (actives[4].id == sW2.id) {
            direction = "NE";
          }
          else {
            direction = "NW";
          };
        };
      }
      else if (direction == "SE") {
        let sE = document.getElementById(parseInt(location.id) + 31);
        let sE2 = document.getElementById(parseInt(sE.id) + 31);

        sE.classList.add("ball");
        location.classList.remove("ball");

        if (sE.classList.contains("right-boundary") && document.getElementById(parseInt(sE.id) + 30).classList.contains("active")) {
          direction = "NW";
        }
        else if (sE.classList.contains("right-boundary")) {
          direction = "SW";
        }
        else if (sE2.classList.contains("active")) {
          if (actives[0].id == sE2.id) {
            direction = "NW";
          }
          else if (actives[4].id == sE2.id) {
            direction = "NE";
          }
          else {
            direction = "NE";
          };
        };
      };
    };
    setTimeout(ballMovement, 60);
  };

  ballMovement();
};

export { moveBall };
