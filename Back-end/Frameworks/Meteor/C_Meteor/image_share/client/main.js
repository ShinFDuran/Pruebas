import { Template } from 'meteor/templating';
import './main.html';

Images = new Mongo.Collection('images');


// Enviamos la colección Images a la plantilla a través de un helper
Template.images.helpers({ images: Images.find() });

/**
 * Agregada la clase js-image al listado de imágenes
 * No tiene finalidad estética sino usarla para añadir interactividad
 * Al pulsar en la imagen cambiará el tamaño a 50px
 */
Template.images.events({
  'click .js-image': (event) => {
    $(event.target).css('width', '50px');
  },
  /**
   * Para que funcione tenemos que usar la definición antigua de function
   * this: Objeto de la imagen
   * this (=>): windows
   */
  'click .js-del-image': function (event) {
    let imageId = this._id;
    console.log(imageId);
    $(`#${imageId}`).hide('slow', () => { Images.remove({ _id: imageId }); });
  },
});
