let startTime, interval;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let elapsed = 0;

function updateDisplay() {
  const time = elapsed;
  const hrs = String(Math.floor(time / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  display.textContent = `${hrs}:${mins}:${secs}`;
}

startBtn.addEventListener('click', () => {
  if (!running) {
    startTime = Date.now() - elapsed;
    interval = setInterval(() => {
      elapsed = Date.now() - startTime;
      updateDisplay();
    }, 1000);
    running = true;
  }
});

stopBtn.addEventListener('click', () => {
  if (running) {
    clearInterval(interval);
    running = false;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  running = false;
  elapsed = 0;
  updateDisplay();
});
