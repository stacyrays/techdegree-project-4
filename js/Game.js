/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = this.getRandomPhrase();
    this.overlay = document.getElementById("overlay");
    this.gameOverMsg = document.getElementById("game-over-message");
  }
  createPhrases() {
    const phrases = [
      new Phrase("Live for today"),
      new Phrase("Learn to code"),
      new Phrase("Fun with code"),
      new Phrase("Short phrases rock"),
      new Phrase("Never give up")
    ];
    return phrases;
  }
  getRandomPhrase() {
    let rand = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return rand;
  }

  /**
* Checks for winning move
* returns true/false if game has been won, false if game wasn't
won
*/
  checkForWin() {
    let phraseDiv = document.getElementById("phrase");
    let ul = phraseDiv.getElementsByTagName("ul")[0];
    let li = ul.getElementsByTagName("li");
    let counter2 = 0;
    console.log(li.length);
    for (let i = 0; i < li.length; i++) {
      if (
        li[i].classList.contains("show") ||
        li[i].classList.contains("space")
      ) {
        counter2++;
        console.log("counter2 is now " + counter2);
        if (counter2 === li.length) {
          console.log("you win!");
          return true;
        }
      }
    }
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    let scoreBoard = document.getElementById("scoreboard");
    let ol = scoreBoard.getElementsByTagName("ol")[0];
    let li = ol.getElementsByTagName("li");
    if (this.missed === 0) {
      li[0].innerHTML = `<img
        src="images/lostHeart.png"
        alt="Heart Icon"
        height="35"
        width="30"
      />`;
      this.missed++;
    } else if (this.missed === 1) {
      li[1].innerHTML = `<img
        src="images/lostHeart.png"
        alt="Heart Icon"
        height="35"
        width="30"
      />`;
      this.missed++;
    } else if (this.missed === 2) {
      li[2].innerHTML = `<img
        src="images/lostHeart.png"
        alt="Heart Icon"
        height="35"
        width="30"
      />`;
      this.missed++;
    } else if (this.missed === 3) {
      li[3].innerHTML = `<img
        src="images/lostHeart.png"
        alt="Heart Icon"
        height="35"
        width="30"
      />`;
      this.missed++;
    } else if (this.missed === 4) {
      li[4].innerHTML = `<img
        src="images/lostHeart.png"
        alt="Heart Icon"
        height="35"
        width="30"
      />`;
      this.overlay.style.display = "flex";
      this.overlay.style.backgroundColor;
      this.overlay.classList.remove("start");
      this.overlay.classList.add("lose");
      this.gameOverMsg.innerHTML = "Sorry, better luck next time!";
    }
  }
  /**
   * Displays game over message
   * Checks a boolean param called 'gameWon' to see whether or not the user won the game
   */
  gameOver(gameWon) {
    this.overlay.style.display = "flex";
    this.overlay.classList.remove("start");
    this.overlay.classList.add("win");
    this.gameOverMsg.innerHTML = "Great job!";
  }

  handleInteraction(button) {
    button.disabled = true;
    button.classList.add("chosen");
    if (game.activePhrase.showMatchedLetter(button.innerHTML) === false) {
      button.classList.add("wrong");
      game.removeLife();
    }
    game.checkForWin();
    if (game.checkForWin() === true) {
      game.gameOver(true);
    }
  }

  startGame() {
    this.overlay.style.display = "none";
    game.activePhrase.addPhraseToDisplay();

    //Reset the heart scoreboard
    let scoreBoard = document.getElementById("scoreboard");
    let ol = scoreBoard.getElementsByTagName("ol")[0];
    let li = ol.getElementsByTagName("li");
    li[0].innerHTML = `<img
      src="images/liveHeart.png"
      alt="Heart Icon"
      height="35"
      width="30"
    />`;
    li[1].innerHTML = `<img
      src="images/liveHeart.png"
      alt="Heart Icon"
      height="35"
      width="30"
    />`;
    li[2].innerHTML = `<img
      src="images/liveHeart.png"
      alt="Heart Icon"
      height="35"
      width="30"
    />`;
    li[3].innerHTML = `<img
      src="images/liveHeart.png"
      alt="Heart Icon"
      height="35"
      width="30"
    />`;
    li[4].innerHTML = `<img
      src="images/liveHeart.png"
      alt="Heart Icon"
      height="35"
      width="30"
    />`;
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      //console.log(buttons[i].classList.value);
      if (
        buttons[i].classList.value === "key chosen" ||
        buttons[i].classList.value === "key chosen wrong"
      ) {
        buttons[i].classList.value = "key";
        buttons[i].disabled = false;
      }
    }
  }
}
