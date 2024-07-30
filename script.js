let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let userGuess = document.getElementById("guessInput").value;
  let message = document.getElementById("message");
  attempts++;

  if (userGuess == secretNumber) {
    message.textContent = `Selamat! Anda menebak angka yang benar dalam ${attempts} percobaan.`;
    message.style.color = "green";
    resetGame();
  } else if (userGuess > secretNumber) {
    message.textContent = "Terlalu tinggi, coba lagi!";
    message.style.color = "red";
  } else {
    message.textContent = "Terlalu rendah, coba lagi!";
    message.style.color = "red";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
}
