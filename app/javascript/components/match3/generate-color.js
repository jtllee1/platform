const generateColor = (column) => {
  const grids = document.querySelectorAll(".grid");
  const colors = ["green", "blue", "orange", "purple", "red", "yellow", "red", "yellow", "cyan", "pink"];

  for (let column = 0; column < 9; column++) {
    let color = colors[Math.floor(Math.random() * colors.length)];

    if (!grids[column].classList.contains("item")) {
      grids[column].classList.add("item", `${color}`);
    };
  };
};

export { generateColor };
