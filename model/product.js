const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    title: {type:String, required:true}, // String is shorthand for {type: String}
    description : String,
    price : {type:Number, min : [0, "Price can't be negative"], required:true},
    discountPercentage :{type:Number, min:[0,"Min DISCOUNT is wrong"], max:[50,"Max DISCOUNT is wrong"]},
  rating:{type:Number, min:[0,"Min rating is wrong"], max:[5,"Max rating is wrong"]},
    brand :{ type:String, required:true},
    category:{ type:String, required:true},
    thumbnail : { type:String, required:true},
    images : [String]
  });
  
exports.Product = mongoose.model('Product',productSchema);



