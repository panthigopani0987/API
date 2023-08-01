const express = require('express');

const port = 9000;

const app = express();

const path = require('path');

app.use('/uploads',express.static(path.join(__dirname,('uploads'))));

const DB = require('./config/mongoose');

const passport = require('passport');

const session = require('express-session');

const passportJwt = require('./config/passport-jwt-strategy');

app.use(session({
    name : 'APIKnow',
    secret : 'APTLearn',
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 1000 * 60 * 60 * 24
    }
}));

app.use(passport.session());

app.use(passport.initialize());

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err)
    {
        console.log(err);
        return false;
    }
    console.log('Server Is Start On Port :- '+port);
})