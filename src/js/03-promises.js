import Notiflix from 'notiflix';

const button = document.querySelector('button');
button.addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = document.querySelector('[name="delay"]');
  const step = document.querySelector('[name="step"]');
  const amount = document.querySelector('[name="amount"]');

  generatePromises(amount, delay, step);
});

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

function generatePromises(amount, delay, step) {
  for (let i = 0; i < amount; i++) {
    const currentDelay = delay + i * step;

    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
