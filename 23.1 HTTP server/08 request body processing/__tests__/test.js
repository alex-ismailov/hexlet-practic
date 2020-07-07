import axios from 'axios';

import http from 'axios/lib/adapters/http';
import server from '../index.js';

/* this is my test patch */
axios.defaults.adapter = http;
/* ********************* */

const hostname = 'localhost';
const port = 9000;
const base = `http://${hostname}:${port}`;

describe('Phonebook', () => {
  it('/', (done) => {
    server(port, async (s) => {
      try {
        const res = await axios.get(base);
        expect(res.data).toBe('Welcome to The Phonebook\nRecords count: 1000');
        done();
      } catch (e) {
        done(e);
      } finally {
        s.close();
      }
    });
  });

  it('POST /users.json', async (done) => {
    const result = {
      data: {
        id: 1001,
        name: 'Tom',
        phone: '1234-234-234',
      },
      meta: {
        location: '/users/1001.json',
      },
    };

    const data = {
      name: 'Tom',
      phone: '1234-234-234',
    };
    server(port, async (s) => {
      try {
        const url = new URL('/users.json', base);
        const res = await axios.post(url.toString(), data);
        expect(res.status).toBe(201);
        expect(res.data).toEqual(result);

        const url2 = new URL('/users/1001.json', base);
        const res2 = await axios.get(url2.toString());
        expect(res2.status).toBe(200);
        expect(res2.data).toEqual({ data });
        done();
      } catch (e) {
        done(e);
      } finally {
        s.close();
      }
    });
  });

  it('POST /users.json (with errors)', async (done) => {
    const result = {
      errors: [
        {
          source: 'name',
          title: 'bad format',
        },
        {
          source: 'phone',
          title: "can't be blank",
        },
      ],
    };

    const data = {
      name: '$Tom',
      phone: '',
    };
    server(port, async (s) => {
      try {
        const url = new URL('/users.json', base);
        const res = await axios.post(url.toString(), data, { validateStatus: () => true });
        expect(res.status).toBe(422);
        res.data.errors.sort((a, b) => {
          if (a.source > b.source) {
            return 1;
          }
          if (a.source < b.source) {
            return -1;
          }
          return 0;
        });
        expect(res.data).toEqual(result);
        done();
      } catch (e) {
        done(e);
      } finally {
        s.close();
      }
    });
  });
});
