// Popup from https://youtu.be/MBaw_6cPmAw

let openModalButtons = document.getElementById('btn-rules');
let closeModalButtons = document.getElementById('close-btn-rules');
let overlay = document.getElementById('overlay');

openModalButtons.addEventListener('click', () => {
    let modal = document.getElementById('modal');
    openModal(modal);
})

closeModalButtons.addEventListener('click', () => {
    let modal = document.getElementById('modal');
    closeModal(modal);
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Game

const pcChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let userChoice = document.getElementById('user-choice');
let pcChoice = document.getElementById('pc-choice');
let result = document.getElementById('result');
let choices = document.getElementsByClassName('choice-btn');
let UserClickChoice;
let pcRandomChoice;
let pcFinalChoice;
let userScoreDiv = document.getElementById("user-score");
let pcScoreDiv = document.getElementById("pc-score");
let userScore = 0;
let pcScore = 0;

// Wait for the DOM to finish loading before running the game
// Get the choice elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    for (let choice of choices) {
        choice.addEventListener("click", function() {
                UserClickChoice = this.getAttribute("data-type");
                runGame(UserClickChoice);
                generatePcChoice();
        })
    }
});

// Wait for the DOM to finish loading before running the game
// Get the choice elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    for (let choice of choices) {
        choice.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "") {
                checkAnswer();
            } else {
                let gameChoice = this.getAttribute("data-type");
                runGame(gameChoice);
                generatePcChoice();
            }
        });
    }
});

// Add user options to user-choice div
function runGame(gameChoice) {
    document.getElementsByClassName('choice-btn').value = "";
    userChoice.innerHTML = '<img src="assets/images/'+ gameChoice + '.png" alt="rock">';
}

// Generate random pc choice and add it to pc-choice div
function generatePcChoice() {
    const pcChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber =Math.floor(Math.random()*pcChoices.length);
    pcChoice.innerHTML = '<img src="assets/images/'+ pcChoices[randomNumber] + '.png" alt="rock">';
}

