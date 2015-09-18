Read File
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Reads the entire contents of a file.


## Installation

``` bash
$ npm install utils-fs-read-file
```


## Usage

``` javascript
var readFile = require( 'utils-fs-read-file' );
```

#### readFile( path, [ options,] clbk )

Reads the entire contents of a file.

``` javascript
readFile( __filename, onFile );

function onFile( error, data ) {
	if ( error ) {
		console.error( error );
	} else {
		console.log( data );
	}
}
```

The function accepts the same options as [`fs.readFile()`](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback).


#### readFile.sync( path[, options] )

Synchronously reads the contents of an entire file.

``` javascript
var out = readFile.sync( __filename );
if ( out instanceof Error ) {
	throw out;
}
console.log( out );
```

The function accepts the same options as [`fs.readFileSync()`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options).


## Notes

*	The difference between this module and [`fs.readFileSync()`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options) is that [`fs.readFileSync()`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options)will throw if an `error` is encountered (e.g., if given a non-existent `path`) and this module will return an `error`. Hence, the following anti-pattern

	``` javascript
	var fs = require( 'fs' );

	var file = '/path/to/file.js';

	// Check for existence to prevent an error being thrown...
	if ( fs.existsSync( file ) ) {
		file = fs.readFileSync( file );
	}
	```

	can be replaced by an approach which addresses existence via `error` handling.

	``` javascript
	var readFile = require( 'utils-fs-read-file' );

	var file = '/path/to/file.js';

	// Explicitly handle the error...
	file = readFile.sync( file );
	if ( file instanceof Error ) {
		// You choose what to do...
		throw file;
	}
	```


## Examples

``` javascript
var readFile = require( 'utils-fs-read-file' );

// Sync:
var file = readFile.sync( __filename, 'utf8' );
// returns <string>

console.log( file instanceof Error );
// returns false

file = readFile.sync( 'beepboop', {
	'encoding': 'utf8'
});
// returns <error>

console.log( file instanceof Error );
// returns true


// Async:
readFile( __filename, onFile );
readFile( 'beepboop', onFile );

function onFile( error, data ) {
	if ( error ) {
		if ( error.code === 'ENOENT' ) {
			console.error( 'File does not exist.' );
		} else {
			throw error;
		}
	} else {
		console.log( 'Success!' );
	}
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-fs-read-file.svg
[npm-url]: https://npmjs.org/package/utils-fs-read-file

[travis-image]: http://img.shields.io/travis/kgryte/utils-fs-read-file/master.svg
[travis-url]: https://travis-ci.org/kgryte/utils-fs-read-file

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/utils-fs-read-file/master.svg
[codecov-url]: https://codecov.io/github/kgryte/utils-fs-read-file?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-fs-read-file.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-fs-read-file

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-fs-read-file.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-fs-read-file

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-fs-read-file.svg
[github-issues-url]: https://github.com/kgryte/utils-fs-read-file/issues
