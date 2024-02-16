let timer;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('minutes').textContent = padTime(minutes);
  document.getElementById('seconds').textContent = padTime(seconds);
}

function padTime(time) {
  return time < 10 ? '0' + time : time;
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);