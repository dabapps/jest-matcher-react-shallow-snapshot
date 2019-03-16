import * as React from 'react';

describe('toMatchShallowSnapshot', () => {
  it('renders some basic markup', () => {
    const element = (
      <div>
        <p>I am a child!</p>
      </div>
    );

    expect(element).toMatchReactShallowSnapshot();
  });
});
