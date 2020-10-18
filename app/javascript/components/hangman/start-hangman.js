import { generateWord } from '../hangman/generate-word';

const startHangman = () => {
  const start = document.getElementById("start");
  const input = document.getElementById("input");
  const usedLetters = document.getElementById("used-letters");

  start.addEventListener('click', () => {
    generateWord();
  });

  document.addEventListener('keydown', (e) => {
    let letters = document.querySelectorAll(".letter");

    input.innerText = e.key;

    let condition = true;

    letters.forEach(letter => {
      if (input.innerText == letter.innerText) {
        condition = false;
      };
    });

    if (condition) {
      let div = document.createElement('div');
      div.className = "letter";
      div.innerText = e.key;
      usedLetters.appendChild(div);
    };
  });
};

export { startHangman };
