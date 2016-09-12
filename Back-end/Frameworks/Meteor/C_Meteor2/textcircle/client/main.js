import { Template } from 'meteor/templating';
import './main.html';

Template.editor.helpers({
  docid: () => {
    console.log(`Doc id helper: ${Documents.findOne()}`);
    const doc = Documents.findOne();
    if (doc) {
      return doc._id;
    }
    return undefined;
  },
});
