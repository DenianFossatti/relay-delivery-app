import { fireEvent, mockTestID, render, wrapper } from '../../tests';

import { Pressable, PressableProps } from '.';

describe(`Pressable`, () => {
  const props: PressableProps = {
    accessibilityLabel: 'Pressable',
    onPress: jest.fn(),
    testID: 'Pressable',
  };

  const { findByTestId, toJSON } = render(<Pressable {...props} />, {
    wrapper,
  });

  const el_container = mockTestID('Pressable', props.testID!);

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container);
    expect(sut).toBeTruthy();

    fireEvent(sut, 'press');
    expect(props.onPress).toHaveBeenCalled();
  });

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
