import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(e => `<li class="gallery__item">
   <a class="gallery__link" href="${e.original}">
      <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
   </a>
</li>`).join('');

gallery.insertAdjacentHTML('beforeend',markup);

let gallerySlider = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

