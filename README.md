# js-unit-test-examples

Examples of good and bad unit tests.

## TLDR:
Mocha/Chai/Sinon unit tests vs Jest unit tests; my preference is Jest.

## Intent

I've experienced some problematic patterns in tests. This repo exists to highlight these patterns in an easy-to-read format. Hopefully I can persuade others to consider these problematic patterns and adapt accordingly.

## Unit testing use cases

### `src/destructuring.js`
```js
// assume foo.js looks like:
const bar = { /* some object or something */ };
module.exports = { bar };
```

```js
// a typical require
const foo = require('./foo');
```

```js
// require + dot notation
const bar = require('./foo').bar;
```

```js
// require + destructuring
const { bar } = require('./foo');
```

Sinon can handle dependencies which incorporate destructuring or dot notation in the require statement. Depending on what is typical for the developer, the pattern for stubbing this may be slightly different.

Jest just handles it.

### `src/selfInvoking.js`

I've seen Sinon be challenged with self-invoking code due to how modules are loaded and cached. Jest has features for module caching, making its tests more straightforward in this context.

### `src/testAware.js`

Ideally, application source code is not where environment selection is being managed. Environment-specific values should be provided by the build system and code should use the value provided irrespective of environment.

Exceptions exist. For example, a native mobile app might use a compiler directive to expose UI testing hooks.

### `src/common/*.js`

These set up problems, but themselves are not intended to be problematic. the interactions with the callees is the problematic part.

## Jest: the downside

Mocha/Chai/Sinon, together, have a 111 package, 18MB footprint on disk.

Jest, on the other hand, weighs in with a 328 package, 44MB footprint on disk.

In a testing context, I'm not remarkably concerned -- Jest should be a dev dependency, and is not intended to be published alongside app code. Though, with a larger ecosystem, it can be easier for bloated or leaky packages to get included.

Mocha/Chai/Sinon is a bit leaner.

## Dev

### Getting started

```
npm install
```

- `npm run test:mocha` for mocha-based unit tests
- `npm run test:jest` for jest-based unit tests

### Prereqs:
- node 12+
- npm 7+ (look for the v2 lockfile)

### VSCode plugins:
- dbaeumer.vscode-eslint

### Unit tests: what is a "unit"?

In this project, a unit is one file, a unit test tests one file. The module under test/unit under test shall have all* external dependencies mocked out.

_(* within reason - in my opinion, node built-ins are in a gray area. A good rule of thumb: if it needs to be `require`d, mock it.)_

### Contributing:
1. Add or modify `src/*` code which exemplify **simple** unit testing use cases.
1. Create unit tests for mocha/chai/sinon and jest.
    - Use existing `*.j.spec.js` and `*.m.spec.js` test naming conventions.
    - Both `npm run test:mocha` and `npm run test:jest` must pass.
    - Test coverage shall remain 100% across the board.
    - `npm run lint` shall find no errors or warnings. (Tip: try to follow what eslint is suggesting, instead of overriding a rule)
1. As needed, update config files.
1. Update README.md with a summary of the use case.
1. Open a MR. Include:
    - A summary of your update
    - Results of `npm run test:mocha` and `npm run test:jest`
    - Results of `npm run lint`
    