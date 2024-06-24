//!======================================================
//       BOOKS
/* 
{
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    price: 10.99,
    rating: 4.9,
} 
*/

//!======================================================
// Написати ф-ю яка повертає масив книжок дорожчі за задану вартість.

// function task1(books, minPrice) {
//   const result = [];
//   for (const book of books) {
//     if (book.price > minPrice) {
//       result.push(book);
//     }
//   }
//   return result;
// }
// console.table(task1(books, 12));

//!======================================================
// Написати ф-ю яка шукає книжки за автором.

// function task2(books, author) {
//   const result = [];
//   for (const book of books) {
//     if (book.author === author) {
//       result.push(book);
//     }
//   }
//   return result;
// }

// console.table(task2(books, 'Harper Lee'));

//!======================================================

// function task3(books, maxPrice) {
//   for (const book of books) {
//     if (book.price > maxPrice) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(task3(books, 10));

//!======================================================

// console.log(cars[0]);

// function task4(cars, year) {
//   let total = 0;
//   for (const car of cars) {
//     if (car.year === year) {
//       total += car.price * car.amount;
//     }
//   }
//   return total;
// }

// console.log(task4(cars, 2020));

//!======================================================

// Написати функцію ка приймає довільну кількість ключів і для кожного обєкта масиву виводить значення цих ключів у консоль;

function task5(cars, ...keys) {
  for (const car of cars) {
    let res = '';
    for (const key of keys) {
      res += car[key] + ' ';
    }
    console.log(res);
  }
}

task5(cars, 'brand', 'model', 'price');
