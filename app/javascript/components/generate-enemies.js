const generateEnemies = () => {
  const start = document.getElementById("start");
  const ids = [];

  start.addEventListener('click', () => {
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
