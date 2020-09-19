const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs');
    next(); // allows req to continue to next middleware
});

app.use('/add-product', (req, res, next) => {
    console.log('in /add-product');
    res.send('<h1>Add product</h1>'); 
});

app.use('/', (req, res, next) => {
  console.log('in \'hello from express\'');
  res.send('<h1>Hello from Express</h1>'); 
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000)
