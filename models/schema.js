const mongoose = require('mongoose');

// define a schema for the moviereview using mongoose
const MovieReviewSchema=new mongoose.Schema({
    name:{type:String,required:true},
    url:{type:String,required:true},
    rate:{type:String,required:true},
    review:{type:String,required:true}
});
module.exports=mongoose.model('Movie',MovieReviewSchema);