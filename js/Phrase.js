/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.letter = this.letter;
  }
  addPhraseToDisplay() {
    let phraseDiv = document.getElementById("phrase");
    let ul = phraseDiv.getElementsByTagName("ul")[0];
    if (ul.hasChildNodes()) {
      ul.innerHTML = "";
    }
    for (let i = 0; i < this.phrase.length; i++) {
      let li = document.createElement("li");
      ul.appendChild(li);
      console.log(this.phrase[i]);
      if (this.phrase[i] === " ") {
        console.log("this one is empty");
        li.classList.add("space");
      } else {
        li.classList.add("hide");
        li.classList.add("letter");
        li.classList.add(this.phrase[i]);
        li.innerHTML = this.phrase[i];
      }
    }
  }
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    if (game.activePhrase.checkLetter(letter)) {
      let letterLi = document.getElementsByClassName(`${letter}`);
      for (var i = 0; i < letterLi.length; i++) {
        letterLi[i].classList.remove("hide");
        letterLi[i].classList.add("show");
        console.log(letterLi[i]);
        console.log("classlist is " + letterLi[i].classList);
      }
    } else {
      console.log("nope");
      return false;
    }
  }
}
