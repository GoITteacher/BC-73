/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

//!===============================================
/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = 'https://my-site.com/about';
// const firstCondition = !url.endsWith('/');
// const secondCondition = url.includes('my-site');
// const isValid = firstCondition && secondCondition;

// if (isValid) {
//   url += '/';
// }

// console.log(url);

//!=================================================
/*
 * Пошук у рядку методом includes()
 */

// const banWord1 = 'spam';
// const banWord2 = 'sale';

// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesalematter advertising campaign';

// const lowerStr1 = string1.toLowerCase();
// const hasFirstBanWord = lowerStr1.includes(banWord1);
// const hasSecondBanWord = lowerStr1.includes(banWord2);
// const hasSpam1 = hasFirstBanWord || hasSecondBanWord;

// const hasSpam2 =
//   string2.toLowerCase().includes(banWord1) ||
//   string2.toLowerCase().includes(banWord2);

// const hasSpam3 =
//   string3.toLowerCase().includes(banWord1) ||
//   string3.toLowerCase().includes(banWord2);

// console.log(hasSpam3);

//!===============================================================
