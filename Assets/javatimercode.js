var secondsDisplay = document.querySelector("#seconds");
var playButton = document.querySelector("#play");
getTimePreferences();
function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed);
    var formattedSeconds;

if (secondsLeft <10){
    formattedSeconds = "0" + secondsLeft;
} else {
    formattedSeconds = secondsLeft;
}
return formattedSeconds;
}

function renderTime() {
    secondsDisplay.textContent = getFormattedSeconds();
}

function startTimer() {
    setTimeout();

    interval - setInterval(function() {
        secondsElapsed++;
        renderTime();
    }, 1000);
}

function choose(buttonResponse) {
    if (buttonResponse === correctAnswer);
}



