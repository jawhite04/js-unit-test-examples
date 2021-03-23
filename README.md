# js-unit-test-examples
Examples of good and bad unit tests.

## Intent

We've experienced some problematic patterns in tests. This repo exists to highlight these patterns in an easy-to-read format. Hopefully we can persuade others to consider these problematic patterns and adapt accordingly.

- `src/destructuring.js`
    - i've seen sinon not stub destructured objects; prove or disprove it here.
- `src/selfInvoking.js`
    - I've seen sinon be challenged with self-invoking code (due to, I think, how modules are loaded and cached). prove or disprove difficulty with self-invoking code here.
- `src/common/*.js`
    - these set up problems, but themselves are not intended to be problematic. the interactions with the callees is the problematic part.

## Dev: getting started

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
