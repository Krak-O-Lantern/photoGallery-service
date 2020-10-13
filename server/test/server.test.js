/* eslint-disable no-undef */
require('regenerator-runtime');
const supertest = require('supertest');
const app = require('../app.js');

const request = supertest(app);
describe('Server Test Suite', () => {
  it('should handle a GET request for one listing from /api/images/1', async (done) => {
    const res = await request.get('/api/images/1');
    expect(res.body.listing_id).toBe(1);
    expect(res.status).toBe(200);
    done();
  });
});
