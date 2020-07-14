import Express from 'express';
import request from 'supertest';
import matchers from 'jest-supertest-matchers';

import solution from '../solution.js';

const app = new Express();
app.use(solution);
app.get('/', (req, res) => res.json(req.useragent));

describe('requests', () => {
  beforeAll(() => {
    expect.extend(matchers);
  });

  it('Default', async () => {
    const res = await request(app).get('/');
    expect(res).toHaveHTTPStatus(200);
    expect(res.body.ua).toBe('node-superagent/3.8.3');
  });

  it('Chrome', async () => {
    const res = await request(app)
      .get('/')
      .set('User-Agent', 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19');
    expect(res).toHaveHTTPStatus(200);

    const useragent = res.body;
    expect(useragent.browser.name).toBe('Chrome');
    expect(useragent.os.name).toBe('Android');
  });

  it('Firefox', async () => {
    const res = await request(app)
      .get('/')
      .set('User-Agent', 'Mozilla/5.0 (Macintosh; PPC Mac OS X x.y; rv:10.0) Gecko/20100101 Firefox/10.0');
    expect(res).toHaveHTTPStatus(200);

    const useragent = res.body;
    expect(useragent.browser.name).toBe('Firefox');
    expect(useragent.os.name).toBe('Mac OS');
  });
});
