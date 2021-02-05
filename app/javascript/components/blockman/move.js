const move = (direction, player) => {
  let playerId = "";

  if (player == 1) {
    playerId = "cube-player";
  }
  else if (player == 2) {
    playerId = "cube-enemy";
  };

  const cube = document.querySelector(`.${playerId}`);
  const cubeParts = cube.querySelectorAll(".box");

  if (direction == "left") {
    cubeParts.forEach(cubePart => {
      if (cubePart.classList.contains("move-right2")) {
        cubePart.classList.remove("move-right2");
        cubePart.classList.add("move-right");
      }
      else if (cubePart.classList.contains("move-right")) {
        cubePart.classList.remove("move-right");
        cubePart.classList.add("middle");
      }
      else if (cubePart.classList.contains("move-left")) {
        cubePart.classList.remove("move-left");
        cubePart.classList.add("move-left2");
      }
      else {
        cubePart.classList.remove("middle");
        cubePart.classList.add("move-left");
      }
    });
  }
  else if (direction == "right") {
    cubeParts.forEach(cubePart => {
      if (cubePart.classList.contains("move-left2")) {
        cubePart.classList.remove("move-left2");
        cubePart.classList.add("move-left");
      }
      else if (cubePart.classList.contains("move-left")) {
        cubePart.classList.remove("move-left");
        cubePart.classList.add("middle");
      }
      else if (cubePart.classList.contains("move-right")) {
        cubePart.classList.remove("move-right");
        cubePart.classList.add("move-right2");
      }
      else {
        cubePart.classList.remove("middle");
        cubePart.classList.add("move-right");
      }
    });
  };
};

export { move };
