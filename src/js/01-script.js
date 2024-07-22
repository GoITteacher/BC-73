import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getArticles } from './modules/newsAPI.js';
import { articlesTemplate } from './templates/render-functions.js';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

//!======================================================

let userValue = '';
let currentPage = 1;
let maxPage = 0;
const pageSize = 10;

//!======================================================
refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  userValue = e.target.elements.query.value;
  currentPage = 1;
  showLoader();
  try {
    const data = await getArticles(userValue, currentPage);

    const markup = articlesTemplate(data.articles);
    refs.articleListElem.innerHTML = markup;

    maxPage = Math.ceil(data.totalResults / pageSize);
  } catch {}

  updateBtnStatus();
  hideLoader();

  e.target.reset();
});

refs.btnLoadMore.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();
  try {
    const data = await getArticles(userValue, currentPage);
    const markup = articlesTemplate(data.articles);
    refs.articleListElem.insertAdjacentHTML('beforeend', markup);
  } catch {}

  scrollPage();
  updateBtnStatus();
  hideLoader();
});
//!======================================================

function showLoadMoreBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  refs.btnLoadMore.classList.add('hidden');
}

function updateBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMoreBtn();

    iziToast.info({
      message: maxPage === 0 ? 'Not Found' : 'The End!',
    });
  } else {
    showLoadMoreBtn();
  }
}

//!======================================================

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('hidden');
}

//!======================================================

function scrollPage() {
  const myElem = refs.articleListElem.firstElementChild;

  const height = myElem.getBoundingClientRect().height;

  scrollBy({
    top: height,
    behavior: 'smooth',
  });
}
