const http = require(`http`);
const { Http2ServerRequest } = require("http2");

function rqListener(req, res) {

}

// http.createServer(rqListener);

// http.createServer(function(req, res) {

// });

const server = http.createServer((req,res)=>{
  console.log(req.url, req.method, req.headers)
  res.setHeader('Content-Type', 'text/html');
  res.write(`<html>`)
  res.write(`<head><title>A page written in node</title></head>`)
  res.write(`<body><h1>Hello from server</h1></body>`)
  res.write(`</html>`) 
  res.end()
})

// prevents exiting script
server.listen(3000);