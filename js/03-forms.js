/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const formEl = document.querySelector('.js-form');
const container = document.querySelector('ul');

//!======================================================

/* 
formEl.addEventListener('submit', e => {
  e.preventDefault();

  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;
  const comment = formEl.elements.comment.value;

  console.log(email, password, comment);
}); */

//!======================================================

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formEl);

  const userData = {
    email: formData.get('email'),
    password: formData.get('password'),
    comment: formData.get('comment'),
  };

  const markup = userTemplate(userData);
  container.insertAdjacentHTML('beforeend', markup);

  formEl.reset();
});

function userTemplate(user) {
  return `<li>
    <p>${user.email} ${user.password} ${user.comment}</p>
  </li>`;
}
