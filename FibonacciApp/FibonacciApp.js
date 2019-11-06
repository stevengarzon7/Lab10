var express = require('express');
var FibonacciService = require('./Services/FibonacciService')

var app = express();

app.get('/:nthIn', function (req, res) {
  var nth = FibonacciService.getNthNumberInSequence(parseInt(req.params.nthIn))
  res.send('The answer is ' + nth);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});