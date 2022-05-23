let playerScore = 0;
let computerScore = 0;

const gameButtons = document.querySelectorAll('.option');
const playerScoreElement = document.querySelector('.playerScore');
const computerScoreElement = document.querySelector('.computerScore');
const playerChoiceElement = document.querySelector('.playerChoice');
const computerChoiceElement = document.querySelector('.computerChoice');
const roundResultElement = document.querySelector('.roundResult');
const gameResultElement = document.querySelector('.gameResult');

function capitalize (s) {
    // capitalizes the first letter of a string
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function checkForGameOver () {
    // if 5 points have been reached, disables gameButtons and announces winner
    if (playerScore === 5 || computerScore === 5) {
        gameButtons.forEach((button) => {
            button.setAttribute('disabled', '');
        });

        if (playerScore === 5) {
            gameResultElement.textContent = 'YOU WIN!!!';
        } else if (computerScore === 5) {
            gameResultElement.textContent = 'YOU LOSE...';
        };
     };
}

function computerPlay () {
    // randomly selects between the three options for the computer player

    const choices = ['Rock', 'Paper', 'Scissors'];
    // choose a number between 0 and 2 for the index
    let randomSelection = Math.floor(Math.random() * choices.length);
    return choices[randomSelection];
}

function game() {
    // plays a round each time the button is clicked
    let computerInput = "";
    let playerInput = "";
    refreshScoreDisplay();

    // each time a button is clicked, play a round
    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            computerInput = computerPlay();
            playerInput = button.id;
            playerInput = capitalize(playerInput); // the switch statement and formatting for text outputs rely on this being capitalized

            playerChoiceElement.textContent = "You picked " + playerInput;
            computerChoiceElement.textContent = "They picked " + computerInput;
            roundResultElement.textContent= playRound(playerInput, computerInput);
            
            refreshScoreDisplay();
            checkForGameOver();
        });
    });
}

function playRound (playerSelection, computerSelection) {
    // takes both selections and compares them to declare a winner.
    // it will return one of three strings dependant on the outcome
    let playerWon = false;
    
    if (computerSelection === 'Rock') {
        switch (playerSelection) {
            case 'Rock':
                playerWon = null;
                break;
            case 'Paper':
                playerWon = true;
                break;
            case 'Scissors':
                playerWon = false;
                break;
            default:
                console.log('An error has occurred.');
        }
    } else if (computerSelection === 'Paper') {
        switch (playerSelection) {
            case 'Rock':
                playerWon = false;
                break;
            case 'Paper':
                playerWon = null;
                break;
            case 'Scissors':
                playerWon = true;
                break;
            default: 
                console.log('An error has occurred.');
        }
    } else if (computerSelection === 'Scissors') {
        switch (playerSelection) {
            case 'Rock':
                playerWon = true;
                break;
            case 'Paper':
                playerWon = false;
                break;
            case 'Scissors':
                playerWon = null;
                break;
            default: 
                console.log('An error has occurred.');
        }
    } else {
        console.log('An error has occurred.');
    }

    // returns a string that declares the winner and result, then adds to their score
    if (playerWon === null) {
        return "It's a draw! You both picked " + playerSelection;
    } else if (playerWon) {
        playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (!playerWon) {
        computerScore++;
        return "You Lose... " + computerSelection + " beats " + playerSelection;
    }
}

function refreshScoreDisplay () {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

game();