const categoryTbl = require('../models/categoryTbl');

const insertCategory = async(req,res)=>{
    try{
        const {category,status} = req.body;
        const insertCategory = await categoryTbl.create({
            category : category,
            status : status
        });
        if(insertCategory)
        {
            return res.json({status : 1,message : 'Category Insert'});
        }
        else{
            return res.json({status : 1,message : 'Category Not Insert'});
        }
    }catch(err)
    {
        console.log(err);
        return false;
    }
}

const viewCategoryData = async (req,res)=>{
    try{
        let viewData = await categoryTbl.find({});
        if(viewData)
        {
            return res.json({status : 1,message : viewData});
        }
        else{
            return res.json({status : 0,message : 'Category Data Not Fetch'});
        }
    }catch(err)
    {
        console.log(err);
        return false;
    }
}

const deleteCategoryData = async(req,res)=>{
    try{
        let id = req.query.id;
        let deleteCategory = await categoryTbl.findByIdAndDelete(id);
        if(deleteCategory)
        {
            return res.json({status : 1,message : 'Category Delete'});
        }
        else{
            return res.json({status : 0,message : 'Category Not Delete'});
        }
    }catch(err)
    {
        console.log(err);
        return false;
    }
}

const updateCategoryData = async (req,res)=>{
    try{
        const {id,category,status} =req.body;
        let updateCategory = await categoryTbl.findByIdAndUpdate(id,{
            category : category,
            status : status,
        })
        if(updateCategory)
        {
            return res.json({status : 1,message : 'Category Update'});
        }
        else{
            return res.json({status : 0,message : 'Category Not Update'});
        }
    }catch(err)
    {
        console.log(err);
        return false;
    }
}

module.exports = {
    insertCategory,
    deleteCategoryData,
    viewCategoryData,
    updateCategoryData
}