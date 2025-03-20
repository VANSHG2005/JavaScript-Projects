let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let flagBtn = document.getElementById('flagBtn');
let lapsContainer = document.getElementById('laps');

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00:00:00`;
    msec = secs = mins = 0;
    lapsContainer.innerHTML = '';
});

flagBtn.addEventListener('click', function () {
    let lapTime = `${formatTime(mins)}:${formatTime(secs)}:${formatTime(msec)}`;
    let li = document.createElement('li');
    li.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
    lapsContainer.appendChild(li);
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    timerDisplay.innerHTML = `${formatTime(mins)}:${formatTime(secs)}:${formatTime(msec)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
