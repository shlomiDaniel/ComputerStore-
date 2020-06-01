const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Processor = new Schema({

    name :String,
    company:String,
    price:String,
    img:String,
    speed:String,
    numberOfCores:Number

});


 module.exports = mongoose.model('Processor', Processor);