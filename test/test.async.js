/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	fs = require( 'fs' ),
	readFile = require( './../lib/async.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'async', function tests() {

	it( 'should export a function', function test() {
		expect( readFile ).to.be.a( 'function' );
	});

	it( 'should be an alias for `fs.readFile`', function test() {
		assert.strictEqual( readFile, fs.readFile );
	});

});
