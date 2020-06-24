const levelAdjustor = () => {
  const level = document.getElementById("level");
  const left = document.getElementById("level-decrease");
  const right = document.getElementById("level-increase");

  left.addEventListener('click', () => {
    if (parseInt(level.innerText) > 1) {
      level.innerText = parseInt(level.innerText) - 1;
    };
  });

  right.addEventListener('click', () => {
    if (parseInt(level.innerText) < 3) {
      level.innerText = parseInt(level.innerText) + 1;
    };
  });
};

export { levelAdjustor };
