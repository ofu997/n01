const http = require('http')

http.createServer(
    (req, res) => {
        res.write('hello from the server')
        res.end();
    }
)
.listen(5000, () => console.log('server is running...'))
