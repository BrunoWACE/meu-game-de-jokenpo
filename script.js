const hajimeScreen = document.getElementById("hajime-screen")
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

/*
humanScoreNumber -> Camel Case
GAME_OPTIONS     -> Snake Case
*/

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    const machineChoice = playMachine()
playTheGame(humanChoice, machineChoice)

// anima botão humano
const humanBtn = document.getElementById(humanChoice)
animateButton(humanBtn)

// anima botão da máquina
const machineBtn = document.getElementById(machineChoice)
animateButton(machineBtn)

}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('humano: ' + human + 'maquina' + machine)

    if (human === machine) {
        result.innerHTML = "EMPATE!";

      


    } else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "VITÓRIA!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "DERROTA!"
    }

    result.classList.remove('pop'); // remove se já tiver
    void result.offsetWidth;        // força o reflow
    result.classList.add('pop');    // reaplica animação

}

function animateButton(button) {
    button.classList.remove('animate') // remove se já tiver
    void button.offsetWidth            // força reflow
    button.classList.add('animate')    // reaplica
}

const startScreen = document.getElementById("start-screen")
const gameContainer = document.querySelector(".container")
const poStart = document.getElementById("start-po") // novo

// esconde o jogo até apertar Enter
gameContainer.style.display = "none"
poStart.classList.add("shake") // ativa tremor só no início

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        startScreen.style.display = "none"

        // Mostra "HAJIME!"
        hajimeScreen.style.display = "flex"

        setTimeout(() => {
            hajimeScreen.style.display = "none"
            gameContainer.style.display = "flex"
            poStart.classList.remove("shake")
        }, 1000) // 1 segundo de HAJIME
    }
})

// Também inicia o jogo com toque/click na tela (mobile)
startScreen.addEventListener("click", () => {
    startScreen.style.display = "none"

    hajimeScreen.style.display = "flex"

    setTimeout(() => {
        hajimeScreen.style.display = "none"
        gameContainer.style.display = "flex"
        poStart.classList.remove("shake")
    }, 1000)
})

const resetButton = document.getElementById("reset-button")

resetButton.addEventListener("click", () => {
    humanScoreNumber = 0
    machineScoreNumber = 0
    humanScore.innerHTML = 0
    machineScore.innerHTML = 0
    result.innerHTML = ""
})

