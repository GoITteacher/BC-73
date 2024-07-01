/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  eat() {
    console.log(this.name, 'eat');
  }
  sleep() {
    console.log(this.name, 'sleep');
  }
}

class Dog extends Animal {
  constructor(name, breed, paws) {
    super(name, breed);
    this.paws = paws;
  }

  sayWoof() {
    console.log(`${this.name} woof`);
  }
}

class Cat extends Animal {
  constructor(name, breed, paws) {
    super(name, breed);
    this.paws = paws;
  }

  sayMeow() {
    console.log(`${this.name} meow`);
  }
}

const dog = new Dog('Lord', 'Spaniel', 4);
const cat = new Cat('Marsik', 'test', 4);

console.log(dog);

dog.eat();
dog.sleep();
dog.sayWoof();

cat.sayMeow();
cat.sayMeow();
cat.sayMeow();
