var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourHeading = document.getElementById('hour');
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');

var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');
var resetBtn = document.getElementById('reset');

var interval;

function startTimer() {
    msec += 10;
    if(msec >= 1000) {
        msec = 0;
        sec++;
        if(sec >= 60) {
            sec = 0;
            min++;
            if(min >= 60) {
                min = 0;
                hour++;
            }
            minHeading.innerHTML = formatTime(min);
        }
        secHeading.innerHTML = formatTime(sec);
    }
    msecHeading.innerHTML = formatTime(msec);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function start() {
    interval = setInterval(startTimer, 10);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
}

function pause() {
    clearInterval(interval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function reset() {
    clearInterval(interval);
    hour = min = sec = msec = 0;
    hourHeading.innerHTML = '00';
    minHeading.innerHTML = '00';
    secHeading.innerHTML = '00';
    msecHeading.innerHTML = '000';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);