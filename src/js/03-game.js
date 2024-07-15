/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const resultElem = document.querySelector('.result');

startBtn.addEventListener('click', () => {
  const promises = [];
  resultElem.textContent = '';

  for (let i = 0; i < 3; i++) {
    container.children[i].textContent = '';

    const promise = createPromise((i + 1) * 200);

    promises.push(promise);

    promise
      .then(smile => {
        container.children[i].textContent = smile;
      })
      .catch(smile => {
        container.children[i].textContent = smile;
      });
  }

  Promise.allSettled(promises).then(res => {
    const result = res.map(el => {
      //   return el.value || el.reason;
      return Object.values(el)[1];
    });

    const isWinner = result.every(el => el === '🤑');

    resultElem.textContent = isWinner ? 'Winner' : 'Loser';
  });
});

//!======================================================

function createPromise(delay) {
  const isActive = Math.random() > 0.2;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve('🤑');
      } else {
        reject('👿');
      }
    }, delay);
  });
  return promise;
}
