let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
       msg.innerText = `You Win!👏 your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
       userScore++;
       userScorePara.innerText = userScore;
    }
    else {
        computerScore++;
        msg.innerText = `You Lose! 😔 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = computerScore;
    }
}

const drawGame = () => {
    msg.innerText = "It's a Tie! 😁";
    msg.style.backgroundColor = "brown";
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genComputerChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }

    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    });
});