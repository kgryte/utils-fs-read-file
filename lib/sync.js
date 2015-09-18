'use strict';

// MODULES //

var fs = require( 'fs' );


// READ FILE //

/**
* FUNCTION: readFileSync( path[, opts] )
*	Reads the entire contents of a file.
*
* @param {String} path - file path
* @param {Object|String} [opts] - function options
* @returns {Buffer|String|Error} file contents or an error
*/
function readFileSync( path, opts ) {
	var file;
	try {
		if ( arguments.length > 1 ) {
			file = fs.readFileSync( path, opts );
		} else {
			file = fs.readFileSync( path );
		}
	} catch ( err ) {
		return err;
	}
	return file;
} // end FUNCTION readFileSync()


// EXPORTS //

module.exports = readFileSync;
