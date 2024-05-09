const fsProm = require("fs").promises;
const url = require("url");
const path = require("path");
// handler for errors
const output500Error = (response) => {
response.writeHead(500, {"Content-Type": "text/html"});
response.write("<h1>500 Error</h1>\n");
response.write("Something went wrong with request\n");
response.end();
};
// maps file extention to MIME types
const mimeTypes = [
['.html', 'text/html'],
['.json', 'application/json'],
['.jpg', 'image/jpeg'],
['.svg', 'image/svg+xml']
];
const http = require("http");
const fs = require("fs");

const server = http.createServer( async (req, resp) => {
    ...
    // read the file
    try {
    const contents = await fsProm.readFile(localFile);
    // based on the URL path, extract the file extension
    const ext = path.parse(localFile).ext;
    // lookup mime type for this extension
    const mime = mimeTypes.find( m => m[0] == ext);
    // specify the mime type of file via header
    const header = { "Content-type": mime[1] || "text/plain" };
    resp.writeHead(200, header);
    // output the content of file
    resp.write(contents);
    resp.end();
    }
    catch {
    output500Error(resp);
    }