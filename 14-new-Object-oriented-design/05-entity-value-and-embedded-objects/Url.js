// BEGIN (write your solution here)
import { URL } from 'url';

export default class Url {
  constructor(url) {
    this.url = new URL(url);
  }

  getScheme() {
    return this.url.protocol.split(':')[0];
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

  equals(url) {
    return url.url.href === this.url.href;
  }
}
// END
