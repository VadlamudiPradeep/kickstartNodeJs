const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
  
    fs.readFile('message.txt' ,{encoding :"utf-8"} ,(err , data)=>{
     if(err){
      console.log(err);
     }else{
      console.log('data' + data);
     }
      res.write('<html>');
      res.write('<head><title>Enter Message</title></head>');
      res.write(`<body><h1>${data}</h1></body>`)
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
      );
      res.write('</html>');
      return res.end();
    });

  }
  
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
};



exports.handler = requestHandler;
exports.someText = 'Some hard coded text';