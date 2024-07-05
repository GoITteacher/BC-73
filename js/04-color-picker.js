let colorPalette = [];
const LENGTH = 8;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRandomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();
console.log(colorPalette);
//!======================================================

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

//!======================================================

function colorTemplate(color) {
  return `<li class="color-item" data-color="${color.hex}">
  <button class="color-body" style="background-color: ${color.hex}"></button>
  <div class="color-footer">
    <div>HEX: ${color.hex}</div>
    <div>RGB: ${color.rgb}</div>
    <div></div>
  </div>
</li>`;
}

function colorsTemplate(arr) {
  return arr.map(colorTemplate).join('');
}

function renderColors() {
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
}

renderColors();
//!======================================================

refs.itemList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('li.color-item');
  const color = liElem.dataset.color;
  refs.modalElement.style.backgroundColor = color;
  showModal();
});

refs.backdropElem.addEventListener('click', e => {
  if (e.target === e.currentTarget) hideModal();
});

//!======================================================

function showModal() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onModalClose);
}
function hideModal() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onModalClose);
}
function onModalClose(e) {
  console.log(e.code);
  if (e.code === 'Escape') hideModal();
}
