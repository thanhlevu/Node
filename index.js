console.log('hello there');

var express = require('express')
var app = express()
 
app.get('/', (req, res) => {
  res.send('Hello World')
})
 
app.listen(5000);
