import { pop } from '../balloonblast/pop';

const drop = (player, number) => {
  let active = document.querySelector(`.${player}`);
  let balloons = document.querySelectorAll(`.balloon-${number}`);
  let limit = parseInt(document.getElementById(`limit-${number}`).innerText);

  if (balloons.length < limit) {
    active.classList.add("balloon", `balloon-${number}`);
    pop(active.id, 3000, 200, number);
  };
};

export { drop };
