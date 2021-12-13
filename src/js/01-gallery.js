// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import itemsTemplate from '../templates/gallery-items.hbs';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = itemsTemplate(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery = new SimpleLightbox('a.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});