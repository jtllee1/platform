const countdown = () => {
  const start = document.querySelector(".start");

  if (start.innerText > 1) {
    start.innerText = start.innerText - 1;
    setTimeout(countdown, 1000);
  }
  else {
    start.innerText = "";
  };
};

export { countdown };
