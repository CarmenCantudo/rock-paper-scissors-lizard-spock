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

let userChoice = document.getElementById('user-choice');
let pcChoice = document.getElementById('pc-choice');
let result = document.getElementById('result');
let choices = document.getElementsByClassName('choice-btn');

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
    userChoice.innerHTML = gameChoice;
}

// Generate random pc choice
function generatePcChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    
    if (randomChoice === 1) {
        pcRandomChoice = 'rock';
    }
    else if (randomChoice === 2) {
        pcRandomChoice = 'paper';
    }
    else if (randomChoice === 3) {
        pcRandomChoice = 'scissors';
    }
    else if (randomChoice === 4) {
        pcRandomChoice = 'lizard';
    }
    else pcRandomChoice = 'spock';
    
    pcChoice.innerHTML = pcRandomChoice;
}

