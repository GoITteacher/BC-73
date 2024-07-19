import {
  getBooks,
  createBook,
  resetBook,
  updateBook,
  deleteBook,
} from './modules/booksAPI';

//!======================================================
const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};

//!======================================================

document.addEventListener('DOMContentLoaded', onBooksLoad);
refs.createFormElem.addEventListener('submit', onBookCreate);
refs.resetFormElem.addEventListener('submit', onBookReset);
refs.updateFormElem.addEventListener('submit', onBookUpdate);
refs.deleteFormElem.addEventListener('submit', onBookDelete);

//!======================================================

async function onBooksLoad() {
  try {
    const books = await getBooks();
    const markup = booksTemplate(books);
    refs.bookListElem.innerHTML = markup;
  } catch (err) {
    console.log(err);
  }
}

async function onBookCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const book = {
    title: formData.get('bookTitle'),
    author: formData.get('bookAuthor'),
    desc: formData.get('bookDesc'),
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
  };

  try {
    const createdBook = await createBook(book);
    const markup = templateBook(createdBook);
    refs.bookListElem.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}

async function onBookReset(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const book = {
    id: formData.get('bookId'),
    title: formData.get('bookTitle'),
    author: formData.get('bookAuthor'),
    desc: formData.get('bookDesc'),
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
  };

  try {
    const updatedBook = await resetBook(book);
    const markup = templateBook(updatedBook);
    const bookElem = document.querySelector(`li[data-id="${book.id}"]`);
    bookElem.insertAdjacentHTML('afterend', markup);
    bookElem.remove();
  } catch (err) {
    console.log(err);
  }

  console.log('THE END');

  e.target.reset();
}

async function onBookUpdate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const book = {
    id: formData.get('bookId'),
    title: formData.get('bookTitle') || undefined,
    author: formData.get('bookAuthor') || undefined,
    desc: formData.get('bookDesc') || undefined,
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
  };

  try {
    const updatedBook = await updateBook(book);
    const markup = templateBook(updatedBook);
    const bookElem = document.querySelector(`li[data-id="${book.id}"]`);
    bookElem.insertAdjacentHTML('afterend', markup);
    bookElem.remove();
  } catch (err) {
    console.log('error');
  }

  e.target.reset();
}

async function onBookDelete(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;

  try {
    await deleteBook(id);
    const bookElem = document.querySelector(`li[data-id="${id}"]`);
    bookElem.remove();
  } catch (err) {
    console.log(err);
  }
}

//!======================================================

function templateBook({ id, title, desc, author, img, price, rating }) {
  return `
<li class="book-item card" data-id="${id}">
  <img
    class="book-img"
    src="https://picsum.photos/1280/720?random=${id}"
    alt=""
  />

  <h5 class="book-title">${title}</h5>
  <h6>Author: ${author}</h6>
  <p class="book-desc">${desc}</p>

  <div class="book-info">
    <span>Price: ${price}</span>
    <button class="btn btn-primary" data-id="${id}">edit</button>
    <span>Rating: ${rating}</span>
  </div>
</li>`;
}

function booksTemplate(books) {
  return books.map(templateBook).join('');
}

//!======================================================

refs.bookListElem.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const id = e.target.dataset.id;

  refs.updateFormElem.elements.bookId.value = id;
  refs.resetFormElem.elements.bookId.value = id;
  refs.deleteFormElem.elements.bookId.value = id;
});
