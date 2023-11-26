function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', e => {
  e.target.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    const backgroundColor = getRandomHexColor();
    document.body.style.backgroundColor = backgroundColor;
  }, 1000);
});

stopBtn.addEventListener('click', e => {
  clearInterval(timerId);
  e.target.disabled = true;
  startBtn.disabled = false;
});
