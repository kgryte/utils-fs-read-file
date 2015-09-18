/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	fs = require( 'fs' ),
	readFile = require( './../lib/sync.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'sync', function tests() {

	it( 'should export a function', function test() {
		expect( readFile ).to.be.a( 'function' );
	});

	it( 'should read a file', function test() {
		var expected,
			actual;

		expected = fs.readFileSync( __filename );
		actual = readFile( __filename );

		assert.deepEqual( expected, actual );
	});

	it( 'should read a file using provided options', function test() {
		var expected,
			actual;

		// String options:
		expected = fs.readFileSync( __filename, 'utf8' );
		actual = readFile( __filename, 'utf8' );

		assert.strictEqual( expected, actual );

		// Object options:
		expected = fs.readFileSync( __filename, {
			'encoding': 'utf8'
		});
		actual = readFile( __filename, {
			'encoding': 'utf8'
		});

		assert.strictEqual( expected, actual );
	});

	it( 'should return an error', function test() {
		var out = readFile( 'beepboopbapbop' );

		assert.isTrue( out instanceof Error );
	});

	it( 'should return an error (options)', function test() {
		var out;

		out = readFile( 'beepboopbapbop', 'utf8' );
		assert.isTrue( out instanceof Error );


		out = readFile( 'beepboopbapbop', {
			'encoding': 'utf8'
		});
		assert.isTrue( out instanceof Error );
	});

});
