// Importo, tramite sintassi CommonJS, il modulo expect di CHAI per l'esecuzione del test.
var expect = require('chai').expect
// Importo tutti gli script esportati dal file index.js in ../Mutations
var mutationLibrary = require('../Mutations');

describe('Mutation Library Scripts', function() {
	describe('Using mutations with filter function', function() {
		it('should return true', function() {
			expect(mutationLibrary.mutations(["hello", "hellloooooooo"])).to.equal(true);
		});
		it('should return false', function() {
			expect(mutationLibrary.mutations(["hello", "hey"])).to.equal(false);
		});
	});

	describe('Using mutations variante01 with some function', function() {
		it('should return true if every elements is in the first array', function() {
			expect(mutationLibrary.v01(["hello", "hellloooooooo"])).to.equal(true);
		});
		it('should return false if any elements is not in the first array', function() {
			expect(mutationLibrary.v01(["hello", "hey"])).to.equal(false);
		});
	});

	describe('Using mutations variante02 with every function', function() {
		it('should return true if every elements is in the first array', function() {
			expect(mutationLibrary.v02(["hello", "hellloooooooo"])).to.equal(true);
		});
		it('should return false if any elements is not in the first array', function() {
			expect(mutationLibrary.v02(["hello", "hey"])).to.equal(false);
		});
	});

	

});