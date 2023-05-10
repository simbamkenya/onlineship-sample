const express = require('express')
const router = express.Router();
const { Category } = require('../models/category')
const _ = require('lodash')


//fetch categories
router.get('/', async (req, res) => {
  const categoryList = await Category.find();

  if (!categoryList) {
    return res.status(404).send('No categories found')
  }
  res.send(categoryList)
});

//fetch a specific category
router.get('/:id', async (req, res) => {
  const category = await Category.findById(req.params.id);

  if(!category) {
    return res.status(200).send('couldnt fetch the categoryy with given id')
  }

  return res.status(200).send(category);
})

//posting new product 
router.post('/', async (req, res) => {
  //validate 

  let category = new Category(_.pick(req.body, ['name', 'icon', 'color']));
  category = await category.save();

  if(!category) {
    return res.status(404).send('Category couldnt be created!')
  }
  
  res.send(category)
})

//updating category
router.put('/:id', async (req, res) => {
  const cagegory = Category.findOneAndUpdate(req.params.id, _.pick(req.body, ['name', 'icon', 'color']));

  if(!cagegory) {
    return res.status(200).send('Category with given id was not found');
  }

  return res.status(200).send('category is updated');
})

//deleting a category 
router.delete('/:id', async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);
  
  if(!category){
    return res.status(400).send('Category with given id is not deleted')
  }

  return  res.status(400).send(category);
})


module.exports = router;