//Retreiving the start time for the clock
let newTime = parseInt(document.getElementById("timer").innerText);
let timerHandle;
let newBreak = parseInt(document.getElementById("brMinutes").innerText);
let sound = new Audio("http://mackville.net/pomodoro/sounds/session-start.mp3");

// Add time to the start time
function addsTime(){
  newTime++;
  document.getElementById("timer").innerText = newTime + ":00";
}

//Subtract time from the start time
function subtract(){
  newTime--;
  document.getElementById("timer").innerText = newTime + ":00";
}

function begin(){
  let count = newTime * 60;
  let minute = Math.floor(count/60);
  if(minute < 10){
    minute = "0" + minute;
  }

  timerHandle = setInterval(function() {
    count -=1;
    if(Math.floor(count % 60) >= 10){
      document.getElementById("timer").innerText = minute -1 + ":" + Math.floor(count % 60);
    }

    else{
      document.getElementById("timer").innerText = minute -1 + ":0" + Math.floor(count % 60);
    }

    if(count <=0) {
      sound.play();
      clearInterval(timerHandle);
    }
  }, 1000);
}

//  What happens when you try to stop
function stop(){
  clearInterval(timerHandle);
  document.getElementById("timer").innerText = "25:00";
  alert("Don't be a quitter!");
}

// Creating the break countdown
function begin2() {
  let count = newBreak * 60;
  let minute = Math.floor(count/60);
  if(minute < 10 ){
    minute = "0" + minute;
  }

  timerHandle = setInterval(function() {
    count -=1;
    if(count >= 10){
      document.getElementById("brMinutes").innerText = minute -1 + ":" + Math.floor(count % 60);
    }
    else{
      document.getElementById("brMinutes").innerText = minute -1 + ":0" + Math.floor(count % 60);
    }

    if (count <= 0) { // deactivate countdown after it's down to 0
      sound.play();
      clearInterval(timerHandle);
    }
  }, 1000);
}

// Stopping break timer
function brStop(){
  clearInterval(timerHandle);
  document.getElementById("brMinutes").innerText = "5:00";
}

// Add minutes to break
function addBreak(){
  newBreak++;
  parseInt(document.getElementById("brMinutes").innerText = newBreak + ":00");
}

// Subtract minutes from break
function subtractBreak(){
  newBreak--;
  document.getElementById("brMinutes").innerText = newBreak + ":00";
}
