const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return Hello, GitHub Actions!', async () => {
    const res = await request(app).get('/');
    res.text.should.equal('Hello, GitHub Actions!');
  });
});
