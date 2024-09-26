import { setTimeout } from '../tools/timeout_manager';
import { scoring } from '../2048/scoring';

const moveTile = (direction) => {
  const tiles = document.querySelectorAll(".grid");

  for (let i = 0; i < 16; i++) {
    if (tiles[i].classList.contains("active")) {
      setTimeout( function timer() {
        if (direction == "left" && !tiles[i].classList.contains("left-boundary")) {
          if (!tiles[i - 1].classList.contains("active")) {
            tiles[i].classList.remove("active");
            tiles[i - 1].classList.add("active");
            tiles[i - 1].innerText = tiles[i].innerText;
            tiles[i].innerText = "";
          }
          else if (tiles[i].innerText == tiles[i - 1].innerText) {
            tiles[i].classList.remove("active");
            tiles[i - 1].classList.add("active");
            tiles[i - 1].innerText = parseInt(tiles[i].innerText) + parseInt(tiles[i - 1].innerText);
            tiles[i].innerText = "";
            scoring(parseInt(tiles[i - 1].innerText));
          };
        }
        else if (direction == "up" && !tiles[i].classList.contains("up-boundary")) {
          if (!tiles[i - 4].classList.contains("active")) {
            tiles[i].classList.remove("active");
            tiles[i - 4].classList.add("active");
            tiles[i - 4].innerText = tiles[i].innerText;
            tiles[i].innerText = "";
          }
          else if (tiles[i].innerText == tiles[i - 4].innerText) {
            tiles[i].classList.remove("active");
            tiles[i - 4].classList.add("active");
            tiles[i - 4].innerText = parseInt(tiles[i].innerText) + parseInt(tiles[i - 4].innerText);
            tiles[i].innerText = "";
            scoring(parseInt(tiles[i - 4].innerText));
          };
        };
      }, 1);
    };
  };

  for (let i = 15; i > -1; i--) {
    if (tiles[i].classList.contains("active")) {
      setTimeout( function timer() {
        if (direction == "right" && !tiles[i].classList.contains("right-boundary")) {
          if (!tiles[i + 1].classList.contains("active")) {
            tiles[i].classList.remove("active");
            tiles[i + 1].classList.add("active");
            tiles[i + 1].innerText = tiles[i].innerText;
            tiles[i].innerText = "";
          }
          else if (tiles[i].innerText == tiles[i + 1].innerText) {
            tiles[i].classList.remove("active");
            tiles[i + 1].classList.add("active");
            tiles[i + 1].innerText = parseInt(tiles[i].innerText) + parseInt(tiles[i + 1].innerText);
            tiles[i].innerText = "";
            scoring(parseInt(tiles[i + 1].innerText));
          };
        }
        else if (direction == "down" && !tiles[i].classList.contains("down-boundary")) {
          if (!tiles[i + 4].classList.contains("active")) {
            tiles[i].classList.remove("active");
            tiles[i + 4].classList.add("active");
            tiles[i + 4].innerText = tiles[i].innerText;
            tiles[i].innerText = "";
          }
          else if (tiles[i].innerText == tiles[i + 4].innerText) {
            tiles[i].classList.remove("active");
            tiles[i + 4].classList.add("active");
            tiles[i + 4].innerText = parseInt(tiles[i].innerText) + parseInt(tiles[i + 4].innerText);
            tiles[i].innerText = "";
            scoring(parseInt(tiles[i + 4].innerText));
          };
        };
      }, 1);
    };
  };
};

export { moveTile };
