function getBooks() {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/books';
  const url = `${BASE_URL}${END_POINT}`;
  return fetch(url).then(res => res.json());
}

function getUsers() {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';
  const url = BASE_URL + END_POINT;

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Server Error');
    }
  });
}

// document.addEventListener('DOMContentLoaded', async () => {
//   console.log('START');
//   const books = await getBooks();
//   console.log(books);
//   const users = await getUsers();
//   console.log(users);
//   console.log('END');
// });

//!======================================================

// async function foo() {}

// async () => {};

// const foo2 = async () => {};

// const obj = {
//   name: '123123',
//   async showInfo() {},
//   showInfo2: async () => {},
// };

// class User {
//   constructor() {}

//   async show() {}

//   static async show2() {}
// }

// document.addEventListener('click', async function () {});
// document.addEventListener('click', async () => {});
// document.addEventListener('click', foo2);

// [].forEach(async () => {});

//!======================================================

// async function getArr() {
//   const arr = [1, 4, 3, 1, 2, 4, 5];
//   return arr;
// }

//!======================================================

// const result = await getArr();
// console.log(result);

//!======================================================

async function getPokemon(pokemonName) {
  const BASE_URL = 'https://pokeapi.co/api/v2';
  const END_POINT = `/pokemon/${pokemonName}`;
  const url = BASE_URL + END_POINT;

  const response = await fetch(url);
  const pokemon = await response.json();

  return pokemon;
}

// async function getPokemons(len) {
//   for (let i = 1; i < len; i++) {
//     const result = await getPokemon(i);
//     console.log(result);
//   }
// }
// getPokemons(100);

// async function getPokemons() {
//   const p1 = getPokemon(1);
//   const p2 = getPokemon(2);
//   const p3 = getPokemon(3);
//   const p4 = getPokemon(4);

//   const arr = [p1, p2, p3, p4];
//   try {
//     const result = await Promise.all(arr);
//     console.log(result);
//   } catch {
//     console.log('err');
//   }
// }
// getPokemons(100);
