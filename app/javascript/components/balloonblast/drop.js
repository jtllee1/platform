const drop = () => {
  let active = document.querySelector(".active");
  let balloons = document.querySelectorAll(".balloon");
  let limit = parseInt(document.getElementById("limit").innerText);

  if (balloons.length < limit) {
    active.classList.add("balloon");
  };
};

export { drop };
