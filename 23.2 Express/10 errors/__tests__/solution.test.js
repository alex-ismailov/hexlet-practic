import request from 'supertest';
import matchers from 'jest-supertest-matchers';

import solution from '../solution.js';

const errorPageBody = '<!DOCTYPE html><html><head><title>HexletExercise</title></head><body><h3>Oops, page not found</h3></body></html>';

describe('requests', () => {
  const app = solution();

  beforeAll(() => {
    expect.extend(matchers);
  });

  it('GET /', async () => {
    const res = await request(app).get('/');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET /undefined', async () => {
    const res = await request(app).get('/undefined');
    expect(res).toHaveHTTPStatus(404);
    expect(res.text.split('\n').join('')).toBe(errorPageBody);
  });

  it('GET posts/:id', async () => {
    const res = await request(app).get('/posts/1');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET posts/:id 404', async () => {
    const res = await request(app).get('/posts/100');
    expect(res).toHaveHTTPStatus(404);
    expect(res.text.split('\n').join('')).toBe(errorPageBody);
  });
});
