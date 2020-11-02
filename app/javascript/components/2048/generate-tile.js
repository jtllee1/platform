const generateTile = () => {
  const grids = document.querySelectorAll(".grid");
  const number = Math.floor(Math.random() * 16);

  if (!grids[number].classList.contains("active")) {
    grids[number].classList.add("active");
    grids[number].innerText = 2;
  }
  else {
    generateTile();
  };
};

export { generateTile };
