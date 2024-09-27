import { setTimeout } from 'components/tools/timeout_manager';
import { life } from 'components/pong/life';

const moveBall = (initDirection) => {
  let direction = initDirection;
  let gameState = document.getElementById("game-state");
  const paddleSound = document.querySelector(".paddle");
  const brickSound = document.querySelector(".brick");

  function paddle() {
    paddleSound.pause();
    paddleSound.currentTime = 0;
    paddleSound.play();
  };

  function brick() {
    brickSound.pause();
    brickSound.currentTime = 0;
    brickSound.play();
  };

  function ballMovement() {
    let location = document.querySelector(".ball");

    if (gameState.innerText == "On") {
      let actives = document.querySelectorAll(".active");

      // if (direction == "N") {
      //   let n = document.getElementById(parseInt(location.id) - 30);

      //   n.classList.add("ball");
      //   location.classList.remove("ball");

      //   if (n.classList.contains("up-boundary")) {
      //     direction = "S";
      //   }
      //   else if (n.classList.contains("obstacle")) {
      //     n.classList.remove("obstacle");
      //     direction = "S";
      //   }
      // }
      if (direction == "NW") {
        let nW = document.getElementById(parseInt(location.id) - 31);
        let up = document.getElementById(parseInt(nW.id) - 30);

        nW.classList.add("ball");
        location.classList.remove("ball");

        if (nW.classList.contains("left-boundary") && nW.classList.contains("up-boundary")) {
          direction = "SE";
          paddle();
        }
        else if (nW.classList.contains("left-boundary")) {
          direction = "NE";
          paddle();
        }
        else if (nW.classList.contains("up-boundary")) {
          direction = "SW";
          paddle();
        }
        else if (nW.classList.contains("obstacle")) {
          nW.classList.remove("obstacle");
          brick();

          if (document.getElementById(parseInt(location.id) - 29).classList.contains("obstacle")) {
            direction = "SW";
          }
          else {
            direction = "NE";
          };
        }
        else if (up.classList.contains("obstacle")) {
          up.classList.remove("obstacle");
          brick();
          direction = "SW";
        };
      }
      else if (direction == "NE") {
        let nE = document.getElementById(parseInt(location.id) - 29);
        let up = document.getElementById(parseInt(nE.id) - 30);

        nE.classList.add("ball");
        location.classList.remove("ball");

        if (nE.classList.contains("right-boundary") && nE.classList.contains("up-boundary")) {
          direction = "SW";
          paddle();
        }
        else if (nE.classList.contains("right-boundary")) {
          direction = "NW";
          paddle();
        }
        else if (nE.classList.contains("up-boundary")) {
          direction = "SE";
          paddle();
        }
        else if (nE.classList.contains("obstacle")) {
          nE.classList.remove("obstacle");
          brick();

          if (document.getElementById(parseInt(location.id) - 31).classList.contains("obstacle")) {
            direction = "SE";
          }
          else {
            direction = "NW";
          };
        }
        else if (up.classList.contains("obstacle")) {
          up.classList.remove("obstacle");
          brick();
          direction = "SE";
        };
      }
      // else if (direction == "S") {
      //   let s = document.getElementById(parseInt(location.id) + 30);
      //   let s2 = document.getElementById(parseInt(s.id) + 30);

      //   s.classList.add("ball");
      //   location.classList.remove("ball");

      //   if (s2.classList.contains("active")) {
      //     if (actives[2].id == s2.id) {
      //       direction = "N";
      //     }
      //     else if (actives[0].id == s2.id || actives[1].id == s2.id) {
      //       direction = "NW";
      //     }
      //     else if (actives[4].id == s2.id || actives[3].id == s2.id) {
      //       direction = "NE";
      //     };
      //   }
      //   else if (s.classList.contains("down-boundary")) {
      //     life();
      //     gameState = "Off";
      //   };
      // }
      else if (direction == "SW") {
        let sW = document.getElementById(parseInt(location.id) + 29);
        let sW2 = document.getElementById(parseInt(sW.id) + 29);
        let s = document.getElementById(parseInt(location.id) + 60);
        let down = document.getElementById(parseInt(sW.id) + 30);

        sW.classList.add("ball");
        location.classList.remove("ball");

        if (sW.classList.contains("left-boundary") && document.getElementById(parseInt(sW.id) + 30).classList.contains("active")) {
          direction = "NE";
          paddle();
        }
        else if (sW.classList.contains("down-boundary")) {
          life();
          gameState = "Off";
          paddle();
        }
        else if (sW.classList.contains("left-boundary")) {
          direction = "SE";
          paddle();
        }
        else if (sW.classList.contains("obstacle")) {
          sW.classList.remove("obstacle");
          brick();

          if (document.getElementById(parseInt(location.id) + 31).classList.contains("obstacle")) {
            direction = "NW";
          }
          else {
            direction = "SE";
          };
        }
        else if (down.classList.contains("obstacle")) {
          down.classList.remove("obstacle");
          brick();
          direction = "NW";
        }
        else if (sW2.classList.contains("active")) {
          if (actives[3].id == sW2.id || actives[4].id == sW2.id) {
            direction = "NE";
          }
          else {
            direction = "NW";
          };
          paddle();
        }
        else if (document.getElementById(parseInt(sW2.id) + 1).classList.contains("active")) {
          direction = "NW";
          paddle();
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
          paddle();
        }
        else if (sE.classList.contains("down-boundary")) {
          life();
          gameState = "Off";
          paddle();
        }
        else if (sE.classList.contains("right-boundary")) {
          direction = "SW";
          paddle();
        }
        else if (sE.classList.contains("obstacle")) {
          sE.classList.remove("obstacle");
          brick();

          if (document.getElementById(parseInt(location.id) + 29).classList.contains("obstacle")) {
            direction = "NE";
          }
          else {
            direction = "SW";
          };
        }
        else if (down.classList.contains("obstacle")) {
          down.classList.remove("obstacle");
          brick();
          direction = "NE";
        }
        else if (sE2.classList.contains("active")) {
          if (actives[0].id == sE2.id || actives[1].id == sE2.id) {
            direction = "NW";
          }
          else {
            direction = "NE";
          };
          paddle();
        }
        else if (document.getElementById(parseInt(sE2.id) - 1).classList.contains("active")) {
          direction = "NE";
          paddle();
        };
      };
    };
    setTimeout(ballMovement, 80);
  };

  ballMovement();
};

export { moveBall };
