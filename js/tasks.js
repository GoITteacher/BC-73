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

// const res = (true && true) || (false && false) || (true && false);

// ```
// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".
// ```

// function task9_1(hasInvitation, isFriend) {
//   if (hasInvitation || isFriend) {
//     return 'Ви запрошені';
//   }
//   return 'Вхід заборонено';
// }

// function task9_2(hasInvitation, isFriend) {
//   const result = hasInvitation || isFriend ? 'Ви запрошені' : 'Вхід заборонено';
//   return result;
// }

// console.log(task9_1(true, true));
// console.log(task9_1(true, false));
// console.log(task9_1(false, true));
// console.log(task9_1(false, false));

// ```
// Задача-10
// Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".
// ```

// function task10(age) {
//   if (age < 12) {
//     return `Дитина`;
//   } else if (age < 18) {
//     return 'Підліток';
//   } else if (age < 60) {
//     return 'Дорослий';
//   } else {
//     return 'Пенсіонер';
//   }
// }

// function task10(age) {
//   switch (true) {
//     case age < 12:
//       return `Дитина`;
//     case age < 18:
//       return 'Підліток';
//     case age < 60:
//       return 'Дорослий';
//     default:
//       return 'Пенсіонер';
//   }
// }

// const age = +prompt('Enter your age'); // 56
// const message = `Ви - ${task10(age)}`;

// console.log(message);

// ```
// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".
// ```

// function task11(isLoggedIn, hasAdminRights) {
//   if (hasAdminRights && isLoggedIn) {
//     return 'Адмін-сторінка';
//   } else if (isLoggedIn) {
//     return 'Користувач';
//   } else {
//     return 'Гість';
//   }
// }

// console.log(task11(false, true));

// ```
// Задача-12
// Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".
// ```

// ```
// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".
// ```

// ```
// Задача-14
// Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
// ```

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(true && 4 && 'kiwi'); // 'k'
// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // t
// console.log(true || 3 || 4); // t
// console.log(true || false || 7); // t
// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // false
// console.log(null || 3 || 4); // 3

// console.log(true && false); // 1 * 0 = 0 - false
// console.log(false && true); // 0 * 1 = 0 - false
// console.log(true && true); // 1 * 1 = 1 - true
// console.log(false && false); // 0 * 0 = 0 - false

// console.log(true || false); // t
// console.log(false || true); // t
// console.log(true || true); // t
// console.log(false || false); // f

// console.log(!true); // f
// console.log(!false); //t
// console.log(!!true); // t
// console.log(!!false); // f

// console.log(+'10');

// console.log(Boolean(10));
// console.log(!!'10');

// console.log(1 === 1 && 2 === 2); // t
// console.log(1 === 2 && 2 === 2); // f
// console.log(1 === 1 || 2 === 2); // t
// console.log(1 === 2 || 2 === 2); // t

// console.log(1 > 2 && 2 < 3);
// console.log(1 < 2 && 2 < 3);
// console.log(1 > 2 || 2 < 3);
// console.log(1 < 2 || 2 < 3);
