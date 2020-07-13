const reset = () => {
  const slots = document.querySelectorAll(".grid-c-4");
  const reset = document.getElementById("reset");

  reset.addEventListener('click', () => {
    slots.forEach(slot => {
      slot.classList.remove("hover-1");
      slot.classList.remove("hover-2");
      slot.classList.remove("active-1");
      slot.classList.remove("active-2");
      slot.classList.remove("win");
      slot.classList.remove("stop");
    });
  });
};

export { reset };
