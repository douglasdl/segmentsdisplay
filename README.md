<h1 align="center">
   <b>
        <a href="https://github.com/douglasdl"><img src="https://douglasdl.github.io/images/SegmentsDisplay.png" /></a><br>
    </b>
</h1>

<p align="center">Promise based HTTP client for the browser and node.js</p>

<p align="center">
    <a href="https://github.com/douglasdl"><b>Website</b></a> •
    <a href="https://github.com/douglasdl"><b>Documentation</b></a>
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/@douglasdl/segmentsdisplay.svg?style=flat-square)](https://www.npmjs.com/package/@douglasdl/segmentsdisplay)
<!-- [![Build status](https://img.shields.io/github/actions/workflow/status/@douglasdl/segmentsdisplay/ci.yml?branch=v1.x&label=CI&logo=github&style=flat-square)](https://github.com/@douglasdl/segmentsdisplay/actions/workflows/ci.yml) -->
<!-- [![code coverage](https://img.shields.io/coveralls/mzabriskie/@douglasdl/segmentsdisplay.svg?style=flat-square)](https://coveralls.io/r/mzabriskie/@douglasdl/segmentsdisplay) -->
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@douglasdl/segmentsdisplay&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=@douglasdl/segmentsdisplay)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@douglasdl/segmentsdisplay?style=flat-square)](https://bundlephobia.com/package/@douglasdl/segmentsdisplay@latest)
<!-- [![npm downloads](https://img.shields.io/npm/dm/@douglasdl/segmentsdisplay.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@douglasdl/segmentsdisplay) -->

</div>

## Table of Contents

  - [Features](#features)
  - [Browser Support](#browser-support)
  - [Installing](#installing)
    - [Package manager](#package-manager)
  - [Example](#example)
  - [TypeScript](#typescript)
  - [Resources](#resources)
  - [Credits](#credits)
  - [License](#license)

## Features

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- Make [http](https://nodejs.org/api/http.html) requests from node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for [JSON](https://www.json.org/json-en.html) data
- 🆕 Automatic data object serialization to `multipart/form-data` and `x-www-form-urlencoded` body encodings
- Client side support for protecting against [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

## Installing

### Package manager

Using npm:

```bash
$ npm i @douglasdl/segmentsdisplay
```

Using bower:

```bash
$ bower install @douglasdl/segmentsdisplay
```

Using yarn:

```bash
$ yarn add @douglasdl/segmentsdisplay
```

Using pnpm:

```bash
$ pnpm add @douglasdl/segmentsdisplay
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import { SegmentsDisplay } from '@douglasdl/segmentsdisplay';
```

## Example

> **Note** CommonJS usage
> In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()`, use the following approach:

```js
import { SegmentsDisplay } from '@douglasdl/segmentsdisplay';

// Render a 16 Segments Display with the character "D"
<Display16Segments 
    value={"D"}
    size={100}
/>
```

## TypeScript

@douglasdl/segmentsdisplay includes [TypeScript](https://typescriptlang.org) definitions and a type guard for axios errors.

```typescript

```

## Resources

* [Changelog](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
* [Ecosystem](https://github.com/axios/axios/blob/v1.x/ECOSYSTEM.md)
* [Contributing Guide](https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md)

## Credits

@douglasdl/segmentsdisplay is inspired on old electronic components and displays.

## License

[MIT](LICENSE)
