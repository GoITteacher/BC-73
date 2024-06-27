const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

//!======================================================

/**
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */

// const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline: ', isAllOnline);

//!======================================================

/**
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */

// const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline: ', isAnyOnline);

// const anyHardcorePlayers = players.some((el,i) => el.points > 100);
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);

//!======================================================
