const STORAGE_KEY = 'feedback-msg';
const USER_COLOR_KEY = 'user-color';

const form = document.querySelector('.feedback-form');

//!======================================================

form.addEventListener('input', e => {
  const data = {
    name: form.elements.name.value,
    message: form.elements.message.value,
  };

  saveToLs(STORAGE_KEY, data);
});

//!======================================================

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    name: form.elements.name.value,
    message: form.elements.message.value,
  };

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
});

//!======================================================
document.addEventListener('DOMContentLoaded', () => {
  const userData = loadFromLs(STORAGE_KEY);

  form.elements.name.value = userData?.name ?? '';
  form.elements.message.value = userData?.message ?? '';
});

//!======================================================

function saveToLs(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLs(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

//!======================================================

//?======================================================

//!======================================================

const colorEl = document.querySelector('.js-color');

colorEl.addEventListener('input', e => {
  const color = hex2rgb(e.target.value);
  document.body.style.backgroundColor = color;

  saveToLs(USER_COLOR_KEY, color);
});

document.addEventListener('DOMContentLoaded', () => {
  const color = loadFromLs(USER_COLOR_KEY);
  document.body.style.backgroundColor = color || 'silver';
});

//!======================================================

const hex2rgb = hex => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // return {r, g, b}
  return { r, g, b };
};
