this.Documents = new Mongo.Collection('documents');
EditingUsers = new Mongo.Collection('editingUsers');

// Methods that provide write access to the data
Meteor.methods({
  // Allows changes to the editing users collection
  addEditingUser: function () {
    let user;
    let eusers;
    let doc = Documents.findOne();
    // no doc -> give up
    if (!doc) {
      return;
    }
    // No logged in user -> give up
    if (!this.userId) {
      return;
    }
    // Now I have a doc, and possibly a user
    user = Meteor.user().profile;
    eusers = EditingUsers.findOne({
      docid: doc._id
    });
    // If no editing users have been stored yet
    if (!eusers) {
      // We create the object of the doc with an empty users object
      eusers = {
        docid: doc._id,
        users: {},
      };
    }
    user.lastEdit = new Date();
    eusers.users[this.userId] = user;
    // Upsert- insert or update if filter matches
    EditingUsers.upsert({ _id: eusers._id }, eusers);
  },
});
