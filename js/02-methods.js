/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */
//!======================================================

// const dog = {
//   name: 'Lord',
//   breed: 'Spaniel',
//   age: 3,

//   sayWoof() {
//     console.log('Woof woof');
//   },
// };

// const cat = {
//   name: 'Marsik',
//   age: 4,

//   sayMeow() {
//     console.log('meow');
//   },
//   scratch() {
//     console.log('|||');
//   },
// };

// dog.sayWoof();
// cat.sayMeow();
//!======================================================

// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],

//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist);
//!======================================================

// const user = {
//   name: 'Vasya',
//   showName() {
//     console.log(this.name);
//   },
// };

// user.showName();

//!======================================================

// const arr = [{}, {}, {}, {}];

// function foo() {
//   for (const item of arr) {
//     item.name = 'Hello';
//   }
// }

// foo();

// console.log(arr);

//!======================================================

// const rectangle = {
//   lenA: 10,
//   color: 'black',
//   x: 1123,
//   y: 2342,

//   getArea() {
//     return this.lenA ** 2;
//   },
//   getP() {
//     return this.lenA * 4;
//   },

//   showInfo() {
//     const info = `
// LenA: ${this.lenA},
// Pos: (${this.x}, ${this.y})
// Color: ${this.color}
// Area: ${this.getArea()}
//     `;
//     console.log(info);
//   },
// };

// rectangle.showInfo();

//!======================================================

// const pods = {
//   model: 'AirPods2',
//   price: 400,
//   color: 'white',
//   connectedDevice: null,

//   connectToDevice(device) {
//     this.connectedDevice = device;
//     console.log(`Connected to ${device}!`);
//   },

//   disconnect() {
//     this.connectedDevice = null;
//     console.log(`Disconnected!`);
//   },

//   play() {
//     if (this.connectedDevice) {
//       console.log(`Play on ${this.connectedDevice}`);
//     } else {
//       console.log('No connected device');
//     }
//   },
//   pause() {
//     if (this.connectedDevice) {
//       console.log(`Pause on ${this.connectedDevice}`);
//     } else {
//       console.log('No connected device');
//     }
//   },

//   callSiri() {
//     if (this.connectedDevice) {
//       console.log('Hello Siri');
//     }
//   },
// };

// pods.connectToDevice('Iphone Volodymyr');

// pods.play();

// pods.pause();

// pods.disconnect();

// pods.play();

// pods.callSiri();

// pods.connectToDevice('Iphone Roman');

// pods.callSiri();

//!======================================================
