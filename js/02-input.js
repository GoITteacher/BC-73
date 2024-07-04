/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

//!======================================================
// const userNameEl = document.querySelector('.js-user-name');
// const helloEl = document.querySelector('.js-hello');

// userNameEl.addEventListener('input', onUserNameInput);

// function onUserNameInput(e) {
//   const userName = userNameEl.value.trim() || 'Anonym';
//   helloEl.textContent = `Hello, ${userName}!`;
// }

//!======================================================
/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

//!======================================================

// const userNameEl = document.querySelector('.js-user-name');

// userNameEl.addEventListener('focus', () => {
//   userNameEl.classList.remove('invalid', 'valid');
// });

// userNameEl.addEventListener('blur', () => {
//   const value = userNameEl.value.trim();
//   const minLen = userNameEl.dataset.minLen;

//   if (value.length < minLen) {
//     userNameEl.classList.add('invalid');
//   } else {
//     userNameEl.classList.add('valid');
//   }
// });
