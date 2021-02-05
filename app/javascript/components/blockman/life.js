const life = (playerId) => {
  const player = document.querySelector(`.${playerId}`)
  const lives = player.querySelectorAll(".life");
  const grids = document.querySelectorAll(".grid-pong");

  let counter = -1;

  lives.forEach(live => {
    if (live.classList.contains("life")) {
      counter++;
    };
  });

  lives[counter].classList.remove("life");
  lives[counter].classList.add("empty");
};

export { life };
