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

  it('renders a some complex components', () => {
    const handleSubmit = () => null;

    interface MyComponentProps {
      handleSubmit: typeof handleSubmit;
    }

    const Button: React.FunctionComponent = ({ children }) => (
      <button type="submit">{children}</button>
    );

    const ButtonMemo = React.memo<React.PropsWithChildren<{}>>(Button);

    const MyComponent: React.FunctionComponent<MyComponentProps> = props => (
      <>
        <h1>Log in</h1>
        <form onSubmit={props.handleSubmit}>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <ButtonMemo>Log in</ButtonMemo>
        </form>
      </>
    );

    const MyComponentMemo = React.memo(MyComponent);

    expect(
      <MyComponentMemo handleSubmit={handleSubmit} />
    ).toMatchReactShallowSnapshot();
  });
});
