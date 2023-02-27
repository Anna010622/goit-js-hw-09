import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const btnEl = document.querySelector('button');
const delayEl = document.querySelector('[name="delay"]');
const delayStepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

let delay;
let delayStep;
let amount;
let position = 0;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleFormElSubmit(event) {
  event.preventDefault();
  position = 0;
  handleDelayElInput();
  handleDelayStepElInput();
  event.target.reset();
}

function handleBtnElClick() {
  for (let i = 0; i < amount; i++) {
    position += 1;

    if (delayEl.value && delayStepEl.value && amountEl.value) {
      createPromise(position, delay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
      delay = delay + delayStep;
    }
  }
}

function handleDelayElInput() {
  delay = Number(delayEl.value);
}
function handleDelayStepElInput() {
  delayStep = Number(delayStepEl.value);
}
function handleAmountElInput(event) {
  amount = Number(event.target.value);
}

formEl.addEventListener('submit', handleFormElSubmit);
btnEl.addEventListener('click', handleBtnElClick);
delayEl.addEventListener('input', handleDelayElInput);
delayStepEl.addEventListener('input', handleDelayStepElInput);
amountEl.addEventListener('input', handleAmountElInput);
