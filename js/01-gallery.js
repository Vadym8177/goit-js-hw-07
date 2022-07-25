import { galleryItems } from './gallery-items.js';

const galleryItemsRef = document.querySelector('.gallery');

const listItems = createListItems(galleryItems);
function createListItems(items) {
  return items
    .map(
      item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join('');
}
galleryItemsRef.innerHTML = listItems;

const galleryLink = document.querySelector('.gallery').addEventListener('click', e => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );
  instance.show();

  function onEscPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
});
