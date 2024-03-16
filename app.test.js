const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return "Hello World"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe(process.env.HELLO);
  });
});

describe('GET /user', () => {
  it('should return user information', async () => {
    const response = await request(app).get('/user');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({name: process.env.NAME, age: process.env.AGE});
  });
});
