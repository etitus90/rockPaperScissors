function getComputerChoice() {
    let random = Math.floor(Math.random()*3)+1
    let compChoice = ""
    if (random === 1) {
        compChoice = "Rock"
    } else if (random === 2) {
        compChoice = "Paper"
    } else {
        compChoice = "Scissors"
    }
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            return 1
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissors") ||
               (playerSelection === "scissors" && computerSelection === "rock")) {
                    return 2
    } else {
        return 3
    }
}

function game() {
    let results = ""
    let playerScore = 0
    let compScore = 0

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, or scissors?: ")
        const computerSelection = getComputerChoice()
        const round = playRound(playerSelection, computerSelection)
        if (round === 1) {
            results = `You win! ${playerSelection} beats ${computerSelection}`
            playerScore += 1
        } else if (round === 2) {
            results = `You lose! ${computerSelection} beats ${playerSelection}`
            compScore += 1
        } else {
            results = `Draw! Please try again.`
        }
        console.log(results)
        console.log(`Current Scores: Player: ${playerScore} Computer: ${compScore}`)
    }
    console.log(`Final Score: Player: ${playerScore} Computer: ${compScore}`)
    if (playerScore > compScore) {
        console.log("Player wins!")
    } else if (playerScore < compScore) {
        console.log("Player loses!")
    } else {
        console.log("Tied game.")
    }
}

game()