/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */
//!======================================================
// const user = {
//   name: 'User1',
// };

// function foo() {
//   //this = user
//   // console.log(this);
// }

// foo();
// foo.call();
// foo.apply();

// foo.call(user);
// foo.apply(user);

//!======================================================
function showThis(r, g, b) {
  console.log(`rgb(${r},${g},${b})`);
  console.log('this', this);
}

// showThis(10, 20);

//!======================================================
// const objA = {
//   name: 'Obj1',
// };

// const red = 10;
// const green = 120;
// const blue = 173;

// showThis.call(objA, red, green, blue);
// showThis.apply(objA, [red, green, blue]);
//!======================================================
// const objA = {
//   name: 'Obj1',
// };

// const rgb = [123, 12, 51];

// showThis.call(objA, ...rgb);
// showThis.apply(objA, rgb);
//!======================================================
const user = {
  name: '',
  age: 0,
  city: '123',
  phoneNumber: '12',

  showInfo() {
    const keys = Object.keys(this);
    for (const key of keys) {
      console.log(key, this[key]);
    }
  },
};

const user1 = {
  name: '123',
  age: 123,
};

// user.showInfo.call(user1); // this = user1
//!======================================================

/**
 * -------------------------------
 */

function changeColor(color) {
  this.color = color;
}

const hat = {
  name: 'hat',
  color: 'black',
};

const sweater = {
  name: 'sweater',
  color: 'green',
};

// changeColor.call(hat, 'orange');
// changeColor.call(sweater, 'blue');

//!======================================================

// function foo() {
//   console.log(this);
// }

// const copy = foo.bind(hat);

// copy.call(sweater);

//!======================================================

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

//!======================================================

/* 
Замикання - це можливість функції зберігати в середині себе навколишнє оточення
*/

// function foo() {
//   const x = 10;

//   function sayHello() {
//     console.log(x);
//   }

//   return sayHello;
// }

// const mySayHello = foo();

// mySayHello();
//!======================================================

// function createCalc(username) {
//   let author = 'Test2';

//   function calc(a, b) {
//     // const author = 'test2';
//     // let username = 'Eleonora';
//     console.log(`${author}: ${username}: ${a + b}`);
//   }

//   author = 'Test3';

//   return calc;
// }

// const calc1 = createCalc('Eleonora');
// const calc2 = createCalc('Valera');

// calc1(10, 20);
// calc1(10, 20);
// calc2(5, 1);
// calc1(25, 12);
// calc1(62, 2);

//!======================================================

// function getCounter() {
//   let counter = 0;

//   function increment() {
//     counter++;
//     console.log(counter);
//     return counter;
//   }

//   return increment;
// }

// const counter1 = getCounter();
// const counter2 = getCounter();
// const counter3 = getCounter();

// counter1();
// counter1();
// counter1();
// counter1();

//!======================================================

// let c1 = 0;
// let c2 = 0;

// function counter1() {
//   c1++;
//   console.log(c1);
//   return c1;
// }
// function counter2() {
//   c2++;
//   console.log(c2);
//   return c2;
// }

//!======================================================
