/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */
// console.log('Hello');
//!======================================================

// Вася біжить швидко томущо Вася запізнюється на потяг.
// Петя біжить швидко томущо Петя запізнюється на потяг.
// Іван біжить швидко томущо Іван запізнюється на потяг.
// Роман біжить швидко томущо Роман запізнюється на потяг.
// Антон біжить швидко томущо Антон запізнюється на потяг.

// Вася біжить швидко томущо він запізнюється на потяг.
// Антон біжить швидко томущо він запізнюється на потяг.
// Роман біжить швидко томущо він запізнюється на потяг.

//!======================================================

// const user = {
//   username: 'Vasya',
//   age: 10,

//   showInfo() {
//     console.log(this.username);
//     console.log(this.age);
//   },
// };

//!======================================================
/**
 * Глобальний контекст
 */

// function foo() {
//   console.log(this); // window | undefined
// }

// foo();

//!======================================================
/**
 * Контекст методу об'єкта
 */

// const user1 = {
//   tag: 'User1',
//   showTag() {
//     console.log(this);
//   },
// };
// const user2 = {
//   tag: 'User2',
//   showTag() {
//     console.log(this);
//   },
// };

// user1.showTag();
// user2.showTag();

//!======================================================

/**
 * Контекст методу об'єкта, но объявлена как внешняя функция.
 */

// function showTag() {
//   // const this = user2;
//   console.log(this);
// }

// const user1 = {
//   name: 'user1',
//   showInfo: showTag,
// };
// const user2 = {
//   name: 'user2',
//   showInfo: showTag,
// };

// showTag();
// user1.showInfo();

//!======================================================

/**
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const poly = {
//   tag: 'Poly',
//   showTag() {
//     console.log(this);
//   },
// };

// poly.showTag();
// const outerShowTag = poly.showTag;
// outerShowTag();

/**
 * Контекст в callback-функциях
 */

// const jacob = {
//   tag: 'Jacob',
//   showTag() {
//     console.log(this);
//   },
// };

// function invokeAction(callback) {
//   const obj = {
//     name: 'Obj',
//     test: callback,
//   };

//   obj.test;

//   obj.test;
// }

// invokeAction(jacob.showTag);

//!======================================================

// const arr = [1, 2, 4, 5, 1, 2, 5];

// arr[0];

//!======================================================

// function foo() {
//   // this = {username:'Vasya'}

//   const arrow = () => {
//     console.log(this);
//   };

//   arrow();
// }

// foo.call({ username: 'Vasya' });

//!======================================================

/* 
1. Визначити тип функції
- якщо звичайна то дивимось момент виклику
- якщо стрілка то беремо бат. контекст в момент створення
*/

const user = {
  name: 'User1',
  foo() {
    const arrow = () => {
      const arrow1 = () => {
        function arrow2() {
          const arrow3 = () => {
            const arrow4 = () => {
              console.log(this);
            };
            arrow4();
          };
          arrow3();
        }
        arrow2();
      };
      arrow1();
    };
    arrow();
  },
};

const user2 = {
  name: 'User2',
};

user.foo();

//!======================================================
// const arrow = () => {};
// arrow.call();
// arrow.bind()
