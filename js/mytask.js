const lightbox = new SimpleLightbox('.my-list a', {
  showCounter: false,
  loop: false,
  captionDelay: 500,
});

lightbox.on('show.simplelightbox', () => {
  console.log('OPEN');
});
lightbox.on('close.simplelightbox', () => {
  console.log('CLOSE');
});

window.addEventListener('keydown', e => {
  if (e.code === 'KeyR') lightbox.open();
});
