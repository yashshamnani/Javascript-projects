//  select elements 
 
 let rock = document.querySelector("#r");
 let paper = document.querySelector("#p");
 let scissors = document.querySelector("#s");

 let user = document.getElementById("result-user-stat")
 let computer = document.getElementById("result-comp-stat")
 let winner = document.getElementById("result-final-stat")
 
 let userScoreVal = document.getElementById("userScoreVal")
 let compScoreVal = document.getElementById("compScoreVal")

// declaring variables

let arr = ['rock','paper','scissors']

var userInput
var compInput; 

var userWin = 0;
var computerWin = 0;

let inputArray = [rock,paper,scissors]


inputArray.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        user.textContent = "User:"//otherwise at every event there will  be rockrockrock........
        userInput = e.target.getAttribute("alt")
        user.textContent = user.textContent+userInput
        setTimeout(setCompInput,50)
        setTimeout(setWin,300)
    })
} )
 

 // function for setting random computer input
  
 function setCompInput(){
   compInput = arr[Math.floor(Math.random()*arr.length)]
   computer.textContent = "Computer:"
   computer.textContent += compInput
 }

 // function for defination of winners
 
 function setWin(){
    if(userInput==compInput){
        winner.textContent = "Winner : Draw"
    }
    else if(userInput=='rock'&&compInput=='paper'){
        winner.textContent = "Winner : Computer"
        computerWin++
        compScoreVal.innerText = computerWin

    }
    else if(userInput=='rock'&&compInput=='scissors'){
        winner.textContent = "Winner : User"
        userWin++
        userScoreVal.innerText = userWin

    }
    else if(userInput=='scissors' && compInput=='rock'){
        winner.textContent = "Winner : Computer"
        computerWin++
        compScoreVal.innerText = computerWin
    }
    else if(userInput=='scissors' && compInput=='paper'){
        winner.textContent = "Winner : User"
        userWin++
        userScoreVal.innerText = userWin
    }
    else if(userInput=='paper' && compInput=='rock'){
        winner.textContent = "Winner : User"
        userWin++
        userScoreVal.innerText = userWin

    }
    else if(userInput=='paper' && compInput=='scissors'){
        winner.textContent = "Winner : Computer"
        computerWin++
        compScoreVal.innerText = computerWin


    }
 }