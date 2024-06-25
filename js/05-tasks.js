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

// function task5(cars, ...keys) {
//   for (const car of cars) {
//     let res = '';
//     for (const key of keys) {
//       res += car[key] + ' ';
//     }
//     console.log(res);
//   }
// }

// task5(cars, 'brand', 'model', 'price');

//!======================================================

// ---

// Менеджер завдань: Створіть функцію яка створює та повертає обьект завдання.
// Об'єкт task, який буде містити властивості Name, deadline, priority та done.
// Додайте методи для відмітки завдання як виконаного та для виведення
// інформаціїпро завдання.

// function createTask(name, deadline, priority) {
//   const task = {
//     name,
//     deadline,
//     priority,
//     status: false,

//     changeStatus() {
//       this.status = true;
//     },

//     showInfo() {
//       const info = `Name: ${this.name},
// Deadline: ${this.deadline},
// Priority: ${this.priority},
// Status: ${this.status ? '🎁' : 'x'},
//       `;

//       console.log(info);
//     },
//   };

//   return task;
// }

// const task1 = createTask('Купити продукти', '18:00', 'low');
// const task2 = createTask('Купити машину', '18:00', 'low');
// const task3 = createTask('Купити будинок', '18:00', 'low');

// task1.showInfo();
// task2.showInfo();
// task3.showInfo();

//!======================================================

// Каталог товарів: Створіть каталог товарів, де кожен товар буде об'єктом з
// властивостями назва, ціна та кількість. Додайте методи для додавання товару,
// видалення товару та підрахунку загальної вартості.

// const catalog = {
//   productList: [],

//   addProduct(title, price, amount) {
//     const product = { title, price, amount };
//     this.productList.push(product);
//   },

//   removeProduct(title) {
//     for (let i = 0; i < this.productList.length; i++) {
//       const product = this.productList[i];
//       if (product.title === title) {
//         this.productList.splice(i, 1);
//         break;
//       }
//     }
//   },
//   getTotalPrice() {
//     let total = 0;
//     for (const product of this.productList) {
//       total += product.price * product.amount;
//     }
//     return total;
//   },
//   showCatalog() {
//     for (const item of this.productList) {
//       console.log(item.title, item.price, item.amount);
//     }
//   },
// };

// catalog.addProduct('Mango', 5, 10);
// catalog.addProduct('Kiwi', 6, 56);
// catalog.addProduct('Apple', 3, 100);
// catalog.addProduct('Test Product', 12, 33);
// catalog.removeProduct('Test Product');

// catalog.showCatalog();

// console.log(catalog.getTotalPrice());

//!======================================================

// Система реєстрації: Створіть систему реєстрації користувачів, де кожен
// користувач буде об'єктом з властивостями ім'я, email, пароль тощо. Додайте метод
// для перевірки введеного пароля при вході.

// const authForm = {
//   usersData: [],

//   registration(username, login, password) {
//     if (this.isFreeUsername(username)) {
//       const user = { username, login, password };
//       this.usersData.push(user);
//     } else {
//       console.log(`Error! ${username} not free!`);
//     }
//   },

//   login(login, password) {
//     for (const user of this.usersData) {
//       const validLogin = user.login === login;
//       const validPassword = user.password === password;

//       if (validLogin && validPassword) {
//         console.log('Welcome');
//         return;
//       }
//     }

//     console.log('Wrong password');
//   },

//   isFreeUsername(username) {
//     for (const user of this.usersData) {
//       if (user.username === username) {
//         return false;
//       }
//     }
//     return true;
//   },
// };

// authForm.registration('superhero2000', 'mylogin@gmail.com', 'qwerty');
// authForm.registration('superhero2001', 'mylogin@gmail.com', 'qwerty');
// authForm.registration('superhero2002', 'mylogin@gmail.com', 'qwerty');
// authForm.registration('superhero2003', 'mylogin@gmail.com', 'qwerty');
// authForm.registration('superhero2002', 'mylogin@gmail.com', 'qwerty');

// authForm.login('mylogin@gmail.com', 'qwerty5');

// console.log(authForm.usersData);
//!======================================================

// Онлайн-книга: Створіть програму для ведення списку прочитаних книг. Кожна книга
// буде об'єктом з властивостями назва, автор, рік видання та прочитано
// (true/false). Додайте методи для відмітки книги як прочитаної та виведення
// статистики про прочитані книги.

// function createBook(title, author, year) {
//   const book = {
//     title,
//     author,
//     year,
//     isReaded: false,
//     showBookInfo() {
//       const message = `
//       Title: ${this.title},
// Author: ${this.author},
// Year: ${this.year},
// isReaded: ${this.isReaded}`;

//       console.log(message);
//     },
//   };

//   return book;
// }

// const bookManager = {
//   bookList: [],
//   test: 'Hello world',

