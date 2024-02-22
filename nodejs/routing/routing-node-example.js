const http = require('http')

const port = 3000

const server = http.createServer((req,res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    switch (path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('Homepage')
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('About')
            break;           
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('Not Found')
            break;   
    }
})

server.listen(port, () => {
    console.log('Server running on port ' + port);
})
