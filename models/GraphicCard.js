const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GraphicCard = new Schema({

    name :String,
    company:String,
    price:String,
    img:String

});


 module.exports=mongoose.model('GraphicCard', GraphicCard);