const http = require('http');

const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    if (url[1] === '') {
        if (request.method === 'GET') {
            response.end("Hello Galvenize");
        }
    }
    response.statusCode = 404;
    response.end();
});

PORT = 3000
server.listen(PORT, "localhost", () => {
    console.log(`Server running at ${PORT}`);
});