let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    // this function randomly selects between the three options 
    // for the computer player

    const choices = ['Rock', 'Paper', 'Scissors'];
    // choose a number between 0 and 2 for the index
    let randomSelection = Math.floor(Math.random() * choices.length);
    return choices[randomSelection];
}

function playRound (playerSelection, computerSelection) {
    // this function takes both selections and compares them to declare a winner.
    // three if statements will compare each possible computer choice,
    // against inner switch cases representing player choices
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

function validateInput (input) {
    // checks player input against an array of accepted answers 
    const playerChoices = ['rock', 'paper', 'scissors'];
    return playerChoices.includes(input.toLowerCase());
}

function capitalize (s) {
    // capitalizes the first letter of a string
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function game() {
    // this function will validate player input and play a "best of 3"
    // while logging the results of each round

    for (i = 0; i < 5; i++) { // play 5 games
        let computerInput = computerPlay();
        let playerInput = "";

        while (!validateInput(playerInput)) {
            playerInput = prompt("Enter Rock, Paper, or Scissors");
        };

        playerInput = capitalize(playerInput.toLowerCase());
        console.log("You picked " + playerInput);
        console.log("They picked " + computerInput);
        console.log(playRound(playerInput, computerInput));
        
        // if either score is 3 before reaching five games, the best 
        // out of 5 condition is met and the game can end early
        if (playerScore === 3 || computerScore === 3) {
            break;
        }
    }
    
    console.log("Final score: " + playerScore + "(You) - " + computerScore);
    if (playerScore === computerScore) {
        console.log("The game has ended in a tie!")
    } else if (playerScore > computerScore) {
        console.log("You've won!!!");
    } else if (playerScore < computerScore) {
        console.log("You've lost...");
    }
}

console.log("This will be a best out of 5!");
console.log("============================");
game();