let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
  // rock , papper and scissor
  let option = ["rock", "papper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerHTML = "Game was drawn.. Play again!";
  msg.style.backgroundColor = "green";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("you won");
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `You won! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "blue";
  } else {
    console.log("you lost");
    compScore++;
    compScorePara.innerHTML = compScore;
    msg.innerHTML = `You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);

  //* Generate computer choice

  const compChoice = generateCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    // draw game

    drawGame();
  } else {
    userWin = true;
    if (userChoice === "rock") {
      // comp generate scissor , papper
      userWin = compChoice === "papper" ? false : true;
    } else if (userChoice === "papper") {
      // comp genertae rock scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock , papper
      userWin = userChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
