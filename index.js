'use strict';

var winston = require('winston');
var path = require('path');
var defaults = require('lodash.defaults');
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

  var fileOptions = defaults(Object.create(options.file || {}), defaultFileOptions);
  var consoleOptions = defaults(Object.create(options.console || {}), defaultConsoleOptions);
  var colorOptions = defaults(Object.create(options.colors || {}), defaultColors);

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
