import request from 'supertest';
import matchers from 'jest-supertest-matchers';

import solution from '../solution.js';

describe('requests', () => {
  beforeAll(() => {
    expect.extend(matchers);
  });

  test('GET /', async () => {
    const res = await request(solution()).get('/');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET /posts', async () => {
    const res = await request(solution()).get('/posts');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET /posts/new', async () => {
    const res = await request(solution())
      .get('/posts/new');
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST /posts', async () => {
    const res = await request(solution())
      .post('/posts')
      .type('form')
      .send({ title: 'post title', body: 'post body' });
    expect(res).toHaveHTTPStatus(302);
  });

  it('POST /posts (errors)', async () => {
    const res = await request(solution())
      .post('/posts');
    expect(res).toHaveHTTPStatus(422);
  });

  it('GET /posts/:id', async () => {
    const query = request(solution());
    const res1 = await query
      .post('/posts')
      .type('form')
      .send({ title: 'post title', body: 'post body' });
    const res2 = await query.get(res1.headers.location);
    expect(res2).toHaveHTTPStatus(200);
  });
});
