const revealWord = () => {
  const chosenWord = document.getElementById("chosen-word");
  const hiddenLetters = document.querySelectorAll(".hidden-letter");

  for (let i = 0; i < chosenWord.innerText.length; i++) {
    if (hiddenLetters[i].innerText == "_") {
      hiddenLetters[i].innerText = chosenWord.innerText[i];
    };
  };
};

export { revealWord };
