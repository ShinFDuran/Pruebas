/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  // We only need to insert a documento in the collection
  db.collection('movies').insert(doc);
  callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // TODO: implement
  // We need to use find with the director that cames in the function
  // We will sort by title and ascending (1)
  db.collection('movies').find({ director }).sort({ title: 1 })
    .toArray(function(error, docs) {
      // Finally we access to the array of documents in the callback
      callback(null, docs);
    });
};
