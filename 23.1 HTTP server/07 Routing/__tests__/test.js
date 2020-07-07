import axios from 'axios';

import server from '../index.js';

/* this is my test patch */
import http from 'axios/lib/adapters/http';
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

  it('/users/<id>', async (done) => {
    const result = {
      data: {
        name: 'Mrs. Marlee Lesch',
        phone: '(412) 979-7311',
      },
    };

    server(port, async (s) => {
      try {
        const url = new URL('/users/9.json', base);
        const res = await axios.get(url.toString());
        expect(res.status).toBe(200);
        expect(res.data).toEqual(result);
        done();
      } catch (e) {
        done(e);
      } finally {
        s.close();
      }
    });
  });

  it('/users/<undefined>', async (done) => {
    server(port, async (s) => {
      try {
        const url = new URL('/users/10000.json', base);
        const res = await axios.get(url.toString(), { validateStatus: () => true });
        expect(res.status).toBe(404);
        done();
      } catch (e) {
        done(e);
      } finally {
        s.close();
      }
    });
  });
});
