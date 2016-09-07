const chai = require('chai');

const should = chai.should();

describe('Canary test', () => {
    it('the string hello should be hello', () => {
        const hello = 'hello';

        hello.should.be.equal('hello')
    });

    it('typeof string should be string', () => {
        const string = 'this is a string';

        string.should.be.a('string');
    })
});
