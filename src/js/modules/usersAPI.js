const BASE_URL = 'http://localhost:3000';

export function getUsers() {
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
export function createUser(user) {
  const END_POINT = '/users';
  const url = BASE_URL + END_POINT;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Server Error');
    }
  });
}
export function updateUser({ id, ...user }) {
  const END_POINT = `/users/${id}`;
  const url = BASE_URL + END_POINT;

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Server Error');
    }
  });
}
export function resetUser({ id, ...user }) {
  const END_POINT = `/users/${id}`;
  const url = BASE_URL + END_POINT;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Server Error');
    }
  });
}
export function deleteUser(id) {
  const END_POINT = `/users/${id}`;
  const url = BASE_URL + END_POINT;

  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Server Error');
    }
  });
}
