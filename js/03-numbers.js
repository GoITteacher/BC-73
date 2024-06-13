/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

//!===============================================================

// const x = '10.123efs234';

// const res1 = Number(x);
// const res2 = Number.parseInt(x);
// const res3 = Number.parseFloat(x);

// console.log(res1);
// console.log(res2);
// console.log(res3);

//!===============================================================

// const min = 120;
// const width = prompt('Enter width'); // '10px';
// const result = Number.parseInt(width) + min;

// console.log(result);

//!===============================================================

// const result = Math.round(10.7);//11
// const result = Math.round(10.5);//11
// const result = Math.round(10.3); //10
// const result = (Math.round(x) * 2) / Math.round(y);
// console.log(result);

// const res1 = Math.ceil(1.0001); //2
// const res2 = Math.floor(9.999999999999); //9
// console.log(res1, res2);

// const userMessage = 'Hello world';
// const x = Math.floor(Math.random() * userMessage.length);
// console.log(`userMessage[${x}]`, userMessage[x]);

// const min = 10;
// const max = 20;

// const rand = Math.round(Math.random() * (max - min) + min);

// console.log(rand);

//!===============================================================

// let elementWidth = 50;
// console.log('elementWidth: ', Number.parseInt(elementWidth));

// let elementHeight = '200.74px';
// console.log('elementHeight: ', Number.parseFloat(elementHeight));

//!===============================================================
/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

// const value = 27.3;

// console.log(Math.round(value));
// console.log(Math.ceil(value));
// console.log(Math.floor(value));
