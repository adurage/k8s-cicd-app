const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World V2!\n');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
