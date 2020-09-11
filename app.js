const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware')
    next(); // allows req to continue to next middleware
});

app.use((req, res, next) => {
    console.log('in the 2nd middleware')
    res.send('<h1>Hello from Express</h1>'); 
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000)