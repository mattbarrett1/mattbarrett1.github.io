let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;
let guessBtn = document.querySelector("#guessBtn");
let resetBtn = document.querySelector("#resetBtn");
let playerGuess = document.querySelector("#playerGuess");
let feedback = document.querySelector("#feedback");
let attemptsLeft = document.querySelector("#attempts");
let winsDisplay = document.querySelector("#wins");
let lossesDisplay = document.querySelector("#losses");

guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", initializeGame);

initializeGame();

function initializeGame() {
    winsDisplay.textContent = "";
    lossesDisplay.textContent = "";
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("random number:" + randomNumber);
    attempts = 0;

    resetBtn.style.display = 'none';
    guessBtn.style.display = 'inline';

    playerGuess.focus();
    playerGuess.value = "";

    feedback.textContent = "";
    playerGuess.textContent = "";
    document.querySelector("#guesses").textContent = "";
    attemptsLeft.textContent = "";
}

function checkGuess() {
    let guess = playerGuess.value;
    console.log("player guess: " + guess);
    feedback.textContent = "";

    if (guess < 1 || guess > 99) {
        feedback.textContent = "Guess out of range";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("attempts: " + attempts);
    feedback.style.color = "orange";
    if (guess == randomNumber) {
        feedback.textContent = "You guessed it! You won!";
        feedback.style.color = "green";
        wins++;
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        attemptsLeft.textContent = "Attempts left: " +  (7 - attempts);
        if (attempts == 7) {
            feedback.style.color = "red";
            feedback.textContent = "Sorry, you lost";
            losses++;
            gameOver();
        }
        else if (guess > randomNumber) {
            feedback.textContent = "Guess is too high";
        } else {
            feedback.textContent = "Guess is too low";
        }
    }
}

function gameOver() {
    winsDisplay.textContent = "Wins: " + wins;
    lossesDisplay.textContent = "Losses: " + losses;
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}