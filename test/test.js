/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	readFile = require( './../lib' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'utils-fs-read-file', function tests() {

	it( 'should export a function', function test() {
		expect( readFile ).to.be.a( 'function' );
	});

	it( 'should export a function to read an entire file synchronously', function test() {
		expect( readFile.sync ).to.be.a( 'function' );
	});

});
