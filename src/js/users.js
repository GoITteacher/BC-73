import {
  getUsers,
  createUser,
  updateUser,
  resetUser,
  deleteUser,
} from './modules/usersAPI.js';

//!======================================================
const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
};

//!======================================================

document.addEventListener('DOMContentLoaded', onUserLoad);
refs.createUserForm.addEventListener('submit', onUserCreate);
refs.updateUserForm.addEventListener('submit', onUserUpdate);
refs.resetUserForm.addEventListener('submit', onUserReset);
refs.userListElem.addEventListener('click', onUserDelete);

//!======================================================

async function onUserLoad() {
  try {
    const users = await getUsers();
    const markup = usersTemplate(users);
    refs.userListElem.innerHTML = markup;
  } catch {}
}

//? ==================================

async function onUserCreate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const user = Object.fromEntries(formData.entries());

  try {
    const result = await createUser(user);
    const markup = userTemplate(result);
    refs.userListElem.insertAdjacentHTML('afterbegin', markup);
  } catch {}

  e.target.reset();
}
//? ==================================

async function onUserUpdate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const userData = Object.fromEntries(formData.entries());
  const user = parseUserParamsForUpdate(userData);

  try {
    const result = await updateUser(user);
    const markup = userTemplate(result);

    const userElem = document.querySelector(`li[data-id="${user.id}"]`);
    userElem.insertAdjacentHTML('afterend', markup);

    userElem.remove();
  } catch {}

  e.target.reset();
}
//? ==================================

async function onUserReset(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const user = Object.fromEntries(formData.entries());

  /* 
  resetUser(user).then(result => {
    const markup = userTemplate(result);
    const userElem = document.querySelector(`li[data-id="${user.id}"]`);
    userElem.insertAdjacentHTML('afterend', markup);
    userElem.remove();
  }); 
  */

  try {
    const result = await resetUser(user);
    const markup = userTemplate(result);
    const userElem = document.querySelector(`li[data-id="${user.id}"]`);
    userElem.insertAdjacentHTML('afterend', markup);
    userElem.remove();
  } catch {}

  e.target.reset();
}
//? ==================================

async function onUserDelete(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const liElem = e.target.closest('li');
  const id = liElem.dataset.id;

  // deleteUser(id).then(() => {
  //   liElem.remove();
  // });

  try {
    await deleteUser(id);
    liElem.remove();
  } catch {}
}

//!======================================================
function userTemplate({ id, name, img, email, phone }) {
  return `<li class="card user-item" data-id="${id}">
  <img
    src="https://picsum.photos/1280/720?random=${id}"
    alt="#"
    class="user-avatar"
  />
  <h3 class="user-title">${name}</h3>
  <p>Phone: ${phone}</p>
  <p>Email: ${email}</p>
  <button class="btn button">DELETE</button>
</li>`;
}

function usersTemplate(arr) {
  return arr.map(userTemplate).join('\n');
}

function parseUserParamsForUpdate(user) {
  const result = {};

  for (const [key, value] of Object.entries(user)) {
    if (value) {
      result[key] = value;
    }
  }

  return result;
}
//!======================================================
