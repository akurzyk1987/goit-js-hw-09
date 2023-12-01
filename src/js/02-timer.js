import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      Notiflix.Report.warning('Error', 'Please choose a date in the future');
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  },
};

flatpickr(input, options);

const timerElements = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let countdownInterval;

function startTimer() {
  const endDate = flatpickr.parseDate(input.value);
  const now = new Date();
  const timeDifference = endDate - now;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    Notiflix.Report.warning('Info', 'Countdown has ended');
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);

  timerElements.days.textContent = addLeadingZero(days);
  timerElements.hours.textContent = addLeadingZero(hours);
  timerElements.minutes.textContent = addLeadingZero(minutes);
  timerElements.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

button.addEventListener('click', () => {
  countdownInterval = setInterval(startTimer, 1000);
  startTimer(); // Initial call to avoid 1-second delay before first update
});
