/* Built-in Modules 
- OS (Operating system)
- PATH (file path)
- FS (file system)
- HTTP (hypertext tranfer protocol) */

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`);
}) // los paremetros son request y respond (son las practicas normales)

server.listen(5000);