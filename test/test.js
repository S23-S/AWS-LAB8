const request = require('supertest');
const app = require('../app');
require('should');

describe('GET /', () => {
  it('should return Hello, GitHub Actions!', async () => {
    const res = await request(app).get('/');
    res.text.should.equal('Hello, GitHub Actions!');
    res.statusCode.should.equal(200);
  });
});
