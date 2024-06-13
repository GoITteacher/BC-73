/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// let x = 15;

// function showUserInfo() {
//   x = 10;
//   const userName = prompt('Enter your name');
//   const city = prompt('Enter your city');
//   console.log(`Hello ${userName}. ${userName} from ${city}`);
// }
// showUserInfo();
// console.log(x);
//!===============================================================

// function sayHello(username) {
//   console.log(`Hello ${username}`);
// }

// sayHello('Roman');
// sayHello('Mila');
// sayHello('Alina');
//!===============================================================

// function myDay(day) {
//   let day = 'вівторок';
//   console.log('застелити ліжко');
//   console.log('поснідати');
//   console.log(`зібрати портфель на ${day}`);
//   console.log('піти до школи');
//   console.log('повернутись додому');
// }

// myDay('понеділок');
// myDay('вівторок', 50);
// myDay();

//!===============================================================

// function showUserInfo(username, age, city) {
//   username = username.toUpperCase();
//   const message = `Hello ${username}.\nAge: ${age}\ncity: ${city}\n\n`;
//   console.log(message);
// }

// showUserInfo('Vasya', 25, 'Lviv');
// showUserInfo('Petro', 22, 'Dnipro');
// showUserInfo('Maks', 21, 'Kyiv');

//!===============================================================

// function sum(x, y) {
//     console.log();
//   return x + y;
// }

// const t = sum(2, 6);
// const q = sum(5, 2);

// console.log(t);
// console.log(q);

//!===============================================================

// function buyS() {
//   console.log(`Hello Test`);
// }

// console.log(buyS());

// console.log(result);

//!===============================================================

// function sum(x, y) {
//   return x + y;
// }

// const result = sum(10, 20);

// console.log(result);

//!===============================================================
// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

// const userName = 'Roman';

//!===============================================================

function foo1() {
  console.log('foo1');
}

function foo2() {
  console.log('foo2');
}

function foo3() {
  console.log('foo2');
}

console.log('Hello');
foo1();
foo3();
console.log('test2');
foo1();
foo2();
console.log('the end');
