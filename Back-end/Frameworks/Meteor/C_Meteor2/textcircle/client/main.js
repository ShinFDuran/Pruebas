import { Template } from 'meteor/templating';

// The time will be updated each second 
Meteor.setInterval(() => {
  Session.set('current_date', new Date());
}, 1000);

Template.date_display.helpers({
  current_date: () => Session.get('current_date'),
});

Template.editor.helpers({
  docid: () => {
    const doc = Documents.findOne();
    console.log(`Doc id helper: ${doc}`);
    if (doc) {
      return doc._id;
    }
    return undefined;
  },
});
