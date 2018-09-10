const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();



const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'shc';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  const db = client.db(dbName);
 
  insertDocuments(db, function() {
    findDocuments(db, function() {
      client.close();
    });
  });
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', product);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
