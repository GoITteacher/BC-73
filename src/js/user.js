export class User {
  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.phoneNUmber = '';
    this.isStudent = '';
    this.isAdmin = '';
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
