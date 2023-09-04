const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

let score = 0;
let isGameOver = false; 

function jump() {
  if (dino.classList != "jump" && !isGameOver) {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let gameInterval = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    endGame();
  } else {

    score++;
    document.getElementById("score").textContent = "Score: " + score;

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop < 140) {
      if (score <= 87) {
        endGame();
      }
    }
  }
}, 10);

function endGame() {
  isGameOver = true;
  clearInterval(gameInterval);
  alert("Game Over! Your Score: " + score);
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 32) { 
    if (isGameOver) {
      resetGame();
    } else {
      jump();
    }
  }
});

function resetGame() {
  isGameOver = false;
  score = 0;
  document.getElementById("score").textContent = "Score: " + score;
  gameInterval = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      endGame();
    } else {
      score++;
      document.getElementById("score").textContent = "Score: " + score;
  
      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop < 140) {
        if (score <= 87) {
          endGame();
        }
      }
    }
  }, 10);
}
