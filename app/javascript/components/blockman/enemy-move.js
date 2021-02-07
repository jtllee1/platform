import { move } from '../blockman/move';

const enemyMove = () => {
  const options = ["right", "left"];

  move(options[Math.floor(Math.random() * options.length)], 2);

  setTimeout(enemyMove, 600);
};

export { enemyMove };
