import { Template } from 'meteor/templating';
import './main.html';

// Routes
// Default layout
Router.configure({
  layoutTemplate: 'ApplicationLayout',
});

Router.route('/', function () {
  this.render('welcome', {
    to: 'main',
  });
});

Router.route('/images', function () {
  this.render('navbar', {
    to: 'navbar',
  });
  this.render('images', {
    to: 'main',
  });
});

Router.route('/image/:_id', function () {
  this.render('navbar', {
    to: 'navbar',
  });
  this.render('image', {
    to: 'main', 
    data: function() {
      return Images.findOne({ _id: this.params._id });
    },
  });
});


// Infinite Scroll
Session.set('imageLimit', 8);
let lastScrollTop = 0;
$(window).scroll(function(event) {
  console.log('Scroll');
  // test if we are near the bottom of the window
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    // where are we in the page? 
    let scrollTop = $(this).scrollTop();
    // test if we are going down
    if (scrollTop > lastScrollTop) {
      // yes we are heading down...
      Session.set('imageLimit', Session.get('imageLimit') + 4);
    }
    lastScrollTop = scrollTop;
  }
});

// Configuration of the registration form
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});

// ****** Helpers

/**
 * We send the Images collection to the template with the aid of a helper
 * We can choose the attribute to order the objects
 */
Template.images.helpers({
  images: () => {
    if (Session.get('userFilter')) {
      return Images.find(
        { createdBy: Session.get('userFilter') },
        { sort: { createdOn: -1, rating: -1 } }
      );
    }
    return Images.find({}, {
      sort: { createdOn: -1, rating: -1 },
      limit: Session.get('imageLimit'),
    });
  },
  getUser: userId => {
    // We need to get from the collection the user
    const user = Meteor.users.findOne({ _id: userId });
    // If user !== undefined returns the username
    if (user) {
      return user.username;
    }
    // If you can`t find in the collection return the default value
    return 'No One';
  },
  getFilterUser: () => {
    if (Session.get('userFilter')) {
      /**
       * First we search in the collection the user of the createdBy attribute
       * We return the username (string) of that user (object)
       */
      return Meteor.users.findOne({ _id: Session.get('userFilter') }).username;
    }
    return false;
  },
  // This is similar to getFilterUser but using a ternary conditional
  filtering_images: () => (Session.get('userFilter') ? true : false),
});

// Helper of the user data
Template.welcome.helpers({
  username: () => {
    if (Meteor.user()) {
      return Meteor.user().username;
    }
    return 'no one';
  },
});

// ****** Events

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
  'click .js-set-image-filter': function (event) {
    Session.set('userFilter', this.createdBy);
  },
  'click .js-unset-image-filter': function (event) {
    Session.set('userFilter', undefined);
  },
});

Template.image_add_form.events({
  'submit .js-add-image': function (event) {
    let imgSrc = event.target.img_src.value;
    let imgAlt = event.target.img_alt.value;
    console.log(`src: ${imgSrc}, alt: ${imgAlt}`);

    if (Meteor.user()) {
      // We check if we are logged
      Images.insert({
        img_src: imgSrc,
        img_alt: imgAlt,
        createdOn: new Date(),
        createdBy: Meteor.user()._id,
      });
    }


    // We close the modal
    $('#image_add_form').modal('hide');
    // We need to add return false to cancel the default event (reload the page)
    return false;
  },
});
