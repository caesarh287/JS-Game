function computerPlay() {
    const gameElems = ["rock", "paper", "scissors"]
    let selectIndex = randomGenerator(3)
    //console.log(selectIndex)
    return gameElems[selectIndex]
}

function randomGenerator(rangeEnd) {
    return Math.round(Math.random() * 10) % rangeEnd
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors")
        return 1
    }

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats Rock")
        return -1
    }

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        console.log("It is a tie! Keep on playing.")
        return 0
    }

    if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock")
        return 1
    }

    if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats Paper")
        return -1
    }

    if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        console.log("It is a tie! Keep on trying.")
        return 0
    }

    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors")
        return -1
    }

    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats Paper")
        return 1
    }

    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        console.log("It is a tie! Keep on trying.")
        return 0
    }
}


function game() {
    let score = 0
    let playerScore = 0
    let computerScore = 0
    let tieScore = 0

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Please enter your choice:")
        let computerSelection = computerPlay()
        score = playRound(playerSelection, computerSelection)

        if (score > 0)
            ++playerScore
        else if (score === 0)
            ++tieScore
        else
            ++computerScore

        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore} TieScore: ${tieScore}`)
    }
    return {playerScore,computerScore,tieScore}
}

console.log(game());