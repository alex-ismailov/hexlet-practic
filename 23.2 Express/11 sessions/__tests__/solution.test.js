import request from 'supertest';
import matchers from 'jest-supertest-matchers';

import solution from '../solution.js';

describe('requests', () => {
  beforeAll(() => {
    expect.extend(matchers);
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
    const query = request(solution());
    const data = { nickname: 'nickname', password: 'qwer' };

    const res = await query
      .post('/users')
      .type('form')
      .send(data);
    expect(res).toHaveHTTPStatus(302);

    const res2 = await query
      .post('/session')
      .type('form')
      .send(data);
    expect(res2).toHaveHTTPStatus(302);

    const res3 = await query
      .post('/session')
      .type('form')
      .send({});
    expect(res3).toHaveHTTPStatus(422);
  });
});
