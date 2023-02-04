const http = require('http');

let server = http.createServer((req ,res)=>{
let url = req.url;
if(url === '/home'){
    res.setHeader('content-Type', 'text/html' );
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Welcome Home</h1></body>');
res.write('<html>');
return res.end();
}
else if(url === '/about'){
    res.setHeader('content-Type', 'text/html' );
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Welcome to About us Page</h1></body>');
res.write('<html>');
return res.end();
}
if(url === '/node'){
    res.setHeader('content-Type', 'text/html' );
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Welcome to my NodeJs Project</h1></body>');
res.write('<html>');
return res.end();
}
res.setHeader('content-Type', 'text/html' );
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello from myy NodeJs Server !!</h1></body>');
res.write('<html>');
res.end();
});
server.listen(4000);