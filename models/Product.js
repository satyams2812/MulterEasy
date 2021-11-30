var mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define the schema for our Product model
var Product = new Schema({
    name: String, // name of product
    description: String, // description of product 
    photos: Array, // array of images

});


module.exports = Product = mongoose.model('products', Product);

