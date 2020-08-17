const life = () => {
  const lives = document.querySelectorAll(".life");

  let counter = -1;

  lives.forEach(live => {
    if (live.classList.contains("life")) {
      counter++;
    };
  });

  lives[counter].classList.remove("life");
  lives[counter].classList.add("empty");
};

export { life };
