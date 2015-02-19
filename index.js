'use strict';

var path = require('path');
var winston = require('winston');
var defaults = require('lodash.defaults');
var defaultOptions = require('./lib/defaultOptions.js');
winston.emitErrs = true;


var Logger = function (options) {
  options = options || {};

  var fileOptions = defaults(Object.create(options.file || {}), defaultOptions.file);
  var consoleOptions = defaults(Object.create(options.console || {}), defaultOptions.console);
  var colorOptions = defaults(Object.create(options.colors || {}), defaultOptions.colors);

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
