'use strict';

var defaultFileOptions = Object.freeze({
  level: 'info',
  filename: './logs/app.log',
  handleExceptions: true,
  json: true,
  maxsize: 5242880, //5MB
  maxFiles: 5,
  colorize: false
});

var defaultConsoleOptions = Object.freeze({
  level: 'debug',
  timestamp: true,
  handleExceptions: true,
  json: false,
  colorize: true
});

var defaultColors = Object.freeze({
  debug: 'cyan',
  info: 'green',
  warn: 'yellow',
  error: 'red'
});

module.exports = {
  colors: defaultColors,
  console: defaultConsoleOptions,
  file: defaultFileOptions
};