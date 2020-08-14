const moveBall = (initDirection) => {
  let direction = initDirection;
  let gameState = document.getElementById("game-state");

  function ballMovement() {
    let location = document.querySelector(".ball");

    if (gameState.innerText == "On") {
      let actives = document.querySelectorAll(".active");

      if (direction == "N") {
        let n = document.getElementById(parseInt(location.id) - 30);

        n.classList.add("ball");
        location.classList.remove("ball");

        if (n.classList.contains("up-boundary")) {
          direction = "S";
        }
        else if (n.classList.contains("obstacle")) {
          n.classList.remove("obstacle");
          direction = "S";
        }
      }
      else if (direction == "NW") {
        let nW = document.getElementById(parseInt(location.id) - 31);
        let up = document.getElementById(parseInt(nW.id) - 30);

        nW.classList.add("ball");
        location.classList.remove("ball");

        if (nW.classList.contains("left-boundary") && nW.classList.contains("up-boundary")) {
          direction = "SE";
        }
        else if (nW.classList.contains("left-boundary")) {
          direction = "NE";
        }
        else if (nW.classList.contains("up-boundary")) {
          direction = "SW";
        }
        else if (nW.classList.contains("obstacle")) {
          nW.classList.remove("obstacle");

          if (document.getElementById(parseInt(location.id) - 29).classList.contains("obstacle")) {
            direction = "SW";
          }
          else {
            direction = "NE";
          };
        }
        else if (up.classList.contains("obstacle")) {
          up.classList.remove("obstacle");
          direction = "SW"
        };
      }
      else if (direction == "NE") {
        let nE = document.getElementById(parseInt(location.id) - 29);
        let up = document.getElementById(parseInt(nE.id) - 30);

        nE.classList.add("ball");
        location.classList.remove("ball");

        if (nE.classList.contains("right-boundary") && nE.classList.contains("up-boundary")) {
          direction = "SW";
        }
        else if (nE.classList.contains("right-boundary")) {
          direction = "NW";
        }
        else if (nE.classList.contains("up-boundary")) {
          direction = "SE";
        }
        else if (nE.classList.contains("obstacle")) {
          nE.classList.remove("obstacle");

          if (document.getElementById(parseInt(location.id) - 31).classList.contains("obstacle")) {
            direction = "SE";
          }
          else {
            direction = "NW";
          };
        }
        else if (up.classList.contains("obstacle")) {
          up.classList.remove("obstacle");
          direction = "SE"
        };
      }
      else if (direction == "S") {
        let s = document.getElementById(parseInt(location.id) + 30);
        let s2 = document.getElementById(parseInt(s.id) + 30);

        s.classList.add("ball");
        location.classList.remove("ball");

        if (s2.classList.contains("active")) {
          if (actives[0].id == s2.id) {
            direction = "NW";
          }
          else if (actives[4].id == s2.id) {
            direction = "NE";
          }
          else if (actives[2].id == s2.id) {
            direction = "N";
          }
          else {
            direction = "NW";
          };
        };
      }
      else if (direction == "SW") {
        let sW = document.getElementById(parseInt(location.id) + 29);
        let sW2 = document.getElementById(parseInt(sW.id) + 29);
        let s = document.getElementById(parseInt(location.id) + 60);
        let down = document.getElementById(parseInt(sW.id) + 30);

        sW.classList.add("ball");
        location.classList.remove("ball");

        if (sW.classList.contains("left-boundary") && document.getElementById(parseInt(sW.id) + 30).classList.contains("active")) {
          direction = "NE";
        }
        else if (sW.classList.contains("left-boundary")) {
          direction = "SE";
        }
        else if (sW.classList.contains("obstacle")) {
          sW.classList.remove("obstacle");

          if (document.getElementById(parseInt(location.id) + 31).classList.contains("obstacle")) {
            direction = "NW";
          }
          else {
            direction = "SE";
          };
        }
        else if (down.classList.contains("obstacle")) {
          down.classList.remove("obstacle");
          direction = "NW"
        }
        else if (sW2.classList.contains("active") || s.classList.contains("active")) {
          if (actives[4].id == sW2.id || actives[4].id == s.id) {
            direction = "NE";
          }
          else if (actives[2].id == s.id) {
            direction = "N";
          }
          else {
            direction = "NW";
          };
        };
      }
      else if (direction == "SE") {
        let sE = document.getElementById(parseInt(location.id) + 31);
        let sE2 = document.getElementById(parseInt(sE.id) + 31);
        let s = document.getElementById(parseInt(location.id) + 60);
        let down = document.getElementById(parseInt(sE.id) + 30);

        sE.classList.add("ball");
        location.classList.remove("ball");

        if (sE.classList.contains("right-boundary") && document.getElementById(parseInt(sE.id) + 30).classList.contains("active")) {
          direction = "NW";
        }
        else if (sE.classList.contains("right-boundary")) {
          direction = "SW";
        }
        else if (sE.classList.contains("obstacle")) {
          sE.classList.remove("obstacle");

          if (document.getElementById(parseInt(location.id) + 29).classList.contains("obstacle")) {
            direction = "NW";
          }
          else {
            direction = "SE";
          };
        }
        else if (down.classList.contains("obstacle")) {
          down.classList.remove("obstacle");
          direction = "NE"
        }
        else if (sE2.classList.contains("active") || s.classList.contains("active")) {
          if (actives[0].id == sE2.id || actives[0].id == s.id) {
            direction = "NW";
          }
          else if (actives[2].id == s.id) {
            direction = "N";
          }
          else {
            direction = "NE";
          };
        };
      };
    };
    setTimeout(ballMovement, 80);
  };

  ballMovement();
};

export { moveBall };
