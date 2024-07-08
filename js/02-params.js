/**
 * Деструктуризація об'єкта в параметрах функції
 */
//!======================================================

// function foo({ city }) {
//   console.log(city);
// }

// foo({ city: 'Dnipro' });

//!======================================================
// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// Без деструктуризації

// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`,
//   );
// }

// З деструктуризацією

// function getUserName({ username, skills: { html, css, js } }) {
//   console.log(
//     `Hello my name is ${username},
// I know html - ${html},
// css - ${css} and js -${js}`,
//   );
// }

// getUserName(user);

//!======================================================
// function getColor(rgb) {
//   const color = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
//   console.log(color);
// }

// function getColor([red, green, blue, alpha = 0]) {
//   const color = `rgba(${red},${green},${blue},${alpha})`;
//   console.log(color);
// }

// getColor([10, 41, 42]);

//!======================================================

// const book = {
//   id: 1234234,
//   title: 'sefsefsf',
//   author: '245aawd',
//   desc: '34sefaw',
// };

// function saveBook({ id, ...book }) {
//   console.log(id);
//   console.log(book);
// }

// saveBook(book);

//!======================================================

// class User {
//   constructor({ name, age, city, country }) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country;
//   }
// }

// const user1 = new User({
//   age: '123',
//   country: '342534',
//   name: '123',
//   city: '123',
// });

//!======================================================

// function createObj(
//   name,
//   age,
//   { isStudent = false, isAdmin = false, isOnline = false },
// ) {}

// createObj('Anton', 25, {});

//!======================================================

// new SimpleLightbox('.gallery a', {
//   nav: false,
//   captions: false,
// });

//!======================================================

// const book = {
//   id: 1234234,
//   title: 'sefsefsf',
//   author: '245aawd',
//   desc: '34sefaw',
// };

// foo(10, 20, book, 10, 20);

// function foo(x1, x2, { id, title, author, desc }, x3, x4) {
//   console.log(id, title);
// }

//!======================================================
