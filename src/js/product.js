export class Product {
  constructor() {
    this.title = '';
    this.price = '';
    this.amount = '';
    this.discount = '';
    this.color = '';
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
