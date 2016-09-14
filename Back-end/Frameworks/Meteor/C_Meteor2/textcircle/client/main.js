import { Template } from 'meteor/templating';


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
