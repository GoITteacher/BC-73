import axios from 'axios';

export async function fetchArticles(query, currentPage) {
  const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
  const END_POINT = '/search';
  const url = BASE_URL + END_POINT;

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'free-news.p.rapidapi.com',
  };
  const params = {
    q: query,
    lang: 'en',
    page: currentPage,
    page_size: 10,
  };

  const res = await axios.get(url, { headers, params });
  return res.data;
}
