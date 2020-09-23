import { generateRow } from '../match3/generate-row';

const startMatch = () => {
  const start = document.getElementById("start");

  start.addEventListener('click', () => {
    generateRow();
  });
};

export { startMatch };
