import { Template } from 'meteor/templating';

import './main.html';


let imgData = [
  {
    img_src: 'laptops.jpg',
    img_alt: 'some laptops on a table',
  },
  {
    img_src: 'bass.jpg',
    img_alt: 'a bass player',
  },
  {
    img_src: 'beard.jpg',
    img_alt: 'some musicians with beards',
  },
];

Template.images.helpers({ images: imgData });

/**
 * Agregada la clase js-image al listado de imágenes
 * No tiene finalidad estética sino usarla para añadir interactividad
 * Al pulsar en la imagen cambiará el tamaño a 50px
 */
Template.images.events({
  'click .js-image': (event) => {
    $(event.target).css('width', '50px');
  },
});
