import { addEventListener } from '../tools/event_listener_manager';
import { selection } from '../simonsays/selection';

const simonSays = () => {
  const button1 = document.querySelector(".button-1");
  const button2 = document.querySelector(".button-2");
  const button3 = document.querySelector(".button-3");
  const button4 = document.querySelector(".button-4");
  const button5 = document.querySelector(".button-5");
  const button6 = document.querySelector(".button-6");
  const option1 = document.querySelector(".cube-23");
  const option2 = document.querySelector(".cube-17");
  const option3 = document.querySelector(".cube-15");
  const option4 = document.querySelector(".cube-13");
  const option5 = document.querySelector(".cube-5");
  const option6 = document.querySelector(".cube-11");
  const gameState = document.getElementById("game-state");
  const start = document.querySelector(".start");
  let order = 0;

  addEventListener(option1, 'click', () => {
    button1.pause();
    button1.currentTime = 0;
    button1.play();

    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 1) {
      selection(1)
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });

  addEventListener(option2, 'click', () => {
    button2.pause();
    button2.currentTime = 0;
    button2.play();

    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 2) {
      selection(2);
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });

  addEventListener(option3, 'click', () => {
    button3.pause();
    button3.currentTime = 0;
    button3.play();

    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 3) {
      selection(3);
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });

  addEventListener(option4, 'click', () => {
    button4.pause();
    button4.currentTime = 0;
    button4.play();

    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 4) {
      selection(4);
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });

  addEventListener(option5, 'click', () => {
    button5.pause();
    button5.currentTime = 0;
    button5.play();

    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 5) {
      selection(5);
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });

  addEventListener(option6, 'click', () => {
    button6.pause();
    button6.currentTime = 0;
    button6.play();

    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 6) {
      selection(6);
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });
};

export { simonSays };
