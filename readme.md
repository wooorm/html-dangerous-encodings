# html-dangerous-encodings

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Size][size-badge]][size]

List of dangerous (security concerns, [1][], [2][]) HTML [character encoding
labels][encodings].

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install html-dangerous-encodings
```

## Use

```js
import {htmlDangerousEncodings} from 'html-dangerous-encodings'

console.log(htmlDangerousEncodings)
```

Yields:

```js
[
  'hz-gb-2312',
  'csiso2022kr',
  'csiso2022jp',
  'iso-2022-jp',
  'iso-2022-cn',
  'iso-2022-cn-ext',
  'iso-2022-kr',
  'utf-16be',
  'utf-16le'
]
```

## API

This package exports the following identifiers: `htmlDangerousEncodings`.
There is no default export.

### `htmlDangerousEncodings`

`Array.<string>` — List of lowercase encoding labels.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/wooorm/html-dangerous-encodings/workflows/main/badge.svg

[build]: https://github.com/wooorm/html-dangerous-encodings/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/html-dangerous-encodings.svg

[coverage]: https://codecov.io/github/wooorm/html-dangerous-encodings

[size-badge]: https://img.shields.io/bundlephobia/minzip/html-dangerous-encodings.svg

[size]: https://bundlephobia.com/result?p=html-dangerous-encodings

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/meta#attr-charset

[2]: https://encoding.spec.whatwg.org/#security-background

[encodings]: https://github.com/wooorm/html-encodings
