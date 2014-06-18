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
#### result.current
__Type:__ SemVer object  
__Content:__ current version (latest) on `registry.npmjs.org`

#### result.versions
__Type:__ Array  
__Content:__ current version (latest) on `registry.npmjs.org`

#### result.latestRelease
__Type:__ SemVer object (or null)  
__Content:__ latest clean `release` version on `registry.npmjs.org`

#### result.latestPreRelease
__Type:__ SemVer object (or null)  
__Content:__ latest `prerelease` or `build` version on `registry.npmjs.org`

## Examples
For instance:  
['0.0.0', '0.0.1-SNAPSHOT', '0.0.1', '0.0.2-alpha']  
Will result in:  
```js
var npmVersions = require('npm-vers');
npmVersions('foo', function (err, result) {
  if (err) {
    throw err;
  }
  
  // result.current = 0.0.2-alpha
  // result.versions = ['0.0.0', '0.0.1-SNAPSHOT', '0.0.1', '0.0.2-alpha']
  // result.latestRelease = 0.0.1
  // result.latestPreRelease = 0.0.2-alpha
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0 - 18/06/2014

## License
Copyright (c) 2014 Maxime Tricoire. Licensed under the MIT license.
