const simonSays = () => {
  const option1 = document.getElementById("o-1");
  const option2 = document.getElementById("o-2");
  const option3 = document.getElementById("o-3");
  const option4 = document.getElementById("o-4");
  const option5 = document.getElementById("o-5");
  const display = document.getElementById("display");

  option1.addEventListener('click', () => {
    let div = document.createElement('div');
    div.className = 'selection s-1';
    display.appendChild(div);
  });

  option2.addEventListener('click', () => {
    let div = document.createElement('div');
    div.className = 'selection s-2';
    display.appendChild(div);
  });

  option3.addEventListener('click', () => {
    let div = document.createElement('div');
    div.className = 'selection s-3';
    display.appendChild(div);
  });

  option4.addEventListener('click', () => {
    let div = document.createElement('div');
    div.className = 'selection s-4';
    display.appendChild(div);
  });

  option5.addEventListener('click', () => {
    let div = document.createElement('div');
    div.className = 'selection s-5';
    display.appendChild(div);
  });
};

export { simonSays };
