const BASE_URL = 'http://localhost:3000';

export function getBooks() {
  const END_POINT = '/books';
  const url = `${BASE_URL}${END_POINT}`;
  return fetch(url).then(res => res.json());
}

export function createBook(newBook) {
  const END_POINT = '/books';
  const url = `${BASE_URL}${END_POINT}`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  };

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Server Error');
    }
  });
}

export function updateBook({ id, ...book }) {
  const END_POINT = `/books/${id}`;
  const url = `${BASE_URL}${END_POINT}`;

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(url, options).then(res => res.json());
}

export function resetBook({ id, ...bookData }) {
  const END_POINT = `/books/${id}`;
  const url = `${BASE_URL}${END_POINT}`;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  };

  return fetch(url, options).then(res => res.json());
}

export function deleteBook(id) {
  const END_POINT = `/books/${id}`;
  const url = `${BASE_URL}${END_POINT}`;

  const options = {
    method: 'DELETE',
  };

  return fetch(url, options);
}
