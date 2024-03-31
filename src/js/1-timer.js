import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = null;
let timeInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    timeInterval = userSelectedDate - new Date();

    if (timeInterval < 1) {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Please choose a date in the future`,
      });
    } else {
      startBtn.disabled = false;
      inputTime.disabled = true;
    }
  },
};


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

const calendar = flatpickr('#datetime-picker', options);
const inputTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
const timeValueElements = document.querySelectorAll('.value');

console.log(timeValueElements);

startBtn.disabled = true;

startBtn.addEventListener('click', event => {
  const repeatTime = setInterval(() => {
    timeInterval = userSelectedDate - new Date();
    event.preventDefault();
    inputTime.disabled = true;

    if (timeInterval < 1) {
      startBtn.disabled = true;
      inputTime.disabled = false;
      clearInterval(repeatTime);
      return;
    }

    const timer = convertMs(timeInterval);

    timeValueElements[0].innerText = timer.days.toString().padStart(2, '0');
    timeValueElements[1].innerText = timer.hours.toString().padStart(2, '0');
    timeValueElements[2].innerText = timer.minutes.toString().padStart(2, '0');
    timeValueElements[3].innerText = timer.seconds.toString().padStart(2, '0');
  }, 1000);
});