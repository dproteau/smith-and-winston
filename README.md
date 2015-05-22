# smith-and-winston

Smith and Winston is a wrapper around Winston aiming to reduce configuration code.

Its goal is to provide a logger properly configured to my needs without great ceremony.  With the default configuration, we output to the console string messages (debug level) and write to a flat file json messages (info level).

## Installation
```bash
$ npm install smith-and-winston --save
```

## Usage

Simply:
```javascript
var Smith = require('smith-and-winston');

var winston = new Smith();
```

Hum... the app log file is too small and needs a new home:
```javascript
var Smith = require('smith-and-winston');

var options = {file: {
                  filename: '/var/log/myGreatApp/main.log',
                  maxsize: 26214400  //25MB
              }}
var winston = new Smith(options);
```
## Defaults

Defaults are everything to Smith and Winston.  Here is the basic structure:
```javascript
{
  file: {},
  console: {},
  colors: {}
}
```

Default file options:
```javascript
{
  level: 'info',
  filename: './logs/app.log',
  handleExceptions: true,
  json: true,
  maxsize: 5242880, //5MB
  maxFiles: 5,
  colorize: false
}
```

Default console options:
```javascript
{
  level: 'debug',
  timestamp: true,
  handleExceptions: true,
  json: false,
  colorize: true
}
```

Default colors:
```javascript
{
  debug: 'cyan',
  info: 'green',
  warn: 'yellow',
  error: 'red'
}
```


## Licence

MIT. See "LICENSE.MIT".

## Credits
- [Winston] (https://github.com/winstonjs/winston) and to all its contributors
- Ugo Lattanzi [Advanced logging with NodeJs] (http://tostring.it/2014/06/23/advanced-logging-with-nodejs/)

