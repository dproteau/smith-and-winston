'use strict';

var winston = require('winston');
var util = require('util');
var path = require('path');
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

  var fileOptions = util._extend(defaultFileOptions, options.fileOptions || {});
  var consoleOptions = util._extend(defaultConsoleOptions, options.consoleOptions || {});
  var colorOptions = util._extend(defaultColors, options.colorOptions || {});

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
