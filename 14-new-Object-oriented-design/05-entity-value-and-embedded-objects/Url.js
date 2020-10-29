// BEGIN (write your solution here)
import { URL } from 'url';

export default class Url {
  constructor(url) {
    this.url = new URL(url);
    this.url.scheme = this.url.protocol.slice(0, -1);
  }

  getScheme() {
    return this.url.scheme;
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    const entries = Array.from(this.url.searchParams.entries());
    return entries.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  }

  getQueryParam(name, defaultName = null) {
    const value = this.url.searchParams.get(name);
    return value || defaultName;
  }

  toString() {
    return this.url.toString();
  }

  equals(url) {
    return url.toString() === this.toString();
  }
}
// END
