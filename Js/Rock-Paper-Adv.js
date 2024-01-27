let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");


const genCompChoice = ()=>{
    //Generate computer choice 
    let compOption = ["rock","paper","scissors"]; 
    let randIndex = Math.floor(Math.random()*3);
    return compOption[randIndex];
};

const showWinner = (userWin)=>{
    
    if (userWin) {
        /*user win*/
        ++userScore;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win, Computer Loss";
        msg.style.backgroundColor = "#32CD32";
    } else {
        /*computer win*/
        ++compScore;
        compScorePara.innerText = compScore;
        msg.innerText = "You loss, Computer Win!!";
        msg.style.backgroundColor = "#ED2839";
    }
};

const drawGame = ()=>{
    msg.innerText = "Game was Draw!!";
    msg.style.backgroundColor = "#7BAFD4";       
 
};

let playGame = (userChoice)=>{
    const compChoice =  genCompChoice();
    console.log("Computer choice = ",compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }    
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("Id");
        
        playGame(userChoice);
        
    });
});
