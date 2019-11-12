const express = require('express');
const path = require('path');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');

const app = express();
app.use(express.static('C:/Users/origa/Documents/GitHub/HackUTD/Flight_Input'));

app.use(bodyParser.urlencoded({ extended: false }));

var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";

const url = "mongodb+srv://MyMongoDBUser:PASS@cluster0-k5ros.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

var dbConn = mongodb.MongoClient.connect(url);



app.post('/post-feedback', function (req, res) {
    dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
        db.db("mydb").collection('FlightData').insertOne(req.body);
        console.log(req);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
    res.send('Data received:\n' + JSON.stringify(req));
});

app.get('/view-feedbacks',  function(req, res) {
    dbConn.then(function(db) {
        db.db("mydb").collection('FlightData').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
            console.log(req);
        });
    });
});

app.listen(3000, ()=>console.log('listening at 3000'));
