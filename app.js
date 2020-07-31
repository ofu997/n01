const http = require(`http`);
const fs = require('fs'); 

const server = http.createServer((req,res) => {
  const url = req.url;
  const method = req.method;
  if (url ==='/') {
  res.write(`<html>`)
  res.write(`<head><title>A page written in node</title></head>`)
  res.write(`<body><form action='/message' method='POST'><input type='text'><button type='submit'>Send</button></form></body>`)
  res.write(`</html>`) 
  return res.end();
}
if (url === '/message' && method === 'POST') {
  fs.writeFileSync('message.txt', 'dummy')
  res.statusCode = 302;
  res.setHeader('Location', '/')
  return res.end()
}
  res.setHeader('Content-type', 'text/html');
  res.write(`<html>`)
  res.write(`<head><title>A page written in node</title></head>`)
  res.write(`<body><h1>Hello from server</h1></body>`)
  res.write(`</html>`) 
  res.end();
});

// prevents exiting script
server.listen(3000);