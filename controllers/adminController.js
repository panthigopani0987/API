const registerTbl = require('../models/registerTbl');

const jwtData = require('jsonwebtoken');

const index = (req, res) => {
    return res.json({ message: "Done" });
}

const insertData = async (req, res) => {
    try {
        const { name, email, password, cpassword } = req.body;
        if (password == cpassword) {
            const insert = await registerTbl.create({
                name: name,
                email: email,
                password: password,
            });
            if (insert) {
                return res.json({ status: 1, messege: 'User successfully Register' });  
            } else {
                return res.json({ status: 0, messege: 'User Not Register' });
            }
        } else {
            return res.json({ status: 0, messege: 'New And Confirm Password Not Match' });
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewData = async (req, res) => {
    try {
        let viewRecord = await registerTbl.find({});
        if (viewRecord) {
            return res.json({ status: 1, messege: viewRecord });
        }
        else {
            return res.json({ status: 0, messege: 'User Data Not Fetch' });
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteData = async (req, res) => {
    try {
        let id = req.query.id;
        let deleteData = await registerTbl.findByIdAndDelete(id);
        if (deleteData) {
            return res.json({ status: 1, messege: 'User Data Delete' });
        }
        else {
            return res.json({ status: 0, messege: 'User Data Not Delete' });
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateData = async (req,res)=>{
    try{
        let updateData = await registerTbl.findByIdAndUpdate(req.body.id,{
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        });
        if(updateData)
        {
            return res.json({status : 1,messege : 'User Data Update'});
        }
        else{
            return res.json({status : 0,messege : 'User Data Not Update'});
        }
    }catch(err)
    {
        console.log(err);
        return false;
    }
}

const login = async(req,res)=>{
    try{
        let userLogin = await registerTbl.findOne({email : req.body.email});
        if(!userLogin || userLogin.password != req.body.password)
        {
            return res.json({status : 0,message : 'Email And Password not valid'});
        }
        let token = jwtData.sign({payload : userLogin},'APTLearn',{expiresIn : '1h'});
        return res.json({token : token});
    }catch(err)
    {
        console.log(err);
        return false;
    }
}

module.exports = {
    index,
    insertData,
    viewData,
    deleteData,
    updateData,
    login
}