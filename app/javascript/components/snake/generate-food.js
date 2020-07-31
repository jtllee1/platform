const generateFood = () => {
  let number = Math.floor(Math.random() * 400);

  let grid = document.getElementById(number);

  function food() {
    if (grid.classList.contains("food") == false && grid.querySelector(".inner").classList.contains("body") == false) {
      grid.classList.add("food");
    }
    else {
      food();
    };
  };

  food();
};

export { generateFood };
