/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keydown', e => {
//   console.log('keydown', e.code);
// });

// document.addEventListener('keypress', e => {
//   console.log('keypress', e.code);
// });

// document.addEventListener('keyup', () => {
//   console.log('keyup');
// });

/**
 * Обробка комбінацій клавіш
 */

//!======================================================

// document.addEventListener('keypress', e => {
//   console.log(e.key, e.code);

//   if (e.code === 'KeyQ' && e.ctrlKey && e.shiftKey) {
//     alert('Дані збережено!');
//   }
// });
