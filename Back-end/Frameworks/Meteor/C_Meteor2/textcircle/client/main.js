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
      editor.on('change', (cmEditor, info) => {
        // The content of the text editor is in cmEditor.getValue()
        const content = cmEditor.getValue();
        console.log(content);
        // We use jQuery to get the viewer and add it the content
        $('#viewer_iframe').contents().find('html').html(content);
      });
    },
});
