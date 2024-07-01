/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//!======================================================

// const user1 = {
//   username: 'awdawd',
//   firstname: 'awdawd',
//   lastname: 'awdawd',
//   age: 10,
//   city: '123124',
//   country: '234234',
// };
// const user2 = {
//   username: 'awdawd',
//   firstname: 'awdawd',
//   lastname: 'awdawd',
//   age: 10,
//   city: '123124',
//   country: '234234',
// };
// const user3 = {
//   username: 'awdawd',
//   firstname: 'awdawd',
//   lastname: 'awdawd',
//   age: 10,
//   city: '123124',
//   country: '234234',
// };
// const user4 = {
//   username: 'awdawd',
//   firstname: 'awdawd',
//   lastname: 'awdawd',
//   age: 10,
//   city: '123124',
//   country: '234234',
// };

//!======================================================

// class User {
//   constructor(name, age, city) {
//     this.name = name || 'Anonym';
//     this.age = age || 0;
//     this.city = city || 'Default';
//     this.isStudent = false;
//     this.items = [];
//   }
// }

// const user1 = new User('Vasya', 26, 'Lviv');
// const user2 = new User('Kolya', 24, 'Kyiv');
// const user3 = new User('Pavlo', 22);
// const user4 = new User('Dmytro', 20, 'Dnipro');

// console.log(user3);

//!======================================================

// function foo() {
//   this = {};
//   this.name = 'Test';
//   return this;
// }

// const x1 = foo.call({});
// const x2 = new foo();
// console.log(x2);

//!======================================================

// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }

//   sayWoof() {
//     console.log(`${this.name}: Woof Woof`);
//   }

//   eat() {
//     console.log('Eat |-|');
//   }

//   sleep() {
//     console.log('dog sleep');
//   }
// }

// const dog1 = new Dog('Lord', 'Spaniel');
// const dog2 = new Dog('Bars', 'Spaniel');

// dog1.sayWoof();

// dog2.sayWoof();

//!======================================================

// class Car {
//   #maxSpeed;
//   #balance = 0;
//   #age;

//   constructor(model, maxSpeed, color, price) {
//     this.model = model;
//     this.#maxSpeed = maxSpeed;
//     this.color = color;
//     this.price = price;
//   }

//   showInfo() {
//     console.log(this.model);
//     console.log(this.price);
//     console.log(this.color);
//     console.log(this.#maxSpeed);
//   }
// }

// const obj1 = new Car('Tesla Model S', 300, 'black', 50000);
// const obj2 = new Car('Toyota Camry', 250, 'black', 20000);
// const obj3 = new Car('Volga', 150, 'black', 2000);

// obj1.showInfo();

// obj1.#maxSpeed = 500;

// obj1.showInfo();

// console.log(obj1);

//!======================================================

// class User {
//   #age = 0;
//   #balance = 0;

//   constructor(name) {
//     this.name = name;
//   }

//   showInfo() {
//     console.log(`${this.name} - ${this.#age}`);
//   }

//   set age(newAge) {
//     if (newAge <= 0) return;
//     this.#age = newAge;
//   }

//   get age() {
//     return this.#age;
//   }

//   set balance(newBalance) {}

//   get balance() {
//     return this.#balance;
//   }

//   get info() {
//     return `${this.name} ${this.#age}`;
//   }

//   set sayHello(value) {
//     console.log('hello', value);
//   }

//   #parseNumber1() {}
//   #parseNumber2() {}
//   #parseNumber3() {}
//   #parseNumber4() {}
//   #parseNumber5() {}
//   #parseNumber6() {}
//   #parseNumber7() {}
//   #parseNumber8() {}
// }

// const user = new User('Vasya');
// console.log(user.info);
// user.sayHello = 10;

//!======================================================

class Item {
  static #countItems = 0;
  static discount = 10;
  static storeName = 'ATB';

  #name = 'Hello';

  constructor(title, amount, price) {
    this.title = title;
    this.amount = amount;
    this.price = price;
    Item.#countItems += 1;
    this.counter = 0;
  }

  showInfo() {
    const message = `------${Item.storeName}------
Title: ${this.title};
Amount: ${this.amount};
Price: ${this.price};
Discount: ${Item.discount};
---------------
`;
    console.log(message);
  }

  static get countItems() {
    return Item.#countItems;
  }

  get name() {
    this.counter++;
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
}

const item1 = new Item('Apple', 10, 2);
const item2 = new Item('Orange', 15, 4);
const item3 = new Item('Orange', 15, 4);
const item4 = new Item('Orange', 15, 4);
const item5 = new Item('Orange', 15, 4);
const item6 = new Item('Orange', 15, 4);

console.log(Item.countItems);

item1.showInfo();

item1.name;
item1.name;
item1.name;
item1.name;
item1.name;

console.log(item1.counter);
