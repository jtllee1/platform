const reset = (slot) => {
  slot.classList.remove("hover-1");
  slot.classList.remove("hover-2");
  slot.classList.remove("active-1");
  slot.classList.remove("active-2");
  slot.classList.remove("win");
  slot.classList.remove("stop");
};

export { reset };
