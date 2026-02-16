//<link href="style.css" rel = "stylesheet">
let correctAnswer = Math.floor(Math.random() * 100) + 1;
let guessResult = "";
let guessCounter = 0;
let answer;
let winCount = 0;
let lossCount = 0;

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessOutput = document.querySelector("#guessOutput");
let guessHistory = document.querySelector("#guessHistory");
let guessAmount = document.querySelector("#guessAmount");
let finishText = document.querySelector("#finish");
let wins = document.querySelector("#wins");
let losses = document.querySelector("#losses");
let resetButton = document.querySelector("#reset")
resetButton.style.display = 'none';

guessButton.addEventListener("click", buttonClick);
resetButton.addEventListener("click", reset);


function buttonClick() {
    answer = Number(guessInput.value);
    console.log(typeof answer);
    console.log(answer);
    console.log(correctAnswer);
    if (guessCounter == 7) {
        return;
    }
    if (answer == null || answer == "") {
        guessOutput.textContent = "Enter a number";
        return;
    }
    if (answer < 1 || answer > 99) {
        guessOutput.textContent = "Guess must be between 99 and 1";
        return;
    }
    guessCounter++;
    if (answer < correctAnswer) {
        guessResult = "Guess was too low";
    } 
    if (answer > correctAnswer) {
        guessResult = "Guess was too high";
    }
    if (answer == correctAnswer) {
        guessResult = "Correct!";
        guessOutput.style.color = "green";
        winCount++;
        gameOver();
    }
    
    if (guessCounter == 7) {
        guessResult = "No guesses left!";
        guessOutput.style.color = "red";
        lossCount++;
        gameOver();
    }
    guessOutput.textContent = guessResult;
    guessAmount.textContent = ("Guesses left: " + (7 - guessCounter));
    guessHistory.textContent += (answer + " ");
}

function gameOver() {
    finishText.textContent = "The correct answer was: " + answer;
    wins.textContent = "Wins: " + winCount;
    losses.textContent = "Losses: " + lossCount;
    resetButton.style.display = 'inline';
}

function reset() {
    finishText.textContent = "";
    wins.textContent = "";
    losses.textContent = "";
    guessAmount.textContent = "";
    guessHistory.textContent = "";
    correctAnswer = Math.floor(Math.random() * 100) + 1;
    guessCounter = 0;
    resetButton.style.display = 'none';
    guessOutput.textContent = "";
}