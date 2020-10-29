// BEGIN (write your solution here)
import { URL } from 'url';

export default class Url {
  constructor(url) {
    this.url = new URL(url);
    this.url.scheme = this.url.protocol.slice(0, -1);
    this.url.queryParams = Object.fromEntries(this.url.searchParams);
  }

  getScheme() {
    return this.url.scheme;
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    return this.url.queryParams;
  }

  getQueryParam(name, defaultName = null) {
    return this.url.searchParams.has(name)
      ? this.url.searchParams.get(name)
      : defaultName;
  }

  toString() {
    return this.url.toString();
  }

  equals(url) {
    return url.toString() === this.toString();
  }
}
// END
