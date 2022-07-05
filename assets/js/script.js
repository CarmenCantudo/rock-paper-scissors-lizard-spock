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

// Add user options to user-choice div
function runGame(UserClickChoice) {
    document.getElementsByClassName('choice-btn').value = "";
    userChoice.innerHTML = '<img src="assets/images/'+ UserClickChoice + '.png" alt="rock">';
}

// Generate random pc choice
function generatePcChoice() {
    pcRandomChoice =Math.floor(Math.random()*pcChoices.length);
    pcFinalChoice = pcChoices[pcRandomChoice]
    pcChoice.innerHTML = '<img src="assets/images/'+ pcFinalChoice + '.png" alt="rock">';
    game(UserClickChoice);
}

/* 
** Calculate the possible options and return the result
** Code inspire by https://youtu.be/BjDZFfBWQ-0
*/
function game(UserClickChoice) {
    let userNumberChoice = pcChoices.indexOf(UserClickChoice);
    let play = [
        [0,1,2,2,1],
        [2,0,1,1,2],
        [1,2,0,2,1],
        [1,2,1,0,2],
        [2,1,2,1,0],
    ];

    let play_description = [
        ["Same choice","Paper covers Rock","Rock crushes Scissors","Rock crushes Lizard","Spock vaporizes Rock"],
        ["Paper covers Rock","Same choice","Scissors cuts Paper","Lizard eats Paper","Paper disproves Spock"],
        ["Rock crushes Scissos","Scissors cuts Paper","Same choice","Scissors decapitates Lizard","Spock smashes Scissors"],
        ["Rock crushes Lizard","Lizard eats Paper","Scissors decapitates Lizard","Same choice","Lizard poisons Spock"],
        ["Spock vaporizes Rock","Paper disproves Spock","Spock smashes Scissors","Lizard poisons Spock","Same choice"],
    ];

    playResult = play[pcRandomChoice][userNumberChoice];
    let result_text = ["It's a tie!", "You win!", "You lose!"];
    let message_description = play_description[pcRandomChoice][userNumberChoice];
    result.innerHTML = message_description + '. ' + result_text[playResult];

    getScore();
}

// Get the score and add it to div
function getScore() {
    if (playResult === 0) {
        userScoreDiv.innerHTML = userScore;
        pcScoreDiv.innerHTML = pcScore;
    } else if(playResult === 1) {
        userScore++;
        userScoreDiv.innerHTML = userScore;
        pcScoreDiv.innerHTML = pcScore;
    } else {
        pcScore++;
        userScoreDiv.innerHTML = userScore;
        pcScoreDiv.innerHTML = pcScore;
    }
}