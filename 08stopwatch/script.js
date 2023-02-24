let timer = document.getElementById("timer");
let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");

// variables to hold the time values

let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading zeroes
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

  
function stopwatch(){
    if(seconds<10){
        leadingSeconds = "0" + seconds;
     }
     else{
        leadingSeconds = seconds;
     }
     if(minutes<10){
        leadingMinutes = "0" + minutes;
     }
     else{
        leadingMinutes = minutes;
     }
     if(hours<10){
        leadingHours = "0" + hours;
     }
     else{
        leadingHours = hours;
     }
    seconds++;
    if(seconds/60===1){
        seconds = 0
        minutes++;
        if(minutes/60===1){
            minutes=0
            hours++;
        }
    }
    timer.innerHTML = `${leadingHours} : ${leadingMinutes} : ${leadingSeconds} `
}

// setInterval(stopwatch,100);
// variables for set interval and timerstatus
timerInterval = "null";
timerStatus = "stopped";

// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.setinterval returns an id
startStopBtn.addEventListener("click",function(){
    if(timerStatus=='stopped'){
    timeInterval = setInterval(stopwatch,1);
    startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
    timerStatus = 'resume';
    }
    else{
         clearInterval(timeInterval)
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = 'stopped';
    }
})

resetBtn.addEventListener("click",function(){
    clearInterval(timeInterval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerHTML = "00:00:00";
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = 'stopped';
})