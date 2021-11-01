# html-dangerous-encodings

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Size][size-badge]][size]

List of dangerous HTML character encoding labels.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`htmlDangerousEncodings`](#htmldangerousencodings)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a list of character encodings that are dangerous according to the
[spec][].

## When should I use this?

Probably never!
Maybe when building an HTML linter.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install html-dangerous-encodings
```

In Deno with [Skypack][]:

```js
import {htmlDangerousEncodings} from 'https://cdn.skypack.dev/html-dangerous-encodings@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {htmlDangerousEncodings} from 'https://cdn.skypack.dev/html-dangerous-encodings@2?min'
</script>
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

List of dangerous HTML character encoding labels (`Array<string>`)

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/html-encodings`](https://github.com/wooorm/html-encodings)
    — info on HTML character encodings

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[spec]: https://encoding.spec.whatwg.org/#security-background
