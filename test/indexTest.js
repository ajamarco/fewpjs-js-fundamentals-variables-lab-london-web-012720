const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

describe('index.js', function () { //describe where the test is gonna take place - index.js
  describe('companyName', function () { //these tests will be about 'companyName'
    it('is set as Scuber', function () { //companyName should be set as a Scuber
      expect(companyName).to.equal('Scuber'); // this line is equal companyName == Scuber
    });

    it('is defined as a const', function () {
      expect(js).to.match(/const companyName/, "Expected companyName to be a const");
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('does not raise error if the mostProfitableNeighborhood is changed', function () {
      expect(function () { mostProfitableNeighborhood = 'Upper West Side' }).to.not.throw(TypeError);
    });

    it('is not defined as a const', function () {
      expect(js).not.to.match(/const mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood not to be a const");
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('does not raise error if the companyCeo is changed', function () {
      expect(function () { companyCeo = 'Lauren Hart' }).to.not.throw(TypeError);
    });

    it('is not defined as a const', function () {
      expect(js).not.to.match(/const companyCeo/, "Expected companyCeo not to be a const");
    });
  });
});
