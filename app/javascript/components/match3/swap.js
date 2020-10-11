const swap = () => {
  const grids = document.querySelectorAll(".grid");

  let count = 0;

  let color1 = "";
  let color2 = "";

  grids.forEach(grid => {
    grid.addEventListener("click", () => {
      let gameState = document.getElementById("game-state");
      if (gameState.innerText == "On") {
        if (grid.classList.contains("item") && count < 1) {
          color1 = grids[grid.id].className.split(" ").pop();
          grid.classList.add("active-1");

          count++;
        }
        else if (grid.classList.contains("item") && count > 0) {
          color2 = grids[grid.id].className.split(" ").pop();
          grid.classList.add("active-2");

          count--;

          setTimeout( function timer() {
            let grid1 = document.querySelector(".active-1");
            let grid2 = document.querySelector(".active-2");

            if (((grid1.id == grid2.id + 1) && (!grid1.classList.contains("left-boundary"))) || ((grid1.id == grid2.id - 1) && (!grid1.classList.contains("right-boundary")))
              || ((grid1.id == grid2.id + 9)) || ((grid1.id == grid2.id - 9))
              || ((grid2.id == grid1.id + 1) && (!grid2.classList.contains("left-boundary"))) || ((grid2.id == grid1.id - 1) && (!grid2.classList.contains("right-boundary")))
              || ((grid2.id == grid1.id + 9)) || ((grid2.id == grid1.id - 9))) {
              grid1.classList.remove("item", "green", "blue", "orange", "purple", "red", "yellow", "red", "yellow", "cyan", "pink");
              grid1.classList.add("item", `${color2}`);
              grid2.classList.remove("item", "green", "blue", "orange", "purple", "red", "yellow", "red", "yellow", "cyan", "pink");
              grid2.classList.add("item", `${color1}`);
            };

            grids.forEach(grid => {
              grid.classList.remove("active-1", "active-2");
            });
          }, 200 );
        };
      };
    });
  });
};

export { swap };
