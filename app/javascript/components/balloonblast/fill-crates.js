const fillCrates = () => {
  const crates = document.querySelectorAll(".crate");

  crates[Math.floor(Math.random() * 84)].classList.add("exballoon");

  const exBalloons = document.querySelectorAll(".exballoon");

  if (exBalloons.length < 5) {
    fillCrates();
  };
};

export { fillCrates };
