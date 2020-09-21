const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('in /');
    res.send(`<h1>Hello from front page</h1>`); 
});



module.exports = router; 