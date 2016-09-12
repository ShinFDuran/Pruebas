import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (!Documents.findOne()) {
    // There is no documents yet, we need to initialize
    Documents.insert({ title: 'My new document' });
  }
});
