'use strict';

var defaultFileOptions = {
  level: 'warn',
  filename: './logs/app.log',
  handleExceptions: true,
  json: true,
  maxsize: 5242880, //5MB
  maxFiles: 5,
  colorize: false
};

var defaultConsoleOptions = {
  level: 'debug',
  timestamp: true,
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

module.exports = {
  colors: defaultColors,
  console: defaultConsoleOptions,
  file: defaultFileOptions
};