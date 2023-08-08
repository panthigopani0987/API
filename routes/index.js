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

routes.post('/insertCategory', passport.authenticate('jwt', { session: false }),CategoryController.insertCategory);

routes.get('/viewCategoryData', passport.authenticate('jwt', { session: false }), passport.authenticate('jwt', { session: false }),CategoryController.viewCategoryData);

routes.delete('/deleteCategoryData', passport.authenticate('jwt', { session: false }),CategoryController.deleteCategoryData);

routes.put('/updateCategoryData', passport.authenticate('jwt', { session: false }),CategoryController.updateCategoryData);

//Subcategory

routes.post('/insertSubCategory', passport.authenticate('jwt', { session: false }),SubCategoryController.insertSubCategory);

routes.get('/viewSubCategoryData', passport.authenticate('jwt', { session: false }),SubCategoryController.viewSubCategoryData);

routes.delete('/deleteSubCategoryData', passport.authenticate('jwt', { session: false }),SubCategoryController.deleteSubCategoryData);

routes.put('/updateSubCategoryData', passport.authenticate('jwt', { session: false }),SubCategoryController.updateSubCategoryData);

//product

routes.post('/insertProduct',fileupload, passport.authenticate('jwt', { session: false }),ProductController.insertProduct);

routes.get('/viewProduct', passport.authenticate('jwt', { session: false }),ProductController.viewProduct);

routes.delete('/deleteProduct', passport.authenticate('jwt', { session: false }),ProductController.deleteProduct);

routes.put('/updateProduct', passport.authenticate('jwt', { session: false }),fileupload,ProductController.updateProduct);

//addto cart

routes.post('/addtocart', passport.authenticate('jwt', { session: false }),AddToCartController.addtocart);    

routes.get('/viewaddToCart', passport.authenticate('jwt', { session: false }),AddToCartController.viewaddToCart);

routes.delete('/deleteAddToCart', passport.authenticate('jwt', { session: false }),AddToCartController.deleteAddToCart);

routes.put('/updateaddToCart', passport.authenticate('jwt', { session: false }),AddToCartController.updateaddToCart);

module.exports = routes;