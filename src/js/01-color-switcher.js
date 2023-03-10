const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId;

stopBtnEl.disabled = 'true';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleStartBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtnEl.disabled = 'true';
  stopBtnEl.removeAttribute('disabled');
}
function handleStopBtnClick() {
  startBtnEl.removeAttribute('disabled');
  stopBtnEl.disabled = 'true';
  clearInterval(timerId);
}

startBtnEl.addEventListener('click', handleStartBtnClick);
stopBtnEl.addEventListener('click', handleStopBtnClick);
