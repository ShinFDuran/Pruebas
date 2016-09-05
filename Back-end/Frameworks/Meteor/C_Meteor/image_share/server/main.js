import { Meteor } from 'meteor/meteor';

Images = new Mongo.Collection("images");
console.log(Images.find().count());

Meteor.startup(() => {
  if (Images.find().count() === 0) {
    for (let i = 1; i < 23; i++) {
      Images.insert({
        img_src: 'img_${{i}}.jpg',
        img_alt: 'image number ${{i}}',
      });
    }// end of for insert images
    // count the images!
    console.log('startup.js says: ' + Images.find().count());
  }// end of if have no images
});
