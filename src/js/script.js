import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';
import Axios from 'axios';

// ====================================

// function searchSuperhero(x1) {
//   const BASE_URL = 'https://superhero-search.p.rapidapi.com';
//   const END_POINT = '/api/';

//   const params = new URLSearchParams({
//     hero: x1,
//   });

//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   const headers = {
//     'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
//     'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
//   };

//   return fetch(url, { headers }).then(res => res.json());
// }

// searchSuperhero('Spiderman').then(res => {
//   console.log(res);
// });
// searchSuperhero('Superman').then(res => {
//   console.log(res);
// });
// searchSuperhero('Batman').then(res => {
//   console.log(res);
// });
// searchSuperhero('Hulk').then(res => {
//   console.log(res);
// });

//!======================================================
const axios = Axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: { 'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7' },
  params: {
    test: 'Hello',
  },
});

async function getNews(query, page, perPage) {
  const params = {
    q: query,
    page: page,
    pageSize: perPage,
  };
  const headers = {
    // url: 'Hello',
  };

  const res = await axios.get('/everything', { params, headers });
  return res.data;
}

getNews('Tesla', 1, 10);
