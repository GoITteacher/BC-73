/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор && - "і"(логічне множення)
 * - Оператор || - "або"(логічне додавання)
 * - Оператор ! - "не"(інверсія)
 */

// 'qwe' && 21 && 'true'; // -> "qwe" = true 21 = true true = true -> "true"
// 'qwe' && 0 && 'true'; // ->  "qwe" = true 0 = false -> 0

Boolean('qwe') && Boolean(NaN) && Boolean('true'); // -> "qwe" = true 21 = true true = true -> "true"

// console.log(Number('12qwe')); // NaN

// 'qwe' || 0 || 'true'; // ->  "qwe" = true -> 'qwe'
// 0 || 'qwe' || 'true'; // ->  o = false "qwe" = true -> 'qwe'
// 0 || '' || null; // ->  0 = false "" = false null = false -> null

// const time = 21;

// if (time >= 0 && time < 15) {
//   console.log('I');
// } else if (time >= 15 && time < 30) {
//   console.log('II');
// } else if (time >= 30 && time < 45) {
//   console.log('III');
// } else if (time >= 45 && time < 60) {
//   console.log('IV');
// }

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean('')); // false
// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true

/**
 * --------------------------------
 */
// console.log(5 && 4); // 4
// Boolean(5) && Boolean(4) -> true && true
// console.log(5 && 'mango');

// const str = 'qwe';

// str && str.length <= 3 && foo(str);
// Boolean('qwe') && Boolean(str.length <= 3) && undefined

/**
 * --------------------------------
 */

// console.log(false || 5); // 5
// console.log(false && null); // null -> Boolean(false) || Boolean(null) -> false || false -> null

const fruits = 0;
const cash = null;

if (fruits.length > 0 && cash) {
  // false || null -> null -> false
  console.log('Buy something');
} else if (fruits.length > 0) {
  console.log('Do without cash ');
} else if (cash) {
  console.log('Do with cash without fruits');
}

/**
 * --------------------------------
 */

// console.log(!5); // Boolean(5) -> true -> false
// console.log(!false); // true

/**
 * --------------------------------
 */

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi'); // 'kiwi

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

// console.log((1 && 0 && 2) === 0); // false

// console.log(null || (2 && 3) || 4); // null || 3 || 4 -> 3
// // null + 2 * 3 + 4

// console.log(!5); // false
// console.log(!NaN); // true

// const age = 6;

// if (age !== 5) {
//   console.log('My age is not 5 years');
// }

// const value = '5qwe';

// const valueNum = Number(value);

// console.log('isNaN(valueNum) :>> ', isNaN(valueNum));

// if (!isNaN(valueNum)) {
//   console.log('Value is Number', valueNum * 52);
// } else {
//   console.log('Valuu is not number', value);
// }
