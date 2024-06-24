require('dotenv').config();
let port = process.env.PORT;
const http = require('http')


http.createServer(function(req,res){
     res.writeHead(200, {'Content-Type': 'text/html'})
     res.end('<h2 style="text-align: center;">Hello World</h2>');
}).listen(port);

