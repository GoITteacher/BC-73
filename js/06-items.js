const refs = {
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-items'),
};
let items = [];

//!======================================================

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const item = {
    id: Date.now(),
    title: formData.get('input-value'),
    image: formData.get('image'),
    desc: formData.get('description'),
    priority: formData.get('priority'),
  };

  const markup = itemTemplate(item);
  refs.container.insertAdjacentHTML('beforeend', markup);
  items.push(item);

  e.target.reset();
});

//!======================================================

refs.container.addEventListener('click', e => {
  if (e.target.dataset.type !== 'delete') return;

  const liElem = e.target.closest('li');
  const itemId = +liElem.dataset.id;
  liElem.remove();

  items = items.filter(el => el.id !== itemId);

  console.log(items);
});

//!======================================================
function itemTemplate(item) {
  return `<li class="box item hight" data-id=${item.id}>
  <h3>${item.title}</h3>
  <h5>Priority - ${item.priority}</h5>
  <div class="fb">
    <p class="item-desc">${item.desc}</p>
    <img
      src="https://blog.logrocket.com/wp-content/uploads/2023/01/css-full-page-background.png"
      alt=""
    />
  </div>

  <button class="form-control" data-type="show">SHOW MORE</button>
  <button class="form-control" data-type="delete">DELETE</button>
</li>`;
}

function itemsTemplate(arr) {
  return arr.map(itemTemplate).join('');
}

function renderItems(arr) {
  const markup = itemsTemplate(arr);
  refs.container.innerHTML = markup;
}
