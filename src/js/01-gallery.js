// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
console.log(SimpleLightbox);
import 'simplelightbox/dist/simple-lightbox.min.css';
import templateFunction from '../templates';
console.log(templateFunction);

const galleryEl = document.querySelector('.gallery');
const pictureCart = createPictureCart(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', pictureCart);

function createPictureCart(galleryItems) {
  return galleryItems.map(templateFunction).join('');
}
console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
