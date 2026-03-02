let form = document.querySelector(".form");
let guessVal = document.querySelector(".guessField");
let guessesVal = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let cong = document.querySelector("#cong");

// let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber = 44;

let arr = [];
let remaining = 10;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let guess = Number(guessVal.value);

    if (!guess || guess < 1 || guess > 100) {
        lowOrHi.innerHTML = "Please enter number between 1 and 100";
        return;
    }

    arr.push(guess);

    // show previous guesses
    guessesVal.innerHTML = arr.join(", ");

    remaining--;
    lastResult.innerHTML = remaining;

    if (guess === randomNumber) {
        cong.innerHTML = "🎉 Congratulations! You guessed it right!";
        lowOrHi.innerHTML = "";
        endGame();
    } else if (remaining === 0) {
        cong.innerHTML = `💀 Game Over! Number was ${randomNumber}`;
        endGame();
    } else {
        if (guess < randomNumber) {
            lowOrHi.innerHTML = "Too low!";
        } else {
            lowOrHi.innerHTML = "Too high!";
        }
    }

    guessVal.value = "";
});

function endGame() {
    guessVal.disabled = true;
}