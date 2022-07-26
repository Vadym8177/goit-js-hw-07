import { galleryItems } from './gallery-items.js';

const galleryItemsRef = document.querySelector('.gallery');

const listItems = createListItems(galleryItems);
function createListItems(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    )
    .join('');
}
galleryItemsRef.innerHTML = listItems;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
