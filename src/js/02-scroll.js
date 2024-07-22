import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchArticles } from './modules/newsAPI2.js';
import { articlesTemplate } from './templates/render-function2.js';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
};

//!======================================================

let userValue = '';
let currentPage = 1;
let maxPage = 1;
const pageSize = 10;

//!======================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  currentPage = 1;
  userValue = e.target.elements.query.value.trim();

  try {
    showLoader();
    const data = await fetchArticles(userValue, currentPage);
    maxPage = data.total_pages;
    const markup = articlesTemplate(data.articles);
    refs.articleListElem.innerHTML = markup;
  } catch {
    maxPage = 0;
    refs.articleListElem.innerHTML = '';
  }

  hideLoader();
  updateStatusObserver();
});

async function loadMoreArticles() {
  currentPage++;
  showLoader();
  const data = await fetchArticles(userValue, currentPage);
  const markup = articlesTemplate(data.articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);

  hideLoader();
  updateStatusObserver();
}

//!======================================================

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('hidden');
}

//!======================================================
function updateStatusObserver() {
  if (currentPage >= maxPage) {
    console.log('Перестали слідкувати');
    observer.unobserve(refs.targetElem);
  } else {
    console.log('Почали слідкувати');
    observer.observe(refs.targetElem);
  }
}

const options = {
  rootMargin: '3000px',
};

const observer = new IntersectionObserver(entries => {
  const entry = entries[0];
  if (!entry.isIntersecting) return;

  loadMoreArticles();
}, options);
