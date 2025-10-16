https://github.com/Prasanna6421/Number_Guess_Game/new/main?filename=README.md
# Number Guessing Game

A fun and simple number guessing game built with **HTML**, **CSS**, and **JavaScript**.

---

## Features

* Random number generated between 1 and 100.
* User inputs guesses in a number input field.
* Feedback provided:

  * "Too high" if the guess is greater than the number.
  * "Too low" if the guess is less than the number.
  * "Correct!" if the guess matches the number.
* Input field automatically focuses for easy typing.
* Prevents invalid guesses outside the range (1–100).

---

## Technologies Used

* **HTML5** – structure of the page and input elements.
* **CSS3** – styling the game interface.
* **JavaScript (ES6+)** – game logic and DOM manipulation.

---

## How to Use

1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. Type a number between 1 and 100 in the input box.
4. Press **Enter** or click the submit button.
5. Follow hints until the correct number is guessed.
6. Reload the page to play again.

---

## Key Notes

* Convert input to a number for proper comparison:

  ```javascript
  const guess = Number(guessInput.value);
  ```
* Input restrictions in HTML ensure guesses are within range:

  ```html
  <input type="number" id="guessInput" min="1" max="100">
  ```

---


Prasanna Venkatesh
[GitHub](https://github.com/Prasanna6421) | [LinkedIn](https://www.linkedin.com/in/prasanna-venkatesh-45590036b)
