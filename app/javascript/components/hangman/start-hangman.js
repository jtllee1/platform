import { generateWord } from '../hangman/generate-word';

const startHangman = () => {
  const start = document.getElementById("start");

  start.addEventListener('click', () => {
    generateWord();
  });
};

export { startHangman };
