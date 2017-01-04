// Importo, tramite sintassi CommonJS, il modulo expect di CHAI per l'esecuzione del test.
var expect = require('chai').expect
// Importo tutti gli script esportati dal file index.js in ../Reverse String
var reverseStringLibrary = require('../Reverse String');

describe('Reverse String Library Scripts', function() {
	describe('Using reverseString', function() {
		it('should return olleh', function() {
			expect(reverseStringLibrary.reverseString('hello')).to.equal('olleh');
		});
	});

});