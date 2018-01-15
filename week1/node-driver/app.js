const { MongoClient } = require('mongodb'); 
const assert = require('assert');

const url = 'mongodb://localhost:27017/video';

MongoClient.connect(url, (err, db) => {

    assert.equal(null, err);
    console.log("Successfully connected to server");

    // Find some documents in our collection
    db.collection('movies').find({}).toArray((err, docs) => {

        // Print the documents returned
        docs.forEach((doc) => {
            console.log(doc.title);
        });

        // Close the DB
        db.close();
    });

    // Declare success
    console.log("Called find()");
});