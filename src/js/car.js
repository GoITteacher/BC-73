export class Car {
  constructor() {
    this.model = '';
    this.brand = '';
    this.price = '';
    this.year = '';
    this.isSportCar = '';
  }

  showInfo() {
    console.log(`
            ${this.title}
            ${this.price}
            ${this.amount}
            ${this.discount}
            ${this.color}
        `);
  }
}
