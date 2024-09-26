import { addEventListener } from '../tools/event_listener_manager';
import { generateWord } from '../hangman/generate-word';
import { checkLetter } from '../hangman/check-letter';
import { generateHint } from '../hangman/generate-hint';

const startHangman = () => {
  const start = document.getElementById("start");
  const hint = document.getElementById("hint");
  const input = document.getElementById("input");
  const usedLetters = document.getElementById("used-letters");
  const gameState = document.getElementById("game-state");
  const count = document.getElementById("count");
  const lives = document.querySelectorAll(".life");

  addEventListener(start, 'click', () => {
    lives.forEach(life => {
      life.classList.add("active");
    });

    input.innerText = "";
    usedLetters.innerText = "";
    count.innerText = 0;
    generateWord();
    gameState.innerText = "On";
  });

  hint.addEventListener('click', () => {
    if (gameState.innerText == "On") {
      generateHint();
    };
  });

  addEventListener(document, 'keydown', (e) => {
    if (gameState.innerText == "On") {
      let letters = document.querySelectorAll(".letter");

      input.innerText = e.key;

      let condition = true;

      letters.forEach(letter => {
        if (input.innerText == letter.innerText) {
          condition = false;
        };
      });

      if (condition) {
        checkLetter(e.key);

        let div = document.createElement('div');
        div.className = "letter";
        div.innerText = e.key;
        usedLetters.appendChild(div);
      };
    };
  });
};

export { startHangman };
