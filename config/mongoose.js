const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/API_login');

const DB = mongoose.connection;

DB.on('connected',(err)=>{
    if(err)
    {
        console.log(err);
        return false;
    }
    console.log('DB Is Connect !!');
});

module.exports = DB;