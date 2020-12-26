import { pop } from '../balloonblast/pop';

const drop = () => {
  let active = document.querySelector(".active");
  let balloons = document.querySelectorAll(".balloon");
  let limit = parseInt(document.getElementById("limit").innerText);

  if (balloons.length < limit + 1) {
    active.classList.add("balloon");
    pop(active.id, 3000, 200);
  };
};

export { drop };
