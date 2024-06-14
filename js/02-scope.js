/*
 * Блокова область видимості змінних
 */

// let c = 15; // if(true) -> 25

// if (true) {
//   const a = 5;
// console.log('c :>> ', c); // 15
//   console.log('a :>> ', a);
//   c = 25;
//   // console.log(b);
// }
// console.log(a);
// console.log('c2', c); // 25

// c = c + 45; // 70

// console.log('c3', c); // 70

let c = 15; // global c = 15

if (true) {
  const b = 10; // local1 b = 10
  const c = 150; // local1 c = 150
  // console.log(a);
  console.log(b); // 10
  console.log('inside c', c); // 150
}

console.log('c :>> ', c); // 15

// console.log(a);
// console.log(b);
// console.log(c);
