const http = require(`http`);

// custom route
const routes = require('./routes');

const server = http.createServer(routes);

// prevents exiting script
server.listen(3000);


