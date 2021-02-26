// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { sort } from '../components/home/sort';
import { sortScroll } from '../components/home/sort-scroll';
import { grid } from '../components/cellbuster/grid';
import { levelAdjustor } from '../components/cellbuster/level-adjustor';
import { laser } from '../components/cellbuster/laser';
import { timer } from '../components/cellbuster/timer';
import { generateEnemies } from '../components/cellbuster/generate-enemies';
import { select } from '../components/connectfour/select';
import { movement } from '../components/helicopter/movement';
import { start } from '../components/helicopter/start';
import { continualMovement } from '../components/caterpillar/continual-movement';
import { startTetris } from '../components/tetris/start-tetris';
import { startPong } from '../components/pong/start-pong';
import { movePaddle } from '../components/pong/move-paddle';
import { startSimon } from '../components/simonsays/start-simon';
import { simonSays } from '../components/simonsays/simon-says';
import { cube } from '../components/cube/cube';
import { cubePress } from '../components/cube/cube-press';
import { startMatch } from '../components/match3/start-match';
import { swap } from '../components/match3/swap';
import { startHangman } from '../components/hangman/start-hangman';
import { start2048 } from '../components/2048/start-2048';
import { control } from '../components/platform/control';
import { startBalloon } from '../components/balloonblast/start-balloon';
import { startBlockman } from '../components/blockman/start-blockman';
import { startGame } from '../components/game/start-game';

const id = document.getElementById("name").innerText;
// Call your functions here, e.g:
// initSelect2();
if (id == "Gaming Center") {
  sort();
  sortScroll();
}
else if (id == "Cell Buster") {
  grid();
  levelAdjustor();
  laser();
  timer();
  generateEnemies();
}
else if (id == "Connect Four") {
  select();
}
else if (id == "Helicopter") {
  movement();
  start();
}
else if (id == "Caterpillar") {
  continualMovement();
  levelAdjustor();
}
else if (id == "Tetris") {
  startTetris();
}
else if (id == "Pong") {
  startPong();
  movePaddle();
}
else if (id == "Simon Says") {
  startSimon();
  simonSays();
  cube();
  cubePress();
}
else if (id == "Match 3") {
  startMatch();
  swap();
}
else if (id == "Pokémon Hangman") {
  startHangman();
}
else if (id == "2048") {
  start2048();
}
else if (id == "Sound Beat") {
  control();
}
else if (id == "Balloon Blast") {
  startBalloon();
}
else if (id == "Blockman") {
  startBlockman();
  levelAdjustor();
}
else if (id == "Game") {
  startGame();
}
