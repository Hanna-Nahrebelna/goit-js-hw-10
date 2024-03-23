// Завдання 2 - Генератор промісів

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formOfDelay = document.querySelector(".form");

formOfDelay.addEventListener('submit', event => {
  event.preventDefault();
  
  const timer = parseInt(event.currentTarget.elements.delay.value);
  const radio = event.currentTarget.elements.state.value;
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radio === "fulfilled") {
        resolve(timer);
      } else {
        reject(timer);
      }
    }, timer);
  });

  promise
    .then(delayValue => {
      iziToast.success({
        color: 'green',
        position: "topRight",
        message: `Fulfilled promise in ${delayValue}ms`
      });
    })
    .catch(delayValue => {
      iziToast.error({
        color: 'red',
        position: "topRight",
        message: `Rejected promise in ${delayValue}ms`
      });
    });
});



