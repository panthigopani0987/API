const express = require('express');

const passport = require('passport');

const routes = express.Router();

const fileupload = require('../config/fileupload');

const adminController = require('../controllers/adminController');

const CategoryController = require('../controllers/CategoryController');

const SubCategoryController = require('../controllers/SubCategoryController');

const ProductController = require('../controllers/ProductController');

const AddToCartController = require('../controllers/AddToCartController');

//login and register

routes.get('/', adminController.index);

routes.post('/insertData', adminController.insertData);

routes.get('/viewData', passport.authenticate('jwt', { session: false }), adminController.viewData);

routes.delete('/deleteData', adminController.deleteData);

routes.put('/updateData', adminController.updateData);

routes.post('/login', adminController.login);

//category

routes.post('/insertCategory',CategoryController.insertCategory);

routes.get('/viewCategoryData', passport.authenticate('jwt', { session: false }),CategoryController.viewCategoryData);

routes.delete('/deleteCategoryData',CategoryController.deleteCategoryData);

routes.put('/updateCategoryData',CategoryController.updateCategoryData);

//Subcategory

routes.post('/insertSubCategory',SubCategoryController.insertSubCategory);

routes.get('/viewSubCategoryData', passport.authenticate('jwt', { session: false }),SubCategoryController.viewSubCategoryData);

routes.delete('/deleteSubCategoryData',SubCategoryController.deleteSubCategoryData);

routes.put('/updateSubCategoryData',SubCategoryController.updateSubCategoryData);

//product

routes.post('/insertProduct',fileupload,ProductController.insertProduct);

routes.get('/viewProduct', passport.authenticate('jwt', { session: false }),ProductController.viewProduct);

routes.delete('/deleteProduct',ProductController.deleteProduct);

routes.put('/updateProduct',fileupload,ProductController.updateProduct);

//addto cart

routes.post('/addtocart',AddToCartController.addtocart);    

routes.get('/viewaddToCart',AddToCartController.viewaddToCart);

routes.delete('/deleteAddToCart',AddToCartController.deleteAddToCart);

routes.put('/updateaddToCart',AddToCartController.updateaddToCart);

module.exports = routes;