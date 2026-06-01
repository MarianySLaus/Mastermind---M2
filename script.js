const buttons = document.querySelectorAll(".guess-buttons button");
const guessText = document.querySelector("#guessText");
const posText = document.querySelector("#posText");
const outText = document.querySelector("#outText");

function selectGuess(button) {
  buttons.forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  guessText.textContent = button.dataset.guess;
  posText.textContent = button.dataset.pos;
  outText.textContent = button.dataset.out;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => selectGuess(button));
});

if (buttons.length > 0) {
  selectGuess(buttons[0]);
}
