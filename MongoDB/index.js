const express = require('express');
const path = require('path');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');

const app = express();
app.use(express.static('C:/Users/origa/Documents/GitHub/HackUTD/Flight_Input'));

app.use(bodyParser.urlencoded({ extended: false }));

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');



app.post('/post-feedback', function (req, res) {
    dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
        db.db("mydb").collection('FlightData').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/view-feedbacks',  function(req, res) {
    dbConn.then(function(db) {
        db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
        });
    });
});

app.listen(3000, ()=>console.log('listening at 3000'));
