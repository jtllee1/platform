import { checkLetter } from 'components/hangman/check-letter';

const generateHint = () => {
  const chosenWord = document.getElementById("chosen-word");
  const letterId = Math.floor(Math.random() * chosenWord.innerText.length);
  const usedLetters = document.getElementById("used-letters");
  let letters = document.querySelectorAll(".letter");

  let hintKey = chosenWord.innerText[letterId];

  let condition = true;

  console.log(letterId);
  console.log(hintKey);

  letters.forEach(letter => {
    if (hintKey == letter.innerText) {
      condition = false;
    };
  });

  if (condition) {
    checkLetter(hintKey);

    let div = document.createElement('div');
    div.className = "letter";
    div.innerText = hintKey;
    usedLetters.appendChild(div);
  }
  else {
    generateHint();
  };
};

export { generateHint };
