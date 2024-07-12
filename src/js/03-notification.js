/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const notification = document.querySelector('.js-alert');

/*
 * Функції
 */

//!======================================================

// setTimeout(() => {
//   showNotification();
// }, 5000);

// timeoutId = setTimeout(() => {
//   hideNotification();
// }, 10000);

// notification.addEventListener('click', () => {
//   hideNotification();
//   clearTimeout(timeoutId);
// });

//!======================================================

function showNotification() {
  console.log('SHOW');
  notification.classList.add('is-visible');
}
function hideNotification() {
  console.log('HIDE');
  notification.classList.remove('is-visible');
}

//!======================================================

const notification = document.querySelector('.js-alert');
const NOTIFICATION_DELAY = 4000;
const MAX_NOTIFICATION_COUNT = 5;
let notificationCount = 0;
let timeoutId;

const intervalId = setInterval(() => {
  console.log(++notificationCount);
  showNotification();
  timeoutId = setTimeout(hideNotification, 2000);

  if (notificationCount === MAX_NOTIFICATION_COUNT) {
    clearInterval(intervalId);
    console.log('Max Count Notification');
  }
}, NOTIFICATION_DELAY);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log('Max Count Notification');
// }, 1000);

notification.addEventListener('click', () => {
  hideNotification();
  clearInterval(intervalId);
  clearTimeout(timeoutId);
});
