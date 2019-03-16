# jest-matcher-react-shallow-snapshot

**A jest matcher for shallow rendered React component snapshots**

[![CircleCI](https://circleci.com/gh/JakeSidSmith/jest-matcher-react-shallow-snapshot.svg?style=svg)](https://circleci.com/gh/JakeSidSmith/jest-matcher-react-shallow-snapshot)

## About

This is a jest matcher that allows you to easily create shallow snapshots of React components will full support for:

* React.memo
* React.forwardRef
* React.Fragment
* React.createContext (Provider and Consumer)
* ReactDOM.createPortal
* Functional components
* Component classes

The output of this matcher is far more informative than other existing solutions, providing context of memo wrapped components, fragments, etc, and does not require importing a renderer for each of your test files.

This relies on [react-shallow-renderer](https://www.npmjs.com/package/@jakesidsmith/react-shallow-renderer) under the hood, which you could use without the jest matcher if you prefer / are using another test suite.

Check out the [react-shallow-renderer](https://www.npmjs.com/package/@jakesidsmith/react-shallow-renderer) readme for some examples of the snapshot output.

## Example

```jsx
expect(<MyComponent />).toMatchReactShallowSnapshot();
```

## Install

```shell
npm i @jakesidsmith/jest-matcher-react-shallow-snapshot -S
```

## Configuration

### Jest config

This library requires you to define a `setupFilesAfterEnv` entry in your jest config (or `setupTestFrameworkScriptFile` for older versions of jest).

This should point to a file which will be used to initialize custom matchers:

```js
module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/path/to/custom-matchers.js'
  ]
};
```

If you don't already have a such a file you should create one, and then simply import this library in that file:

```js
import '@jakesidsmith/jest-matcher-react-shallow-snapshot';
```

If you are using TypeScript, importing this file from your setup file should apply the types needed to call `.toMatchReactShallowSnapshot`. If it doesn't, then make sure that the setup file is included in your tsconfig.

## Usage

Now you can simply render a react component and expect it to match your shallow snapshot:

```jsx
expect(<MyComponent />).toMatchReactShallowSnapshot();
```
