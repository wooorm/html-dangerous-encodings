# html-dangerous-encodings

[![Build][build-badge]][build]
[![Size][size-badge]][size]

List of dangerous (security concerns, [1][], [2][]) HTML [character encoding
labels][encodings].

## Install

[npm][]:

```sh
npm install html-dangerous-encodings
```

## Use

```js
var htmlDangerousEncodings = require('html-dangerous-encodings')

console.log(htmlDangerousEncodings)
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

`Array.<string>` — List of lowercase encoding labels.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/html-dangerous-encodings.svg

[build]: https://travis-ci.org/wooorm/html-dangerous-encodings

[size-badge]: https://img.shields.io/bundlephobia/minzip/html-dangerous-encodings.svg

[size]: https://bundlephobia.com/result?p=html-dangerous-encodings

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/meta#attr-charset

[2]: https://encoding.spec.whatwg.org/#security-background

[encodings]: https://github.com/wooorm/html-encodings
