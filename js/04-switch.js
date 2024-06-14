/**
 * Оператор switch
 * switch (значення) {
      case значення:
        інструкції;
        break;
          
      case значення:
        інструкції;
        break;
          
      default:
        інструкції;
    }
 */

// const username = "Mango";

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 0;

// let message = '';

// switch (daysUntilDeadline) {
//   case 0:
//     // console.log('Today');
//     message = 'Today';
//     message = message.toUpperCase();
//     break;
//   case 1:
//     // console.log('Tomorrow');
//     message = 'Tomorrow';
//     break;
//   case 2:
//     // console.log('Overmorrow'); // +
//     message = 'Overmorrow';
//     break;
//   default:
//     console.log('Date in the future');
// }

// console.log(message);

// switch (key) {
//   case 'do':
//     console.log('sound DO');
//     break;
//   case 're':
//     console.log('sound RE');
//     break;
// }

// if (daysUntilDeadline === 0) {
//   console.log("Today");
// } else if (daysUntilDeadline === 1) {
//   console.log("Tomorrow");
// } else if (daysUntilDeadline === 2) {
//   console.log("Overmorrow");
// } else {
//   console.log("Date in the future");
// }

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * В змінну message записати повідомлення в залежності від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 в нашому офисі'
 * - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправлена сьогодні'
 * - 'Вам перезвонить менеджер'
 */

// const option = 2;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Ви зможете забрати товар завтра з 12:00 в нашому офисі';
//     break;
//   case 2:
//     message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//     break;
//   case 3:
//     message = 'Посилка буде відправлена сьогодні';
//     break;
//   default:
//     message = 'Вам перезвонить менеджер';
// }

// console.log(message);
