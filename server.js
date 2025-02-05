/*var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); 
var port = 10000; 
app.listen(port);
console.log('Server listing on port: ' + port);*/

const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})