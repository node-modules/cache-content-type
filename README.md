# cache-content-type

[![NPM version][npm-image]][npm-url]
[![Node.js CI](https://github.com/node-modules/cache-content-type/actions/workflows/nodejs.yml/badge.svg)](https://github.com/node-modules/cache-content-type/actions/workflows/nodejs.yml)
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![Node.js Version](https://img.shields.io/node/v/cache-content-type.svg?style=flat)](https://nodejs.org/en/download/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/node-modules/cache-content-type)

[npm-image]: https://img.shields.io/npm/v/cache-content-type.svg?style=flat-square
[npm-url]: https://npmjs.org/package/cache-content-type
[codecov-image]: https://codecov.io/github/node-modules/cache-content-type/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/node-modules/cache-content-type?branch=master
[snyk-image]: https://snyk.io/test/npm/cache-content-type/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/cache-content-type
[download-image]: https://img.shields.io/npm/dm/cache-content-type.svg?style=flat-square
[download-url]: https://npmjs.org/package/cache-content-type

The same as [mime-types](https://github.com/jshttp/mime-types)'s contentType method, but with result cached.

## Install

```bash
npm i cache-content-type
```

## Usage

```ts
import { getType } from 'cache-content-type';

const contentType = getType('html');
assert.equal(contentType, 'text/html; charset=utf-8');
```

## License

[MIT](LICENSE)

## Contributors

[![Contributors](https://contrib.rocks/image?repo=node-modules/cache-content-type)](https://github.com/node-modules/cache-content-type/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).
