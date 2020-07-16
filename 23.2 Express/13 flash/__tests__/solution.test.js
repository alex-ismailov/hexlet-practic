import request from 'supertest';
import matchers from 'jest-supertest-matchers';

import solution from '../solution.js';

describe('requests', () => {
  beforeAll(() => {
    expect.extend(matchers);
  });

  it('GET /', async () => {
    const res = await request(solution())
      .get('/');
    expect(res).toHaveHTTPStatus(200);
  });

  it('GET /users/new', async () => {
    const res = await request(solution())
      .get('/users/new');
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST /users', async () => {
    const res = await request(solution())
      .post('/users')
      .type('form')
      .send({ nickname: 'nickname', password: 'qwer' });
    expect(res).toHaveHTTPStatus(302);
  });

  it('GET /session/new', async () => {
    const res = await request(solution())
      .get('/session/new');
    expect(res).toHaveHTTPStatus(200);
  });

  it('POST /session', async () => {
    const res = await request(solution())
      .post('/session')
      .type('form')
      .send({ nickname: 'admin', password: 'qwerty' });
    expect(res).toHaveHTTPStatus(302);
  });

  it('POST /session (errors)', async () => {
    const res = await request(solution())
      .post('/session')
      .type('form')
      .send({ nickname: 'admin', password: 'qwery' });
    expect(res).toHaveHTTPStatus(422);
  });

  it('DELETE /session', async () => {
    const app = solution();
    const authRes = await request(app)
      .post('/session')
      .type('form')
      .send({ nickname: 'admin', password: 'qwerty' });
    expect(authRes).toHaveHTTPStatus(302);
    const cookie = authRes.headers['set-cookie'];

    const res = await request(app)
      .delete('/session')
      .set('Cookie', cookie);
    expect(res).toHaveHTTPStatus(302);
  });
});
