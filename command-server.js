#!/usr/bin/env node
/**
 * Created on 12/5/15.
 * @author rankun203
 */


var express    = require('express');
var bodyParser = require('body-parser');
var exec       = require('child_process').exec;
var log        = require('log4js').getLogger('command-server');
var commands   = require('./commands');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.get('/c/:cid', function (req, res, next) {
  var cid = req.params.cid;

  var filteredCommands = commands.filter(function (command) {
    return command.id === cid
  });
  if (filteredCommands.length === 0) {
    next();
  }

  var command = filteredCommands[0];

  log.debug('execute cmd: id=', command.id, 'command=', command.command);
  exec(command.command, function (error, stdout, stderr) {
    if (error) log.error('error', error);

    log.debug(stdout);
    log.debug(stderr);
  });

  return res.status(200).json({
    code: 0,
    msg: 'Executing...',
    command: command
  });
});


// 404
app.use(function (req, res, next) {
  res.status(404);
  res.json({
    code: -1,
    msg: '404'
  });
});


var port   = 1394;
var server = app.listen(port, function () {
  log.debug('Listening... :', port);
});

