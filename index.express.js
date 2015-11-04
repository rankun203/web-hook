#!/usr/bin/env node

var express = require('express');
var bodyParser = require('body-parser');
var exec = require('child_process').exec;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(function (req, res, next) {
  console.log('\n\n');
  console.log(req.url);
  console.log(req.body); // populated!
  next();
});

app.get('/', function (req, res, next) {
  console.log('REQ', new Date());

  doAfter(req.body);

  res.end('Hello world.\n');
});

var server = app.listen(1394, function () {
  console.log('Listening...');
});

function doAfter(data) {
  console.log('doAfter data');
  var repo = data.repository;
  var commits = data.commits;

  if (!repo || !commits) {
    return;
  }

  console.log('repo === youdar?');
  if (repo.name === 'youdar' && commits.length > 0) {
    return updateYoudarNet();
  }
}

function updateYoudarNet() {
  var cmd = 'cd /usr/share/nginx/html/next.youdar.net/youdar && git pull origin master';

  console.log('execute cmd:', cmd);
  return exec(cmd, function (error, stdout, stderr) {
    console.log(cmd, stdout, stderr);
  });
}