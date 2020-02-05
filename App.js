const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');//file handler for html files
const calc = require('./calculator');//zelfgemaakte module

console.log(calc.Som(5,7)); //zelfgemaakte module call

//create a server object:
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if(req.url === '/nodeserver'){ //routing
    fs.readFile('index.html', function(error, data){
      if(error){
        res.writeHead(404);
        res.writeHead('Error: File not found');
      }else{
        res.write(data);
      }
      res.end(); //end the response
    });
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); //the server object listens on port 3000