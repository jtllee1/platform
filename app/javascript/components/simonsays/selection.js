const selection = (option) => {
  const button1 = document.querySelector(".button-1");
  const button2 = document.querySelector(".button-2");
  const button3 = document.querySelector(".button-3");
  const button4 = document.querySelector(".button-4");
  const button5 = document.querySelector(".button-5");
  const button6 = document.querySelector(".button-6");
  const display = document.getElementById("display");
  let div = document.createElement('div');
  div.className = `button selection s-${option}`;
  display.appendChild(div);

  if (option == 1) {
    button1.pause();
    button1.currentTime = 0;
    button1.play();
  }
  else if (option == 2) {
    button2.pause();
    button2.currentTime = 0;
    button2.play();
  }
  else if (option == 3) {
    button3.pause();
    button3.currentTime = 0;
    button3.play();
  }
  else if (option == 4) {
    button4.pause();
    button4.currentTime = 0;
    button4.play();
  }
  else if (option == 5) {
    button5.pause();
    button5.currentTime = 0;
    button5.play();
  }
  else if (option == 6) {
    button6.pause();
    button6.currentTime = 0;
    button6.play();
  };
};

export { selection };
