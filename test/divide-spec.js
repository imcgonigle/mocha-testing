const chai = require('chai');
const supertest = require('supertest')

const app = require('../app.js');

const should = chai.should();
const api = supertest(app);


describe('Sending api POST to /api/divide', () => {
	describe('Should succeed', () => {
		it('in dividing two numbers', (done) => {
			api.post('/api/divide')
				.send({
					num1: 6,
					num2: 2
				})
				.expect(200)
				.end((err, res) => {
					if(err) return done(err);

					res.body.result.should.be.equal(3);

					done();
				});
		});
	});
});
