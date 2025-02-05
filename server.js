var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); 
var port = 10000; 
app.listen(port);
console.log('Server listing on port: ' + port);