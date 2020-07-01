import request from 'supertest';
import matchers from 'jest-supertest-matchers';


import solution from '../solution.js';

describe('requests', () => {
  beforeAll(() => {
    expect.extend(matchers);
  });

  it('increment', async () => {
    const query = request(solution());
    const res1 = await query.get('/');
    expect(res1).toHaveHTTPStatus(200);
    expect(res1.body).toEqual({ value: 0 });

    const res2 = await query.post('/increment');
    expect(res2).toHaveHTTPStatus(204);

    await query.post('/increment');

    const res4 = await query.get('/');
    expect(res4.body).toEqual({ value: 2 });
  });

  it('decrement', async () => {
    const query = request(solution());
    const res1 = await query.get('/');
    expect(res1.body).toEqual({ value: 0 });

    const res2 = await query.post('/decrement');
    expect(res2).toHaveHTTPStatus(204);

    await query.post('/decrement');

    const res4 = await query.get('/');
    expect(res4.body).toEqual({ value: -2 });
  });

  it('set', async () => {
    const query = request(solution());
    const res1 = await query.get('/');
    expect(res1.body).toEqual({ value: 0 });

    const value1 = 8;
    const res2 = await query.put(`/set?value=${value1}`);
    expect(res2).toHaveHTTPStatus(204);

    const res3 = await query.get('/');
    expect(res3.body).toEqual({ value: value1 });

    const value2 = -1;
    await query.put(`/set?value=${value2}`);

    const res5 = await query.get('/');
    expect(res5.body).toEqual({ value: value2 });
  });

  it('reset', async () => {
    const query = request(solution());
    const res1 = await query.get('/');
    expect(res1.body).toEqual({ value: 0 });

    const value1 = 8;
    await query.put(`/set?value=${value1}`);

    const res3 = await query.delete('/reset');
    expect(res3).toHaveHTTPStatus(204);

    const res4 = await query.get('/');
    expect(res4.body).toEqual({ value: 0 });
  });
});
