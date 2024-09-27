import { pop } from 'components/balloonblast/pop';

const drop = (player, number) => {
  let active = document.querySelector(`.${player}`);
  let balloons = document.querySelectorAll(`.balloon-${number}`);
  let limit = parseInt(document.getElementById(`limit-${number}`).innerText);
  const dropSound = document.querySelector(".drop");

  if (balloons.length < limit) {
    active.classList.add("balloon", `balloon-${number}`);
    pop(active.id, 3000, 200, number);
    dropSound.pause();
    dropSound.currentTime = 0;
    dropSound.play();
  };
};

export { drop };
