import { fireEvent, mockTestID, render, wrapper } from '../../tests';

import { Button, ButtonProps } from './';

describe(`Button`, () => {
  const el_container = mockTestID('Button', 'Button');

  const props: ButtonProps = {
    accessibilityLabel: 'Button',
    children: 'ButtonText',
    variant: 'solid',
  };

  it(`render component #${el_container}`, async () => {
    const { findByTestId, toJSON } = render(<Button {...props} />, {
      wrapper,
    });
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it(`should call function one time when pressed`, async () => {
    const onPress = jest.fn();
    const { findByTestId, toJSON } = render(<Button {...props} onPress={onPress} />, {
      wrapper,
    });
    const sut = await findByTestId(el_container);
    fireEvent.press(sut);
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(toJSON()).toMatchSnapshot();
  });

  it(`should have text inside button`, async () => {
    const { findByText, toJSON } = render(<Button {...props} />, {
      wrapper,
    });
    const sut = await findByText(props.children as string);
    expect(sut).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