//   addBook(title, author, year) {
//     const book = createBook(title, author, year);
//     this.bookList.push(book);
//   },
//   removeBook(title) {
//     for (let i = 0; i < this.bookList.length; i++) {
//       const book = this.bookList[i];
//       if (book.title === title) {
//         this.bookList.splice(i, 1);
//         break;
//       }
//     }
//   },
//   changeStatus(title) {
//     for (const book of this.bookList) {
//       if (book.title === title) {
//         book.isReaded = !book.isReaded;
//         return;
//       }
//     }
//   },
//   showReadedBook() {
//     for (const book of this.bookList) {
//       if (book.isReaded) {
//         book.showBookInfo();
//       }
//     }
//   },
//   showAllBooks() {
//     for (const book of this.bookList) {
//       book.showBookInfo();
//     }
//   },
//   showInfo() {
//     let totalReaded = 0;
//     for (const book of this.bookList) {
//       if (book.isReaded) totalReaded += 1;
//     }

//     const message = `TotalBooks: ${this.bookList.length},
// ReadedBooks: ${totalReaded},
// UnreadedBook: ${this.bookList.length - totalReaded}
//     `;

//     console.log(message);
//   },
// };

// bookManager.addBook('Title1', 'Author', 2015);
// bookManager.addBook('Title2', 'Author', 2012);
// bookManager.addBook('Title3', 'Author', 2014);
// bookManager.addBook('Title4', 'Author', 2017);
// bookManager.addBook('Title5', 'Author', 2015);
// bookManager.addBook('Title6', 'Author', 2016);
// bookManager.addBook('Title7', 'Author', 2019);

// bookManager.changeStatus('Title2');
// bookManager.changeStatus('Title5');
// bookManager.changeStatus('Title7');

// bookManager.showReadedBook();
// bookManager.showAllBooks();

// bookManager.showInfo();
//!======================================================

// Ігровий персонаж: Створіть об'єкт, який представляє ігрового персонажа. Додайте
// властивості, такі як ім'я, рівень, здоров'я, атака тощо. Реалізуйте методи для
// атаки інших персонажів та відновлення здоров'я.

// function createHero(name, lvl, hp, damage) {
//   return {
//     name,
//     lvl,
//     hp,
//     damage,
//     isDied: false,

//     attack(hero) {
//       hero.hp -= Math.round(Math.random() * this.damage);
//       hero.isDied = hero.hp <= 0;

//       console.log(
//         `${this.name}:Аттакаю ${hero.name}!\n(В нього залишилось ${hero.hp})`,
//       );
//     },
//   };
// }

// const hero1 = createHero('spiderman', 10, 1000, 50);
// const hero2 = createHero('hulk', 14, 1500, 80);

// while (!hero1.isDied && !hero2.isDied) {
//   hero1.attack(hero2);
//   hero2.attack(hero1);
// }

//!======================================================
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

// Знайти всі книги жанру 'Fantasy'.

// function task1(books, genre) {
//   const result = [];
//   for (const book of books) {
//     if (book.genre === genre) {
//       result.push(book);
//     }
//   }
//   return result;
// }

// console.table(task1(books, 'Fantasy'));

//!======================================================
// Знайти всі книги, видані після 2000 року.

// function task2(books, year) {
//   const result = [];
//   for (const book of books) {
//     if (book.year >= year) {
//       result.push(book);
//     }
//   }
//   return result;
// }

// console.table(task2(books, 1900));

//!======================================================
// Знайти всі книги, автором яких є 'Fyodor Dostoevsky'.
// Знайти всі книги з ціною меншою ніж 10 доларів.
// Знайти всі книги з рейтингом 4.8 і вище.
// Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів.
// Знайти всі книги, видані до 1900 року.
// Знайти всі книги, що містять слово 'and' у назві.
// Знайти всі книги, автором яких є 'J.R.R. Tolkien'.
// Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.

//!======================================================
// Знайти першу книгу жанру 'Fantasy'.

// function task3(books, genre) {
//   for (const book of books) {
//     if (book.genre === genre) {
//       return book;
//     }
//   }
//   return null;
// }

// console.log(task3(books, 'Fantasy'));

//!======================================================
// Знайти першу книгу, видану після 2000 року.
// Знайти першу книгу, автором якої є 'Fyodor Dostoevsky'.
//!======================================================
// Знайти першу книгу з ціною меншою ніж 10 доларів і рейтингом 4.8 і вище.

// function task4(books, price, rating) {
//   for (const book of books) {
//     if (book.price <= price && book.rating >= rating) {
//       return book;
//     }
//   }
//   return null;
// }

// console.log(task4(books, 10, 4.8));

//!======================================================

// Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.
// Знайти першу книгу, видану до 1900 року.
// Знайти першу книгу, що містить слово 'and' у назві.
// Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.
// Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.

//!======================================================

