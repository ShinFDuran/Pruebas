import { Template } from 'meteor/templating';
import './main.html';

Images = new Mongo.Collection('images');


// We send the Images collection to the template with the aid of a helper
// We can choose the attribute to order the objects
Template.images.helpers({ images: Images.find({}, { sort: { createdOn: -1, rating: -1 } }) });

/**
 * We add class js-XX
 * This type of classes are not to add css, we use thems for behavior
 */
Template.images.events({
  'click .js-image': (event) => {
    $(event.target).css('width', '50px');
  },
  /**
   * We can't use the arrow function here because this is different
   * this: Image`s object
   * this (=>): windows`s object
   */
  'click .js-del-image': function (event) {
    let imageId = this._id;
    console.log(imageId);
    $(`#${imageId}`).hide('slow', () => { Images.remove({ _id: imageId }); });
  },
  'click .js-rate-image': function (event) {
    let rating = $(event.currentTarget).data('userrating');
    console.log(rating);
    let imageId = this.id;
    console.log(imageId);

    Images.update({ _id: imageId },
      { $set: { rating } }
    );
  },
  'click .js-show-image-form': function (event) {
    $('#image_add_form').modal('show');
  },
});

Template.image_add_form.events({
  'submit .js-add-image': function (event) {
    let imgSrc = event.target.img_src.value;
    let imgAlt = event.target.img_alt.value;
    console.log(`src: ${imgSrc}, alt: ${imgAlt}`);

    Images.insert({
      img_src: imgSrc,
      img_alt: imgAlt,
      createdOn: new Date(),
    });
    // We close the modal
    $('#image_add_form').modal('hide');
    // We need to add return false to cancel the default event (reload the page)
    return false;
  },
});
