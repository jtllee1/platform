const generateEnemies = () => {
  const start = document.getElementById("start");
  const grids = document.querySelectorAll(".grid");

  start.addEventListener('click', () => {
    const ids = [];

    grids.forEach((grid) => {
      grid.classList.remove("enemy");
    });

    for (let i = 0; ids.length < 20; i++) {
      let chosenId = Math.floor(Math.random()*200) + 1;
      if (ids.includes(chosenId) == false) {
        ids.push(chosenId)
        document.getElementById(chosenId).classList.add("enemy");
      };
    };
  });
};

export { generateEnemies };
