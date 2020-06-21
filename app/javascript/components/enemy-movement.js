const enemyMovement = (enemy) => {
  let right = document.getElementById(parseInt(enemy.id) + 1);
  let left = document.getElementById(parseInt(enemy.id) - 1);
  let down = document.getElementById(parseInt(enemy.id) + 20);
  let up = document.getElementById(parseInt(enemy.id) - 20);

  let movement = Math.floor(Math.random() * 4)

  console.log(enemy);

  if (movement == 0 && right && enemy.classList.contains("right-boundary") == false && right.classList.contains("enemy") == false && right.classList.contains("active") == false) {
    right.classList.add("enemy");
    enemy.classList.remove("enemy");
  }
  else if (movement == 1 && left && enemy.classList.contains("left-boundary") == false && left.classList.contains("enemy") == false && left.classList.contains("active") == false) {
    left.classList.add("enemy");
    enemy.classList.remove("enemy");
  }
  else if (movement == 2 && down && down.classList.contains("enemy") == false && down.classList.contains("active") == false) {
    down.classList.add("enemy");
    enemy.classList.remove("enemy");
  }
  else if (movement == 3 && up && up.classList.contains("enemy") == false && up.classList.contains("active") == false) {
    up.classList.add("enemy");
    enemy.classList.remove("enemy");
  };
};

export { enemyMovement };
