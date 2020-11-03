const moveTile = (direction) => {
  const tiles = document.querySelectorAll(".grid");

  for (let i = 0; i < 16; i++) {
    if (tiles[i].classList.contains("active")) {
      setTimeout( function timer() {
        if (direction == "left" && !tiles[i].classList.contains("left-boundary")) {
          tiles[i].classList.remove("active");
          tiles[i].innerText = "";
          tiles[i - 1].classList.add("active");
          tiles[i - 1].innerText = "2";
        }
        else if (direction == "right" && !tiles[i].classList.contains("right-boundary")) {
          tiles[i].classList.remove("active");
          tiles[i].innerText = "";
          tiles[i + 1].classList.add("active");
          tiles[i + 1].innerText = "2";
        }
        else if (direction == "up" && !tiles[i].classList.contains("up-boundary")) {
          tiles[i].classList.remove("active");
          tiles[i].innerText = "";
          tiles[i - 4].classList.add("active");
          tiles[i - 4].innerText = "2";
        }
        else if (direction == "down" && !tiles[i].classList.contains("down-boundary")) {
          tiles[i].classList.remove("active");
          tiles[i].innerText = "";
          tiles[i + 4].classList.add("active");
          tiles[i + 4].innerText = "2";
        };
      }, 1);
    };
  };
};

export { moveTile };
