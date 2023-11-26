function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener('click', e => {
  e.target.disabled = true;
  timerId = setInterval(() => {
    const backgroundColor = getRandomHexColor();
    document.body.style.backgroundColor = backgroundColor;
  }, 1000);
});

stopBtn.addEventListener('click', e => {
  clearInterval(timerId);
  startBtn.disabled = false;
});
