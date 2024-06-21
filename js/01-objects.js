/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const user1 = ['Roman', 25, 14, true, true];
// const user2 = ['Vlad', 29, 3, true, false];
// const user3 = ['Anton', 24, 7, false, false];

//!======================================================
/* 
function(){}
for(){}
if(){}
switch(){} 
while(){}
do{}while()
*/

// const user1 = {
//   projects: 4,
//   age: 23,
//   city: 'Dnipro',
//   username: 'Volodka',
//   isAdmin: true,
//   isStudent: false,
// };

//!======================================================
// const playlist1 = {
//   name: 'Name1',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   isFavourite: true,
// };

// const playlist2 = {
//   name: 'Name2',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   isFavourite: true,
// };

// console.log(playlist1.name);
// console.log(playlist2.name);
// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks[0]);
//!======================================================

/* const user = {
  projects: 4,
  age: 23,
  address: {
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'MyStreet',
    location: {
      x: 10,
      y: 20,
    },
  },
};
 */
// console.log(user.address.location.x);

//!======================================================

/* const user = {
  username: 'Volodka',
  projects: 4,
  age: 23,
  address: {
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'MyStreet',
    location: {
      x: 10,
      y: 20,
    },
  },
}; */

// const key = 'username';

// console.log(user[key]);

// const selectValue = prompt('Enter props');
// console.log(user.username);
// console.log(user[selectValue]);

//!======================================================

// const arr = {
//   0: 'Hello',
//   1: 'World',
//   2: 'Test',
//   '_ test _': 'Hello world',
// };

//!======================================================

const user = {
  username: 'Volodka',
  projects: 4,
  age: 23,
  age: 25,
  age: 30,
  address: {
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'MyStreet',
    location: {
      x: 10,
      y: 20,
    },
  },
};

// user.projects = 5;
// user.age++;
// user.address.city = 'Lviv';

// user.test = {};
// user.test.x = 'world';

// console.log(user);

// delete user.age;
// console.log(user);
