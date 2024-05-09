const http = require('http');
// Create HTTP server to respond with simple message to all requests
const server = http.createServer( (request, response) => {
    console.log("request from " + request.url);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html><body>Hello again, this time as ");
    response.write("<strong>HTML</strong></body></html>");
    response.end();
    });

    console.log("dirname = " + __dirname);
console.log("filename = " + __filename);