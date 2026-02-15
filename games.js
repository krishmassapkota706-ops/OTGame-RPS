let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
  const msg = document.querySelector("#msg");

  const userScorepara = document.querySelector("#user-score");
  const compScorepara = document.querySelector("#comp-score");  

  const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3); // chooses options randomly
    return options [ranIdx];
  }

      const drawGame = () => {
    msg.innerText = "Game was a draw! Play again";
    msg.style.backgroundColor = "rgb(72, 42, 42)";
  };

  const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "blue";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You loosed! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
  }

  const playgame = (userChoice) => {
    console.log("user choice =", userChoice);
    //generates computer choice
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice); //generated compchoice is equal to final compchoice

    if(userChoice === compChoice) {
     
    drawGame();
    }else{
        let userWin = true;
        if(userChoice = "rock"){
            //scissors, paper
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        //Rock, Scissors
        userWin = compChoice === "scissors" ? false : true;
    }else{
        //rock, paper
        if(userChoice = "scissors"){
        userWin = compChoice === "rock" ? false : true;
         } }
    showWinner(userWin, userChoice, compChoice);
}
  };
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
           playgame(userChoice);
    });
  });