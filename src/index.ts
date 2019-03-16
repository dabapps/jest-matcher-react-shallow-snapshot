import { ReactShallowRenderer } from '@jakesidsmith/react-shallow-renderer';
import { toMatchSnapshot } from 'jest-snapshot';

expect.extend({
  toMatchReactShallowSnapshot(reactElement) {
    const renderer = new ReactShallowRenderer(reactElement);
    return toMatchSnapshot.call(
      this as any,
      renderer,
      'toMatchShallowSnapshot'
    );
  },
});
