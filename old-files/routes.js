const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method; 
  if (url ==='/') {
      res.write(`<html>`)
      res.write(`<head><title>A page written in node</title></head>`)
      // form sends input data to request body. { message: input.value }
      res.write(`<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>`)
      res.write(`</html>`) 
      return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk); 
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody); 
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message, err => {
          res.statusCode = 302;
          res.setHeader('Location', '/')
          return res.end()
      });
    });
  }
  res.setHeader('Content-type', 'text/html');
  res.write(`<html>`)
  res.write(`<head><title>A page written in node</title></head>`)
  res.write(`<body><h1>Hello from server</h1></body>`)
  res.write(`</html>`) 
  res.end(); 
}

module.exports = requestHandler;

// variations
// module.exports = {
//   handler: requestHandler,
//   someText: 'some hard-coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard-coded';

// exports.handler = requestHandler;
// exports.someText = 'some hard-coded'; 

// handle two routes: / and users
// return some greeting text on /
// return a list of dummy users 
// add a form with a username input to the / page and submit a post request to /create-user upon a button click 
// add the /create-user route and parse the incoming data and log it to console

// const fs = require('fs');

// const requestHandler = (req, res) => {
//   const url = req.url;
//   const method = req.method; 
//   if (url ==='/') {
//       res.write(`<html>`)
//       res.write(`<head><title>A page written in node</title></head>`)
//       res.write(`<h1>greetings</h1>`);
//       res.write(`<body><form action='/create-user' method='POST'><h6>username</h6><input type='text' name='user'><button type='submit'>Send</button></form></body>`)
//       res.write(`</html>`) 
//       return res.end();
//   }
//   if (url === '/users') {
//     res.write(`<html>`);
//     res.write(`<ol><li>User</li></ol>`);
//     res.write(`</html>`);
//     return res.end();
//   }
//   if (url === '/create-user' && method === 'POST') {
//     const body = [];
//     req.on('data', chunk => {
//       console.log(chunk);
//       body.push(chunk); 
//     });
//     req.on('end', () => {
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(`parsedbody: ${parsedBody}`); 
//       const user = parsedBody.split('=')[1];
//       console.log(`user: ${user}`);
//     });
//     res.statusCode = 302;
//     res.setHeader('Location', '/');
//     res.end(); 
//   }
// }

// module.exports = requestHandler;