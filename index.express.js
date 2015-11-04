#!/usr/bin/env node

var express    = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(function (req, res, next) {
  console.log('\n\n');
  console.log(req.url);
  console.log(req.body); // populated!
  next();
})

app.get('/', function(req, res, next){
	console.log('REQ', new Date());
	res.end('Hello world.\n');
});

var server = app.listen(1394, function() {
	console.log('Listening...');
});
