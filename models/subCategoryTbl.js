const mongoose = require('mongoose');

const CatrgorySchema = mongoose.Schema({
    categoryId : {
        type : mongoose.Types.ObjectId,
        ref : 'category'
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