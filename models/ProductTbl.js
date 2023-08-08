const mongoose = require("mongoose")

const subschema = mongoose.Schema({
    categoryId : {
        type : mongoose.Types.ObjectId,
        ref : 'category'
    },
    subCategoryId : {
        type : mongoose.Types.ObjectId,
        ref : 'subcategory'
    },
    pname : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    qty : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const crud = mongoose.model('product',subschema);

module.exports = crud;
