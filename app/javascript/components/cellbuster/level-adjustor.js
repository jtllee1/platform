import { addEventListener } from '../tools/event_listener_manager';

const levelAdjustor = () => {
  const level = document.getElementById("level");
  const left = document.getElementById("level-decrease");
  const right = document.getElementById("level-increase");

  addEventListener(left, 'click', (e) => {
    if (parseInt(level.innerText) > 1) {
      level.innerText = parseInt(level.innerText) - 1;
    };
  });

  addEventListener(right, 'click', (e) => {
    if (parseInt(level.innerText) < 3) {
      level.innerText = parseInt(level.innerText) + 1;
    };
  });
};

export { levelAdjustor };
