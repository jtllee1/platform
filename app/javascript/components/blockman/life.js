const life = (playerId) => {
  const player = document.querySelector(`.${playerId}`)
  const lives = player.querySelectorAll(".life");
  const data = document.querySelector(".data");

  let counter = -1;

  lives.forEach(live => {
    if (live.classList.contains("life")) {
      counter++;
    };
  });

  lives[counter].classList.remove("life");
  lives[counter].classList.add("empty");

  const remainingLives = player.querySelectorAll(".life");

  if (remainingLives.length == 0) {
    data.classList.remove("invisible");
  };
};

export { life };
