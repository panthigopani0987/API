const mongoose = require('mongoose');

const CatrgorySchema = mongoose.Schema({
    category : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
    },
});

const crud = mongoose.model('category',CatrgorySchema);

module.exports = crud;