// Чи є в масиві хоча б одна книга жанру 'Fantasy'?
// Чи є в масиві хоча б одна книга, видана після 2000 року?
// Чи є в масиві хоча б одна книга, автором якої є 'Fyodor Dostoevsky'?
// Чи є в масиві хоча б одна книга з ціною меншою ніж 10 доларів?
// Чи є в масиві хоча б одна книга з рейтингом 4.8 і вище?
// Чи є в масиві хоча б одна книга жанру 'Romance' з ціною меншою ніж 8 доларів?
// Чи є в масиві хоча б одна книга, видана до 1900 року?
//!======================================================
// Чи є в масиві хоча б одна книга, що містить слово 'and' у назві?

// function task5(books, title) {
//   title = title.toLowerCase();
//   for (const book of books) {
//     const isValid = book.title.toLowerCase().includes(title);
//     if (isValid) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(task5(books, 'gReAtawd'));

//!======================================================
// Чи є в масиві хоча б одна книга, автором якої є 'J.R.R. Tolkien'?
// Чи є в масиві хоча б одна книга жанру 'Historical' з рейтингом вище 4.7?

// Чи всі книги в масиві мають рейтинг 4.5 і вище?
// Чи всі книги в масиві коштують менше 20 доларів?
//!======================================================
// Чи всі книги в масиві видані після 1950 року?

// function task6(books, year) {
//   for (const book of books) {
//     if (book.year < year) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(task6(books, -1000));

//!======================================================
// Чи всі книги в масиві є жанру 'Fiction'?
// Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'?
// Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?
// Чи всі книги в масиві видані до 2000 року?
// Чи всі книги в масиві мають слово 'the' у назві?
// Чи всі книги в масиві мають рейтинг вище 4.0?
// Чи всі книги в масиві є жанру 'Adventure'?

//!======================================================
// Отримати масив назв всіх книжок.

// function task7(books) {
//   const res = [];
//   for (const book of books) {
//     res.push(book.title);
//   }
//   return res;
// }

//!======================================================

// Отримати масив авторів всіх книжок.

function task8(books) {
  const arr = [];

  for (const book of books) {
    arr.push(book.author);
  }

  return arr;
}

// console.log(task8(books));

//!======================================================
// Створити масив об'єктів, які містять лише назву та автора кожної книжки.

function task9(books) {
  const res = [];
  for (const book of books) {
    const obj = {
      title: book.title,
      author: book.author,
    };
    res.push(obj);
  }

  return res;
}

console.table(task9(books));
//!======================================================
// Створити масив цін всіх книжок з подвоєною вартістю.
// Створити масив років видання всіх книжок з доданими 5 роками до кожного.
// Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках (помножений на 10).
// Створити масив об'єктів, де назва книжки буде в верхньому регістрі.
// Створити масив рядків, що містять інформацію про кожну книжку в форматі "назва - автор".
// Створити масив об'єктів, де кожна книжка буде мати нове поле discountPrice, що дорівнює ціні зі знижкою 10%.
// Створити масив об'єктів, що містять назву книжки та її ціну з доданим податком 15%.
// Створити масив назв книжок, які видані після 2000 року.
// Створити масив об'єктів, де кожна книжка буде мати нове поле isClassic, що дорівнює true, якщо книжка видана до 1950 року.
// Отримати масив жанрів всіх книжок у верхньому регістрі.
// Створити масив назв книжок, де всі слова в назві починаються з великої літери.
// Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.
// Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар = 0.85 євро).
// Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".
// Створити масив об'єктів, де кожна книжка буде мати нове поле shortTitle, що містить тільки перше слово з назви.
// Створити масив об'єктів, де кожна книжка буде мати нове поле description, що містить рядок "Ця книга від автора [author] була видана у [year] році".
// Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр записаний у нижньому регістрі.

// Відсортувати книги за роком видання від найдавнішого до найновішого.
// Відсортувати книги за ціною від найнижчої до найвищої.
// Відсортувати книги за рейтингом від найнижчого до найвищого.
// Відсортувати книги за назвою у алфавітному порядку (від А до Я).
// Відсортувати книги за автором у зворотньому алфавітному порядку (від Z до A).
// Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за назвою у зворотньому алфавітному порядку.
// Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою назвою за автором у зворотньому алфавітному порядку.
// Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше 10 доларів, потім решту.
// Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають рейтинг 4.8 і вище, потім решту.
// Відсортувати книги спочатку за жанром, а потім за роком видання.

// Отримати всі книги, видані після 2000 року та відсортувати їх за рейтингом від найвищого до найнижчого, повернути лише назви.
// Отримати всі книги, автором яких є 'Fyodor Dostoevsky', відсортувати їх за роком видання від найдавнішого до найновішого та вивести перші 5 книг.
// Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною від найнижчої до найвищої та вивести назви книг.
// Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у зворотньому алфавітному порядку та вивести авторів унікальних книг.
// Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та відсортувати їх за рейтингом від найвищого до найнижчого.
// Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від найвищого до найнижчого та вивести першу книгу.
// Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останню книгу.
// Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за рейтингом від найвищого до найнижчого та вивести середній рейтинг.
// Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останні 3 книги.
