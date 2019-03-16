declare namespace jest {
  interface Matchers<R> {
    toMatchReactShallowSnapshot(): R;
  }
}
