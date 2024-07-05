let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
  sendBtn: document.querySelector('.js-btn'),
};

//!======================================================

refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('.tag-item');
  liElem.classList.toggle('active');
});

//!======================================================

refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const oldLiElem = refs.secondTagsList.querySelector('.active');
  const liElem = e.target.closest('.tag-item');

  oldLiElem.classList.remove('active');
  liElem.classList.add('active');
});

//!======================================================

refs.sendBtn.addEventListener('click', () => {
  const listActiveElem = refs.firstTagsList.querySelectorAll('.active button');
  const arr = [...listActiveElem].map(liElem => {
    return liElem.textContent.trim();
    // return liElem.textContent;
  });

  console.log(arr);

  const activeElem = refs.secondTagsList.querySelector('.active button');
  console.log(activeElem.textContent.trim());
});
