//Student Name: Adam Vandyke
//Student Num: 101023594

var calculation = require('../app/calculator');
var chai = require('chai');
var expect = chai.expect;


describe('Calculator Testing', function () {
	it('Addition', () => {
		expect(calculation.add(5, 2)).to.be.equal(7, 'PASS');
		//expect(calculation.add(5, 2)).to.be.equal(5, 'FAIL');
	});
    it('Subtraction', () => {
		expect(calculation.sub(5, 2)).to.be.equal(3, 'PASS');
		//expect(calculation.sub(5, 2)).to.be.equal(25, 'FAIL');
	});
    it('Multiplication', () => {
		expect(calculation.mul(5, 2)).to.be.equal(10, 'PASS');
		//expect(calculation.mul(5, 2)).to.be.equal(15, 'FAIL');
	});
	it('Division', () => {
		expect(calculation.div(10, 2)).to.be.equal(5, 'PASS');
		//expect(calculation.div(10, 2)).to.be.equal(2, 'FAIL');
	});
});