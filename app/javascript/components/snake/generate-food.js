const generateFood = () => {
  let number = Math.floor(Math.random() * 400);

  let grid = document.getElementById(number);

  if (grid.classList.contains("active") == false && grid.classList.contains("food") == false && grid.querySelector(".inner").classList.contains("body") == false) {
    grid.classList.add("food");
  }
};

export { generateFood };
