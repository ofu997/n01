const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    console.log('This always runs');
    next(); // allows req to continue to next middleware
});

app.use('/add-product', (req, res, next) => {
    console.log('in /add-product');
    res.send(`<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add product</form>`); 
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

app.use('/', (req, res, next) => {
  console.log('in \'hello from express\'');
  res.send('<h1>Hello from Express</h1>'); 
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000)
