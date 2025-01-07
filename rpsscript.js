
//declaring our two variables that is user score and computer score 
let userscore=0;
let computerscore=0;

//accessing the rock paper scissor by classname 
const choices=document.querySelectorAll(".choice");  //accessing all the images 
const msg=document.querySelector("#msg");  //accessing the message box by its id
const user_score=document.querySelector("#user-score"); //accessing the user score by id 
const comp_score=document.querySelector("#computer-score"); // accessing the computer score by id 

// when the game is drawn that means both select same sign 
const drawgame=()=>{
    msg.innerText="game was drawn";   //
    msg.style.backgroundColor="orange";
}

// showing the winner whether it is user or computer 
const showWinner=(userwin,userchoice,computerchoice)=>{
    if(userwin){       //if user won 
        userscore=userscore+1;      //incrementing the score to +1 everytime 
        user_score.innerText=userscore;     //changing the score 
        msg.innerText=`You Won! your ${userchoice} beats ${computerchoice}`;  //loading the message 
        msg.style.backgroundColor="green";     //colour for user won case 
    }
    else{
        computerscore=computerscore+1;    //incrementing computer score to +1
        comp_score.innerText=computerscore;  //changing the score 
        msg.innerText=`Computer Won! ${computerchoice} beats your ${userchoice}`;  //loading the message 
        msg.style.backgroundColor="red"; //colour for computer won case
    }
}

//the rules and conditions that are applied to the game!
const playGame=(userchoice)=>{
    const computerchoice=generatecomputerchoice();
    if(userchoice===computerchoice){ //game drawn condition
        drawgame();  //calling drawgame function
    }
    else{
        let userwin=true;  
        if(userchoice==="rock"){
            userwin=computerchoice==="paper" ? false:true;
        }
        else if(userchoice==="paper"){
            userwin=computerchoice==="scissor"?false:true;
        }
        else{
            userwin=computerchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,computerchoice);
    }
}

//computer generating responses which are random
const generatecomputerchoice=()=>{
    const options=["rock","paper","scissor"];  //passing an array
    const randomindex=Math.floor(Math.random() *3);  //using math, random values are generating 
    return options[randomindex];
}

//accessing each choice whenever we click them by their id's
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});