const fillCrates = () => {
  const crates = document.querySelectorAll(".crate");

  const exBalloons = document.querySelectorAll(".exballoon");
  const powers = document.querySelectorAll(".power");

  if (exBalloons.length < 5) {
    crates[Math.floor(Math.random() * 84)].classList.add("exballoon");

    fillCrates();
  }
  else if (powers.length < 5) {
    let number = Math.floor(Math.random() * 84);

    if (crates[number].classList.contains(".exballoon") == false) {
      crates[number].classList.add("power");

      fillCrates();
    };
  };
};

export { fillCrates };
