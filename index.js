'use strict';

var path = require('path');
var winston = require('winston');
var defaults = require('lodash.defaults');
var defaultOptions = require('./lib/defaultOptions.js');
winston.emitErrs = true;


var Logger = function (options) {
  var winstonOptions = {
    transports: [],
    exitOnError: false
  };

  // Merging default and custom options
  // TODO : Improve default object handling, we can do better than this
  options = options || {};
  var fileOptions = getExtendedObject(options.file, defaultOptions.file);
  var consoleOptions = getExtendedObject(options.console, defaultOptions.console);
  var colorOptions = getExtendedObject(options.colors, defaultOptions.colors);

  if (fileOptions) {
    fileOptions.filename = path.resolve(fileOptions.filename);
    winstonOptions.transports.push(new winston.transports.File(fileOptions));
  }
  if (consoleOptions) {
    winstonOptions.transports.push(new winston.transports.Console(consoleOptions));
  }
  if (colorOptions) {
    winstonOptions.colors = colorOptions;
  }

  return new winston.Logger(winstonOptions)
};

function getExtendedObject (dest, source) {
  if (dest === null) {
    return null;
  }

  var result = Object.create(dest || {});
  result = defaults(result, source);

  return result;
}

module.exports = Logger;

