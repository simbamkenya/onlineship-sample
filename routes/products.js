const express = require('express');
const router = express.Router();
const { Product } = require('../models/product');
const _ = require('lodash');
const { Category } = require('../models/category');

router.get('/', async (req, res) => {
   const productList = await Product.find();
   
   if(!productList) {
      return res.status(200).send('No products in the database')
   }

   res.send(productList)
})

//create a product
router.post('/', async (req, res) => {
   const productCategory = await Category.findById(req.body.category);
   if(!productCategory) {
      return res.status(200).send('invalid category')
   }

   let product = new Product(req.body, 
      _.pick('richDescription', 'image', 'brand', 'price', 'rating',
      'numReviews', 'isFeatured', 'name', 'description', 'category', 'countInStock'));

   if(!product) {
      return res.status(200).send('product was not saved!')
   }
   product = await product.save();
   
   res.send(product)
});



//get a single product
router.get('/:id', async (req, res) => {
   const product = await Product.findById(req.params.id).populate('category');
   if(!product) {
      return res.status(200).send('product with given id was not found')
   }

   res.send(product);
})

//delete a product
router.delete('/:id', async (req, res) => {
   const product = await Product.findByIdAndRemove(req.params.id);
   if(!product){
      return res.status(200).send('product with given id was not deleted')
   }

   res.send(product)
})

//update a product
router.put('/:id', async (req, res) => {
   const category = await Category.findById(req.body.category);
   if(!category){
      res.status(200).send('invalid category')
   }
   let product = new Product(req.body, _.pick(req.body, 
      _.pick('richDescription', 'image', 'brand', 'price', 'rating',
      'numReviews', 'isFeatured', 'name', 'description', 'category', 'countInStock')));
   
   product = await product.save();
   if(!product) {
      res.status(200).send('product was not updated')
   }

   res.send(product);
})

module.exports = router;
