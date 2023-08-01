const mongoose = require('mongoose');

const CatrgorySchema = mongoose.Schema({
    categoryId : {
        type : String,
        required : true,
    },
    subcategory : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
    },
});

const crud = mongoose.model('subcategory',CatrgorySchema);

module.exports = crud;