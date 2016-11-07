# html-dangerous-encodings [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

List of dangerous (security concerns, [1][], [2][]) HTML [character
encoding labels][encodings].

## Installation

[npm][]:

```bash
npm install html-dangerous-encodings
```

**html-dangerous-encodings** is also available as an AMD, CommonJS, and globals
module, [uncompressed and compressed][releases].

## Usage

```javascript
var htmlDangerousEncodings = require('html-dangerous-encodings');
```

Yields:

```js
[ 'hz-gb-2312',
  'csiso2022kr',
  'csiso2022jp',
  'iso-2022-jp',
  'iso-2022-cn',
  'iso-2022-cn-ext',
  'iso-2022-kr',
  'utf-16be',
  'utf-16le' ]
```

## API

### `htmlDangerousEncodings`

`Array.<string>` — List of lower-case encoding labels.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/html-dangerous-encodings.svg

[build-page]: https://travis-ci.org/wooorm/html-dangerous-encodings

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/html-dangerous-encodings.svg

[coverage-page]: https://codecov.io/github/wooorm/html-dangerous-encodings?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/html-dangerous-encodings/releases

[license]: LICENSE

[author]: http://wooorm.com

[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/meta#attr-charset

[2]: https://encoding.spec.whatwg.org/#security-background

[encodings]: https://github.com/wooorm/html-encodings
