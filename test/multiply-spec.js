const chai = require('chai');
const supertest = require('supertest')

const app = require('../app.js');

const should = chai.should();
const api = supertest(app);



describe('Sending POST to /api/multiply', () => {
	describe('Should succeed', () => {
		it('in multiplying two numbers together', (done) => {
			api.post('/api/multiply')
				.send({
					num1: 5,
					num2: 2
				})
				.expect(200)
				.end((err, res) => {
					if(err) return done(err);

					res.body.result.should.be.equal(10);

					done();
				});
		});
	});
});
