import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(e => `<li class="gallery__item"><a class="gallery__link" href="${e.original}"><img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}"
      alt="${e.description}"
    />
  </a>
</li>`).join('');

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener('click', OnClick);

function OnClick(evt) {
    evt.preventDefault();

    const instance = basicLightbox.create(`
    <img class="gallery__image" src="${evt.target.dataset.source}" width="800" height="600" alt="${evt.target.alt}">`);
    
    instance.show();

    addEventListener('keydown', OnFunck);

    function OnFunck(evt) {
        if (evt.key === "Escape") {
            instance.close()
        }
    };
};




