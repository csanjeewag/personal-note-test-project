var mongoose = require('mongoose');

var querySchema = new mongoose.Schema({
    
    // _id: { type : Object }, 
    userId     :    {type:String, required : true},
    titile     :    {type : String, required : true},
    text       :    {type : String},
    fileName   :    {type:String, required : true},
    isArchive  :    {type:Boolean, default:false},
    createDate :    {type:Date},
    updateDate :    {type:Date}



}, { timestamps : true })

var queryModel = mongoose.model('note', querySchema);

module.exports = queryModel;