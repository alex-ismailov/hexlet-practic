import axios from 'axios';

import startServer from '..';

const hostname = 'http://localhost';
const port = 9000;
const base = `${hostname}:${port}`;

describe('Phonebook', () => {
  let server;

  describe('Server', () => {
    it('GET /', (done) => {
      startServer(port, async (s) => {
        server = s;
        try {
          const res = await axios.get(base);
          expect(res.data).toBe('Welcome to The Phonebook\nRecords count: 1000');
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    afterEach(() => {
      server.close();
    });

    it('GET /search?q=<substr>', (done) => {
      const expected = `
Miss Lindsey Hermann, 1-559-706-3580
Miss Herman Orn, 988-099-6371
Ms. Liana Herman, (422) 346-7454
Herman Oberbrunner, 315-607-3728`;

      startServer(port, async (s) => {
        server = s;
        const url = new URL('/search', base);
        url.searchParams.set('q', 'HermaN');
        try {
          const res = await axios.get(url.toString());
          expect(res.data).toBe(expected.trim());
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    it('GET /search?q=<substr> 2', (done) => {
      const expected = `
Lilliana Conn, 1-484-608-2239
Ms. Liana Herman, (422) 346-7454`;

      startServer(port, async (s) => {
        server = s;
        const url = new URL('/search', base);
        url.searchParams.set('q', 'LIANA');
        try {
          const res = await axios.get(url.toString());
          expect(res.data).toBe(expected.trim());
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    it('GET /search?q=<undefined>', (done) => {
      const expected = '';

      startServer(port, async (s) => {
        server = s;
        const url = new URL('/search', base);
        url.searchParams.set('q', 'AAsdf2');
        try {
          const res = await axios.get(url.toString());
          expect(res.data).toBe(expected.trim());
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    it('GET /search', (done) => {
      const expected = '';

      startServer(port, async () => {
        const url = new URL('/search', base);
        try {
          const res = await axios.get(url.toString());
          expect(res.data).toBe(expected);
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });
  });
});
