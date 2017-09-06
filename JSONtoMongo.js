'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://hw3:hw3@ds157873.mlab.com:57873/cen3031hw3');
var connection = mongoose.connection;
connection.on("connected",function(){
  console.log("connected to database");
})
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
var listings;

fs.readFile('listings.json', 'utf8', function(err, data) {
  //me
    if (err) throw err;
    listings = JSON.parse(data);
    console.log(listings);

    for(var i = 0; i < listings.entries.length; i++)
      {
        var listing = new Listing({
            code: listings.entries[i].code, 
            name: listings.entries[i].name, 
            coordinates: listings.entries[i].coordinates, 
            address: listings.entries[i].address
          });
        listing.save(function(err) {
           if (err) throw err; 
        });
      };
});
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */