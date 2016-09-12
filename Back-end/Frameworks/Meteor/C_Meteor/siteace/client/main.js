import { Template } from 'meteor/templating';
import './main.html';
// Configuration of the registration form
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});

// Routes
// Default layout
Router.configure({
  layoutTemplate: 'ApplicationLayout',
});

Router.route('/', function () {
  this.render('website_form', {
    to: 'form',
  });
  this.render('website_list', {
    to: 'list',
  });
});

Router.route('/ApplicationLayout');


// ****** Helpers
// Helper function that returns all available websites
Template.website_list.helpers({
  websites: function() {
    return Websites.find({});
  },
});

// ****** Events
// Voting event
Template.website_item.events({
  'click .js-upvote': function(event) {
    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var websiteId = this._id;
    console.log('Up voting website with id ' + websiteId);
    // put the code in here to add a vote to a website!

    // prevent the button from reloading the page
    return false;
  },
  'click .js-downvote': function(event) {
    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var websiteId = this._id;
    console.log('Down voting website with id ' + websiteId);
    // put the code in here to remove a vote from a website!

    // prevent the button from reloading the page
    return false;
  },
});

Template.website_form.events({
  'click .js-toggle-website-form': function(event) {
    $('#website_form').toggle('slow');
  },
  'submit .js-save-website-form': function(event) {
    // here is an example of how to get the url out of the form:
    var url = event.target.url.value;
    console.log('The url they entered is: ' + url);
    //  put your website saving code in here!

    // stop the form submit from reloading the page
    return false;
  },
});
