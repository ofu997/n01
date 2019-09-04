const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1 style="color: #009000; background-color: #d8ffd8; text-shadow: 2px 2px 4px #b1b1ff; padding: 10px; border: 1px solid #5593c6;">Homepage</h1>')
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))