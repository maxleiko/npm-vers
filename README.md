# npm-vers [![Build Status](https://secure.travis-ci.org/maxleiko/npm-vers.png?branch=master)](http://travis-ci.org/maxleiko/npm-vers)

Retrieve all versions from a module with helper to get the latestRelease and latestPreRelease

## Getting Started
Install the module with: `npm install npm-vers`

```javascript
var npmVersions = require('npm-vers');
npmVersions('npmi', function (err, result) {
  if (err) {
    throw err;
  }
  
  console.log(result);
});
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Maxime Tricoire. Licensed under the MIT license.
