import { selection } from '../simonsays/selection';

const sequence = () => {
  const comSelect = document.getElementById("com-select");
  const choice = Math.floor(Math.random() * 6) + 1;

  selection(choice);

  let div = document.createElement('div');
  div.className = "sequence";
  div.innerText = choice;
  comSelect.appendChild(div);
};

export { sequence }
