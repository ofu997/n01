const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('in /add-product');
    res.send(`<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add product</form>`); 
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

module.exports = router; 