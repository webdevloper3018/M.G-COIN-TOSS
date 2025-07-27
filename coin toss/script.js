let tossCount = 0;
let leaderboard = [];

function tossCoin() {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  document.getElementById("result").innerText = `You got: ${result}`;

  const img = document.getElementById("coin");
  img.src = result === "Heads" ? "cricket_heads.png" : "cricket_tails.png";

  // Flip animation
  img.classList.remove("flip");
  void img.offsetWidth;
  img.classList.add("flip");

  // Sound
  const coinSound = document.getElementById("coinSound");
  coinSound.currentTime = 0;
  coinSound.play();

  // Counter
  tossCount++;
  document.getElementById("counter").innerText = `Tosses: ${tossCount}`;

  // Leaderboard
  updateLeaderboard(result);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function updateLeaderboard(result) {
  leaderboard.push(result);
  const scoresList = document.getElementById("scores");
  scoresList.innerHTML = "";
  leaderboard.slice(-5).reverse().forEach((res, index) => {
    const li = document.createElement("li");
    li.innerText = `#${leaderboard.length - index}: ${res}`;
    scoresList.appendChild(li);
  });
}
