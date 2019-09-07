# is-valid-http-url

[![Build Status](https://travis-ci.org/neosiae/is-valid-http-url.svg?branch=master)](https://travis-ci.org/neosiae/is-valid-http-url)

Check whether a string is a valid HTTP URL

This module is based on a [gist](https://gist.github.com/dperini/729294) by [Diego Perini](https://github.com/dperini).

## Install

Install is-valid-http-url using [npm](https://www.npmjs.com):

> npm install --save is-valid-http-url

Or via [yarn](https://yarnpkg.com/en):

> yarn add is-valid-http-url

## Usage

```javascript
const isUrl = require("is-valid-http-url");

isUrl("http://example.com"); // true
isUrl("https://www.example.com/foo/?bar=baz&inga=42&quux"); // true

isUrl("example.com"); // false
isUrl("http://foo.bar?q=Spaces should be encoded"); // false
```

## License

MIT
