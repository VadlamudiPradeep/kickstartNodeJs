const http = require('http');

let server = http.createServer((req ,res)=>{
console.log(req );
console.log('vandlamudi pradeep')
});
server.listen(4000);