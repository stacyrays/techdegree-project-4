/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Get the buttons and define a game variable
const btn = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");
let game;

btn.addEventListener("click", e => {
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

keyboard.addEventListener("click", e => {
  if (event.target.classList.value === "key") {
    game.handleInteraction(event.target);
  }
});
