import { Template } from 'meteor/templating';


Template.editor.helpers({
  docid: () => {
    let doc = Documents.findOne();
    console.log(`Doc id helper: ${doc}`);
    if (doc) {
      return doc._id;
    }
    return undefined;
  },
  config: () =>
    editor => {
      editor.setOption('lineNumbers', true);
      editor.setOption('theme', 'cobalt');
      editor.on('change', (cmEditor, info) => {
        // The content of the text editor is in cmEditor.getValue()
        const content = cmEditor.getValue();
        console.log(content);
        // We use jQuery to get the viewer and add it the content
        $('#viewer_iframe').contents().find('html').html(content);
        Meteor.call('addEditingUser');
      });
    },
});

Template.editingUsers.helpers({
  // retrieve a set of users that are editing this document
  users: () => {
    let eusers;
    let users;
    let doc = Documents.findOne();
    // no doc -> give up
    if (!doc) {
      return;
    }
    eusers = EditingUsers.findOne({ docid: doc._id });
    // No logged in user -> give up
    if (!eusers) {
      return;
    }
    users = new Array();
    let i = 0;
    for (let user_id in eusers.users) {
      users[i] = fixObjectKeys(eusers.users[user_id]);
      i++;
    }
    return users;
  },
});

// Helper function
// Renames object keys by removing hyphens to make the compatible with spacebars
function fixObjectKeys(obj) {
  let newObj = {};
  for (let key in obj) {
    let key2 = key.replace("-", "");
    newObj[key2] = obj[key];
  }
  return newObj;
}
