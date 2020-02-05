var http = require('http');

http.createServer(function (req, res) {
  res.write('my first node server');
  res.end();
}).listen(80);
