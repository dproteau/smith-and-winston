'use strict';

var winston = require('winston');
var util = require('util');
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

var Logger = function (options) {
  options = options || {};

  var fileOptions = util._extend(defaultFileOptions, options.fileOptions || {});
  var consoleOptions = util._extend(defaultConsoleOptions, options.consoleOptions || {});

  return new winston.Logger({
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
