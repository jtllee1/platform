const sort = () => {
  const all = document.querySelector(".all");
  const singlePlayer = document.querySelector(".single-p");
  const twoPlayer = document.querySelector(".two-p");
  const games = document.querySelectorAll(".game");

  all.addEventListener('click', (e) => {
    all.classList.add("active");
    singlePlayer.classList.remove("active");
    twoPlayer.classList.remove("active");

    games.forEach(game => {
      game.classList.remove("invisible");
    });
  });

  singlePlayer.addEventListener('click', (e) => {
    all.classList.remove("active");
    singlePlayer.classList.add("active");
    twoPlayer.classList.remove("active");

    games.forEach(game => {
      if (game.classList.contains("2-p-games")) {
        game.classList.add("invisible");
      }
      else {
        game.classList.remove("invisible");
      };
    });
  });

  twoPlayer.addEventListener('click', (e) => {
    all.classList.remove("active");
    singlePlayer.classList.remove("active");
    twoPlayer.classList.add("active");

    games.forEach(game => {
      if (game.classList.contains("1-p-games")) {
        game.classList.add("invisible");
      }
      else {
        game.classList.remove("invisible");
      };
    });
  });
};

export { sort };
