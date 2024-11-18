const startstopbtn = document.querySelector("#play");
const resetbtn = document.querySelector("#reset-icon");
let seconds = 0;
let minute = 0;
let hour = 0;
let leadSeconds = 0;
let leadMinutes = 0;
let leadHours = 0;

let timerInterval;  // to store the interval reference

function stopWatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minute++;
    }

    if (minute === 60) {
        minute = 0;
        hour++;
    }

    // Adding leading zeroes for display
    leadSeconds = seconds < 10 ? "0" + seconds : seconds;
    leadMinutes = minute < 10 ? "0" + minute : minute;
    leadHours = hour < 10 ? "0" + hour : hour;

    // Display the timer
    let displayTimer = document.querySelector('.timer');
    displayTimer.innerText = leadHours + ":" + leadMinutes + ":" + leadSeconds;
}

// Start/Stop functionality
startstopbtn.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);  // Stop the timer if it's already running
        timerInterval = null;
        startstopbtn.innerHTML = '<i class="fa-solid fa-play"></i>';  // Change to play icon
    } else {
        timerInterval = setInterval(stopWatch, 1000);  // Start the timer
        startstopbtn.innerHTML = '<i class="fa-solid fa-pause"></i>';  // Change to pause icon
    }
});

// Reset functionality
resetbtn.addEventListener('click', () => {
    clearInterval(timerInterval);  // Stop the timer
    timerInterval = null;
    seconds = 0;
    minute = 0;
    hour = 0;

    // Reset the timer display
    let displayTimer = document.querySelector('.timer');
    displayTimer.innerText = "00:00:00";
    startstopbtn.innerHTML = '<i class="fa-solid fa-play"></i>';  // Change back to play icon
});
