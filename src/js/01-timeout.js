/*
 * Метод window.setTimeout(callback, delay, args)
 */

// setTimeout(() => {
//   console.log('1');
// }, 1000);

// setTimeout(() => {
//   console.log('2');
// }, 6000);

// setTimeout(() => {
//   console.log('3');
// }, 3000);

// for (let i = 0; i < 100000; i++) {
//   console.log('i');
// }

// console.log('END');

// console.log('AFTER END');

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

// const timeoutId = setTimeout(() => {
//   console.log('SPAM');
// }, 5000);

// const username = prompt('Enter your username');

// if (username === 'ADMIN') {
//   clearTimeout(timeoutId);
// }

/**
 * Можливість передати параметри для колбеку
 */

for (let i = 0; i < 3; i++) {
  setTimeout(callback, i * 1000, i, 'Hello world');
}
function callback(i, str) {
  console.log(i, str);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    callback(i, 'Hello world');
  }, i * 1000);
}
