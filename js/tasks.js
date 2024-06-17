/* Задача-1
Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. Функція повинна повернути рядок "Wellcome" якщо age більший за 18 або balance більший за 100. В іншому випадку функцію повинна повернути рядок "Goodbye". */

// if(age > 18 || balance > 100)

// function task1(age, balance) {
//   if (age >= 18 && balance > 100) {
//     console.log('Hello');
//   } else {
//     console.log('Goodbye');
//   }
// }

// task1(16, 1000);
// task1(20, 50);
// task1(29, 500);
//!=======================================================
/* Задача-2
Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price). Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок "Це занадто дорого".
 */

// function task2(amount, price) {
//   const totalPrice = amount * price;
//   console.log(totalPrice);
//   if (totalPrice <= 1000) {
//     return 'Ми це купуємо';
//   } else {
//     return 'Це занадто дорого';
//   }
// }

// task2(20, 51);

//!=======================================================

// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".

// function task3(temp) {
//   if (temp < 0) {
//     console.log('Замерзає');
//   } else if (temp < 25) {
//     console.log('Нормальна температура');
//   } else {
//     console.log('Спекотно');
//   }
// }

//!===============================================================

// function task4(age, balance, isAdmin) {
//   if (isAdmin) {
//     console.log('Hello boss');
//   } else if (age >= 18) {
//     console.log('Hello');
//   } else if (balance > 50) {
//     console.log('Давай бігенько проходь');
//   } else {
//     console.log('Goodbye');
//   }
// }

// task4(18, 100, true);
// task4(8, 200, false);
// task4(18, 10, false);
// task4(15, 0, false);

//!===============================================================

// - Оператор &&
// - Оператор ||
// - Оператор !

// const result0 = false && 'hello';
// const result1 = false && null;
// const result2 = false && false;
// const result3 = false && '0';
// const result4 = false && undefined;
// const result5 = 'Hello' && false;
// const res = 1 && 2 && '' && 4 && false && 6;

// console.log(res);

//!===============================================================

const res = (true && true) || (false && false) || (true && false);
