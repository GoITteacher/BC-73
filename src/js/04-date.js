/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

//!======================================================
// const date1 = new Date();
// const date2 = new Date('2024');
// const date3 = new Date('2024 03');
// const date4 = new Date('2024 03 08');
// const date5 = new Date('2024-01-07');
// const date6 = new Date('2024/02/05');
// const date7 = new Date('01/02/2024 12:00:05');
// const date8 = new Date('01.04.2025 13:00');

// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// console.log(date5);
// console.log(date6);
// console.log(date7);
// console.log(date8);

//!======================================================

// const date = new Date('01/01/1970 03:10:00');

// const date = new Date(50000);
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// console.log(date.getTime());

//!======================================================

// const date1 = new Date('01/01/1970 03:15:00'); // 9000
// const date2 = new Date('01/01/1970 03:10:00'); // 6000
// console.log(date1 - date2); // 300

//!======================================================

// const initDate = new Date();
// console.log(initDate);

// setInterval(() => {
//   const currentDate = new Date();
//   console.log(currentDate - initDate);
// }, 1000);

//!======================================================

const finishDate = new Date('2024-07-13');

setInterval(() => {
  const currentDate = new Date();
  const ms = finishDate - currentDate; // 90000
  const parsedTime = convertMilliseconds(ms); // {d:0, h:0, m:0, s:6}
  const { d, h, m, s } = parsedTime;

  const str = `${d} ${h}:${m}:${s}`;
  console.log(str);
}, 1000);

function convertMilliseconds(ms) {
  let total_seconds = parseInt(Math.floor(ms / 1000));
  let total_minutes = parseInt(Math.floor(total_seconds / 60));
  let total_hours = parseInt(Math.floor(total_minutes / 60));
  let days = parseInt(Math.floor(total_hours / 24));

  let seconds = parseInt(total_seconds % 60);
  let minutes = parseInt(total_minutes % 60);
  let hours = parseInt(total_hours % 24);

  return { d: days, h: hours, m: minutes, s: seconds };
}

// 1000 => 1
// 5000 => 5
// 50000 => 50
// 60000 => 1хв
// 120000 => 2хв
// 120000 => 2хв
// 120000 => 2хв

//3600000 => 1год
