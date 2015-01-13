'use strict';

var winston = require('winston');
var path = require('path');
var _ = require('lodash');
winston.emitErrs = true;


var defaultFileOptions = {
  level: 'info',
  filename: './logs/mainlog.log',
  handleExceptions: true,
  json: true,
  maxsize: 5242880, //5MB
  maxFiles: 5,
  colorize: false
};

var defaultConsoleOptions = {
  level: 'debug',
  handleExceptions: true,
  json: false,
  colorize: true
};

var defaultColors = {
  debug: 'cyan',
  info: 'green',
  warn: 'yellow',
  error: 'red'
};

var Logger = function (options) {
  options = options || {};

  var fileOptions = _.extend(defaultFileOptions, options.file || {});
  var consoleOptions = _.extend(defaultConsoleOptions, options.console || {});
  var colorOptions = _.extend(defaultColors, options.colors || {});

  fileOptions.filename = path.resolve(fileOptions.filename);

  return new winston.Logger({
    colors: colorOptions,
    transports: [
      new winston.transports.File(fileOptions),
      new winston.transports.Console(consoleOptions)
    ],
    exitOnError: false
  })
};

module.exports = Logger;
/*
module.exports.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
};
*/
