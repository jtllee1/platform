const life = () => {
  const lives = document.querySelectorAll(".life");
  const grids = document.querySelectorAll(".grid-pong");

  let counter = -1;

  lives.forEach(live => {
    if (live.classList.contains("life")) {
      counter++;
    };
  });

  lives[counter].classList.remove("life");
  lives[counter].classList.add("empty");

  if (counter == 0) {
    grids.forEach(grid => {
      grid.classList.remove("obstacle");
    });
  };
};

export { life };
