const subcategoryTbl = require('../models/subcategoryTbl');

const insertSubCategory = async(req,res)=>{
    try{
        const {categoryId,subcategory,status} = req.body;
        const insertSubCategory = await subcategoryTbl.create({
            categoryId : categoryId,
            subcategory : subcategory,
            status : status
        });
        if(insertSubCategory)
        {
            return res.json({status : 1,message : 'Sub Category Insert'});
        }
        else{
            return res.json({status : 1,message : 'Sub Category Not Insert'});
        }
    }catch(err)
    {
        console.log(err);
        return false;
    }
}

const viewSubCategoryData = async (req,res)=>{
    try{
        let viewData = await subcategoryTbl.find({}).populate('categoryId');
        if(viewData)
        {
            return res.json({status : 1,message : viewData});
        }
        else{
            return res.json({status : 0,message : 'Sub Category Data Not Fetch'});
        }
    }catch(err)
    {
        console.log(err);
        return false;
    }
}

const deleteSubCategoryData = async(req,res)=>{
    try{
        let id = req.query.id;
        let deleteCategory = await subcategoryTbl.findByIdAndDelete(id);
        if(deleteCategory)
        {
            return res.json({status : 1,message : 'Sub Category Delete'});
        }
        else{
            return res.json({status : 0,message : 'Sub Category Not Delete'});
        }
    }catch(err)
    {
        console.log(err);
        return false;
    }
}

const updateSubCategoryData = async (req,res)=>{
    try{
        const {id,categoryId,subcategory,status} = req.body;
        let updateCategory = await subcategoryTbl.findByIdAndUpdate(id,{
            categoryId : categoryId,
            subcategory : subcategory,
            status : status,
        })
        if(updateCategory)
        {
            return res.json({status : 1,message : 'Sub Category Update'});
        }
        else{
            return res.json({status : 0,message : 'Sub Category Not Update'});
        }
    }catch(err)
    {
        console.log(err);
        return false;
    }
}

module.exports = {
    insertSubCategory,
    deleteSubCategoryData,
    viewSubCategoryData,
    updateSubCategoryData
}