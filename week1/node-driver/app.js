const express = require('express'); 
const app = express(); 
const engines = require('consolidate'); 
const { MongoClient } = require('mongodb'); 
const assert = require('assert');
const url = 'mongodb://localhost:27017/video';

app.engine('html', engines.nunjucks); 
app.set('view engine', 'html'); 
app.set('views', __dirname + '/views'); 

MongoClient.connect(url, (err, db) => {

    assert.equal(null, err);
    console.log("Successfully connected to server");

    app.get('/', (req, res) => {
	    db.collection('movies').find({}).toArray((err, docs) => {
	    		res.render('movies', { 'movies': docs });
	    });
    }); 

    app.use((req, res) => {
    	res.sendStatus(404); 
    }); 

    const server = app.listen(3000, () => {
    	const port = server.address().port; 
    }); 
});