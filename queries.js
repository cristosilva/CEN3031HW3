/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect('mongodb://hw3:hw3@ds157873.mlab.com:57873/cen3031hw3');
var connection = mongoose.connection;
connection.on("connected",function(){
  console.log("connected to database");
})

var findLibraryWest = function() {
  Listing.find({name: 'Library West'}, function(err,user) {
    if (err) throw err;
    console.log(user);
  });
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};

var removeCable = function() {
  Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
    if (err) throw err;

    // we have deleted the user
    console.log('User deleted!');
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};

var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '102 Phelps Lab, Gainesville, FL 32611' }, function(err, user) {
    if (err) throw err;
    console.log(user);
  });
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, users){
    if (err) throw err;
    console.log(users);
  });
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
