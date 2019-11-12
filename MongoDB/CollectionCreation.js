var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";

const url = "mongodb+srv://MyMongoDBUser:PASS@cluster0-k5ros.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { "email": "antonio.diaz.hsa@gmail.com", 
                "trip_departure": ["IAH","LAX","SAT","AUS","DFW","LAX"],
                "trip_destination": ["LAX","IAH","AUS","SAN","LAX","DFW"],
                "start_dates":["01/11/2018","09/04/2019","03/05/2016","05/21/2017","6/26/2017","2/20/2018"],
                "return_dates":["01/15/2018","09/05/2019","03/07/2016","05/24/2017","6/29/2017","2/24/2018"]
            };
  dbo.collection("FlightData").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});