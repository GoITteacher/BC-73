//!======================================================
/* 
  Personal bodyguard
*/

const bodyguard = {
  blacklist: [],
  addToBL(username) {
    this.blacklist.push(username);
  },
  removeFromBL(username) {
    for (let i = 0; i < this.blacklist.length; i++) {
      if (this.blacklist[i] === username) {
        this.blacklist.splice(i, 1);
        break;
      }
    }
  },
  checkInBL(username) {
    return this.blacklist.includes(username);
  },
};

console.log(bodyguard);

bodyguard.addToBL('Roman');
bodyguard.addToBL('Vasya');
bodyguard.addToBL('Kolya');

console.log(bodyguard);

bodyguard.removeFromBL('Kolya');

console.log(bodyguard.checkInBL('Kolya'));
console.log(bodyguard.checkInBL('Vasya'));

//!======================================================

//!======================================================
/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {},

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {},

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {},

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {},

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};
