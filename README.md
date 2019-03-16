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

This relies on [@jakesidsmith/react-shallow-renderer](https://www.npmjs.com/package/@jakesidsmith/react-shallow-renderer) under the hood, which you could use without the jest matcher if you prefer / are using another test suite.

Check out the [@jakesidsmith/react-shallow-renderer](https://www.npmjs.com/package/@jakesidsmith/react-shallow-renderer) readme for some examples of the snapshot output.

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

In your jest config add this library to `setupFilesAfterEnv`:

```js
module.exports = {
  setupFilesAfterEnv: [
    '@jakesidsmith/jest-matcher-react-shallow-snapshot'
  ]
};
```

Or for older versions of jest that use `setupTestFrameworkScriptFile` you should import this library in your setup file:

Jest config:

```js
module.exports = {
  setupTestFrameworkScriptFile: './path/to/your-setup-file.js'
};
```

Your setup file:

```js
import '@jakesidsmith/jest-matcher-react-shallow-snapshot';
```

### TypeScript

If you are using TypeScript you will need to add `./node_modules/@jakesidsmith/` to your tsconfig.json `typeRoots`:

```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types/",
      "./node_modules/@jakesidsmith/"
    ]
  }
}
```

This just adds the types that allow you to call `.toMatchReactShallowSnapshot` on your expect statements.

## Usage

Now you can simply render a react component and expect it to match your shallow snapshot:

```jsx
expect(<MyComponent />).toMatchReactShallowSnapshot();
```
